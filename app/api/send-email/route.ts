import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, fromPage } = body;

    const { error } = await resend.emails.send({
      from: 'Saroja <onboarding@resend.dev>',
      to: ['contact@sarojacaterers.in'],
      subject: `[${fromPage}] ${subject || 'New Submission'}`,
      react: EmailTemplate({
        name,
        email,
        phone,
        message,
        fromPage,
      }),
    });

    if (error) return NextResponse.json({ error }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}