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
      from: "Contact Form - Apex Exotic Cars <onboarding@resend.dev>",
      to: ["c.ioannou.94@gmail.com"],
      subject: `New message from ${first_name} ${last_name}`,
      html: `
  <div style="background:#f4f7fb;padding:40px 20px;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
      
      <div style="background:linear-gradient(135deg,#111827,#1f2937);padding:32px;text-align:center;">
        <h1 style="margin:0;color:white;font-size:28px;">
          New Contact Message
        </h1>
        <p style="margin-top:10px;color:#d1d5db;font-size:14px;">
          Someone submitted the contact form
        </p>
      </div>

      <div style="padding:32px;">
        
        <div style="margin-bottom:24px;">
          <p style="margin:0;font-size:13px;color:#6b7280;">Full Name</p>
          <p style="margin:6px 0 0;font-size:18px;color:#111827;font-weight:600;">
            ${first_name} ${last_name}
          </p>
        </div>

        <div style="margin-bottom:24px;">
          <p style="margin:0;font-size:13px;color:#6b7280;">Email Address</p>
          <p style="margin:6px 0 0;font-size:16px;color:#2563eb;">
            ${email}
          </p>
        </div>

        <div style="margin-bottom:24px;">
          <p style="margin:0;font-size:13px;color:#6b7280;">Phone Number</p>
          <p style="margin:6px 0 0;font-size:16px;color:#111827;">
            ${phone_number}
          </p>
        </div>

        <div>
          <p style="margin:0 0 12px;font-size:13px;color:#6b7280;">
            Message
          </p>

          <div style="
            background:#f9fafb;
            border:1px solid #e5e7eb;
            border-radius:14px;
            padding:20px;
            color:#111827;
            line-height:1.7;
            font-size:15px;
          ">
            ${message}
          </div>
        </div>

      </div>

      <div style="
        border-top:1px solid #e5e7eb;
        padding:20px;
        text-align:center;
        font-size:12px;
        color:#9ca3af;
      ">
        Contact form notification
      </div>

    </div>
  </div>
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
