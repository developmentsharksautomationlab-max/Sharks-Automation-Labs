import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resendApiKey = process.env.RESEND_API_KEY || 're_LuvqDMzb_A5tqAagG3tMT6gJnsvHstRDp';
const resend = new Resend(resendApiKey);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      budget,
      companyName,
      companyUrl,
      services,
      projectDetails,
      jobInquiry
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !budget || !services || services.length === 0) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Format services list
    const servicesList = Array.isArray(services) 
      ? services.map((service: string) => `• ${service}`).join('<br>')
      : services;

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #35c4dd; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #35c4dd; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">Phone Number:</div>
                <div class="value">${phoneNumber}</div>
              </div>
              
              <div class="field">
                <div class="label">Budget:</div>
                <div class="value">${budget}</div>
              </div>
              
              ${companyName ? `
              <div class="field">
                <div class="label">Company Name:</div>
                <div class="value">${companyName}</div>
              </div>
              ` : ''}
              
              ${companyUrl ? `
              <div class="field">
                <div class="label">Company URL:</div>
                <div class="value">${companyUrl}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Services Interested In:</div>
                <div class="value">${servicesList}</div>
              </div>
              
              ${projectDetails ? `
              <div class="field">
                <div class="label">Project Details:</div>
                <div class="value">${projectDetails.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              
              ${jobInquiry ? `
              <div class="field">
                <div class="label">Job Inquiry:</div>
                <div class="value">${jobInquiry}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>This email was sent from the Shark Retail contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'syedthesharkretail@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

