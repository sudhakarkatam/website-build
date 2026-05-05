import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, country, date, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // works for testing
      to: ["info@rheopharma.com"], // where you receive
      subject: "New Enquiry Form",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Optional Auto Reply
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev", // Ideally contact@yourdomain.com in production
        to: [email],
        subject: "We received your enquiry",
        html: `<p>Thanks ${name}, we will contact you soon.</p>`,
      });
    } catch (autoReplyError) {
      console.error("Auto-reply failed:", autoReplyError);
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
