import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateContactEmailTemplate } from "@/lib/email-template";

export const runtime = "nodejs";

const RECEIVER_EMAIL = "Dagmawimuluwork@gmail.com";

const requiredFields = ["name", "email", "subject", "message"] as const;

type ContactPayload = Record<(typeof requiredFields)[number], string>;

const getTrimmedPayload = (body: unknown): ContactPayload | null => {
  if (!body || typeof body !== "object") {
    return null;
  }

  const payload = body as Partial<Record<(typeof requiredFields)[number], unknown>>;
  const trimmed = Object.fromEntries(
    requiredFields.map((field) => [field, typeof payload[field] === "string" ? payload[field]?.trim() : ""])
  ) as ContactPayload;

  return requiredFields.every((field) => trimmed[field]) ? trimmed : null;
};

export async function POST(request: Request) {
  try {
    const payload = getTrimmedPayload(await request.json());

    if (!payload) {
      return NextResponse.json({ message: "Please fill in every field before sending your message." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } = process.env;

    if (!SMTP_HOST || !SMTP_PASS || !SMTP_PORT || !SMTP_USER) {
      return NextResponse.json({ message: "Email service is not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      auth: {
        pass: SMTP_PASS,
        user: SMTP_USER
      },
      host: SMTP_HOST,
      port: Number.parseInt(SMTP_PORT, 10),
      secure: Number.parseInt(SMTP_PORT, 10) === 465
    });

    await transporter.sendMail({
      from: SMTP_USER,
      html: generateContactEmailTemplate(payload),
      replyTo: payload.email,
      subject: `New portfolio contact request: ${payload.subject}`,
      text: [
        "New Portfolio Contact Request",
        `Full Name: ${payload.name}`,
        `Email Address: ${payload.email}`,
        `Subject: ${payload.subject}`,
        "",
        payload.message
      ].join("\n"),
      to: process.env.SMTP_TO || RECEIVER_EMAIL
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending portfolio contact email:", error);
    return NextResponse.json({ message: "There was a problem sending your message." }, { status: 500 });
  }
}
