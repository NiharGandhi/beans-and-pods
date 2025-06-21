import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const data = await req.json();
    const { name, email, phone, company, subject, message } = data;

    try {
        const transporter = nodemailer.createTransport({
            host: "send.one.com",
            port: 587,
            secure: false,
            auth: {
                user: "site@beansandpods.com", 
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Beans and Pods" <site@beansandpods.com>`,
            to: "info@beansandpods.com",
            cc: "office@beansandpods.com",
            subject: `[Contact] ${subject}`,
            replyTo: email,
            text: `
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
      `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Email send failed:", err);
        return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
    }
}
