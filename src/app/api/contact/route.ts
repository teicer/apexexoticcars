import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { first_name, last_name, email, phone_number, message } = body;

    const { error } = await resend.emails.send({
      from: "Apex Exotics.com -<onboarding@resend.dev>",
      to: ["c.ioannou.94@gmail.com"],
      subject: `New message from ${first_name} ${last_name}`,
      html: `
  <div style="background-color:#f9fafb;padding:40px 20px;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e4e7;">
      
      <div style="background:#111111;padding:24px 32px;"> 
        <h1 style="color:#ffffff;margin:0;font-size:24px;">
          New Contact Message
        </h1>
        <p style="color:#d1d5db;margin-top:8px;font-size:14px;">
          A new message was submitted from your website contact form.
        </p>
      </div>

      <div style="padding:32px;">
        
        <div style="margin-bottom:24px;">
          <p style="margin:0 0 6px 0;font-size:13px;color:#6b7280;">
            FULL NAME
          </p>

          <p style="margin:0;font-size:16px;color:#111827;font-weight:600;">
            ${first_name} ${last_name}
          </p>
        </div>

        <div style="margin-bottom:24px;">
          <p style="margin:0 0 6px 0;font-size:13px;color:#6b7280;">
            EMAIL
          </p>

          <p style="margin:0;font-size:16px;color:#111827;">
            ${email}
          </p>
        </div>

        <div style="margin-bottom:24px;">
          <p style="margin:0 0 6px 0;font-size:13px;color:#6b7280;">
            PHONE NUMBER
          </p>

          <p style="margin:0;font-size:16px;color:#111827;">
            ${phone_number}
          </p>
        </div>

        <div>
          <p style="margin:0 0 10px 0;font-size:13px;color:#6b7280;">
            MESSAGE
          </p>

          <div style="
            background:#f9fafb;
            border:1px solid #e5e7eb;
            border-radius:12px;
            padding:18px;
            color:#111827;
            line-height:1.7;
            font-size:15px;
            white-space:pre-wrap;
          ">
            ${message}
          </div>
        </div>
      </div>

      <div style="
        padding:20px 32px;
        border-top:1px solid #e5e7eb;
        background:#fafafa;
      ">
        <p style="
          margin:0;
          color:#6b7280;
          font-size:12px;
          text-align:center;
        ">
          This email was automatically sent from your website<b><i>Apex Exotics</i></b> contact form.
        </p>
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
