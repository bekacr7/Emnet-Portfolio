import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Debug logging to see what env vars are loaded
    console.log('Loaded Env Vars:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not Set',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not Set',
      EMAIL_TO: process.env.EMAIL_TO ? 'Set' : 'Not Set',
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: Missing email credentials or recipient. Check .env.local.' },
        { status: 500 }
      );
    }

    // Configure transporter
    // NOTE: In production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Inquiry from ${name} - Portfolio Website`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #F9F9F7; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
            .header { background-color: #7DA2A9; padding: 30px 20px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; }
            .content { padding: 40px 30px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 12px; color: #7DA2A9; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin-bottom: 5px; display: block; }
            .value { font-size: 16px; color: #333333; background: #F9F9F7; padding: 15px; border-radius: 8px; border-left: 4px solid #E0A96D; }
            .footer { background-color: #F0F4F4; padding: 20px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Client Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From</span>
                <div class="value"><strong>${name}</strong> (${email})</div>
              </div>
              
              <div class="field">
                <span class="label">Message</span>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent from your portfolio website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
