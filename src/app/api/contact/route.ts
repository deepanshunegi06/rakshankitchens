import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Format the SMS message
    const smsMessage = `
New Contact Form Submission:
Name: ${data.from_name}
Email: ${data.from_email}
Phone: ${data.phone_number}
Service: ${data.service}
Message: ${data.message}
    `.trim();

    // Send SMS using Twilio
    await twilioClient.messages.create({
      body: smsMessage,
      to: '+919310123565', // Your phone number
      from: process.env.TWILIO_PHONE_NUMBER // Your Twilio phone number
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending SMS:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 