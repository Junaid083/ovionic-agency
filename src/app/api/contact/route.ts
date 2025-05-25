import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

// Initialize EmailJS with environment variables
emailjs.init({
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
  privateKey: process.env.EMAILJS_PRIVATE_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectIdea } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !projectIdea) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare template parameters
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      project_idea: projectIdea,
      subject: `New Idea Submission from ${firstName} ${lastName}`,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      templateParams
    );

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      response,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
