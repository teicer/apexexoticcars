import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;
    const apiKey = "re_Rhp3bmVw_AGpJPDG2AsNf7RMtnR3p1rhv";

    if (!apiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const { first_name, last_name, email, phone_number, message } = body;

    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["c.ioannou.94@gmail.com"],
      subject: `New message from ${first_name} ${last_name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone_number}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Something went wrong" },
      { status: 500 },
    );
  }
}
