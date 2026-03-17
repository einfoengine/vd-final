import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { 
      name, email, whatsapp, linkedin, facebook, website, 
      businessDetails, helpRequired,
      // Audit Form Specifics
      businessName, targetAudience, competitors, monthlyBudget, services, socialMediaLinks, auditGoals
    } = body;

    // NOTE: Configure RESEND_FROM_EMAIL and RESEND_TO_EMAIL in your .env file
    // For testing without a domain, 'from' must be 'onboarding@resend.dev'
    // and 'to' must be the email address you used to sign up for Resend.
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL || 'vibely.digital.hq@gmail.com'; 

    const subject = auditGoals ? `New Audit Request from ${name}` : `New Meeting Request from ${name}`;

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subject,
      replyTo: email,
      html: `
        <h1>${subject}</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'N/A'}</p>
        <p><strong>Website:</strong> ${website || 'N/A'}</p>
        
        ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ''}
        ${facebook ? `<p><strong>Facebook:</strong> ${facebook}</p>` : ''}
        
        <hr />
        <h3>Business Details</h3>
        ${businessName ? `<p><strong>Business Name:</strong> ${businessName}</p>` : ''}
        ${businessDetails ? `<p><strong>Details:</strong><br/>${businessDetails.replace(/\n/g, '<br>')}</p>` : ''}
        ${monthlyBudget ? `<p><strong>Monthly Budget:</strong> ${monthlyBudget}</p>` : ''}
        ${targetAudience ? `<p><strong>Target Audience:</strong> ${targetAudience}</p>` : ''}
        ${competitors ? `<p><strong>Competitors:</strong> ${competitors}</p>` : ''}
        ${socialMediaLinks ? `<p><strong>Social Links:</strong><br/>${socialMediaLinks.replace(/\n/g, '<br>')}</p>` : ''}
        
        ${services && services.length > 0 ? `
          <hr />
          <h3>Services of Interest</h3>
          <ul>
            ${services.map((s: string) => `<li>${s}</li>`).join('')}
          </ul>
        ` : ''}

        <hr />
        <h3>Request Details</h3>
        ${helpRequired ? `<p><strong>Help Required:</strong><br/>${helpRequired.replace(/\n/g, '<br>')}</p>` : ''}
        ${auditGoals ? `<p><strong>Audit Goals:</strong><br/>${auditGoals.replace(/\n/g, '<br>')}</p>` : ''}
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
