import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export interface ContactFormData {
  fullName: string;
  orgName?: string;
  email: string;
  telNumber?: string;
  serviceType?: string;
  message: string;
  submittedAt: Date;
  ipAddress: string;
}

export async function sendContactFormNotification(data: ContactFormData): Promise<boolean> {
  try {
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'zamamehdi9@gmail.com';
    
    const mailOptions = {
      from: `"PVNG Website" <${process.env.EMAIL_USER}>`,
      to: notificationEmail,
      subject: `New Contact Form Submission from ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">PVNG Electromechanical Works L.L.C.</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; background: #e9ecef; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 10px; background: white;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #e9ecef; font-weight: bold;">Organization:</td>
                <td style="padding: 10px; background: white;">${data.orgName || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #e9ecef; font-weight: bold;">Email:</td>
                <td style="padding: 10px; background: white;">
                  <a href="mailto:${data.email}" style="color: #007bff; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #e9ecef; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; background: white;">
                  ${data.telNumber ? `<a href="tel:${data.telNumber}" style="color: #007bff; text-decoration: none;">${data.telNumber}</a>` : 'Not provided'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #e9ecef; font-weight: bold;">Service Required:</td>
                <td style="padding: 10px; background: white;">${data.serviceType || 'Not specified'}</td>
              </tr>
            </table>
            
            <h3 style="color: #333;">Message</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #007bff; margin-bottom: 20px;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
            </div>
            
            <div style="background: #e9ecef; padding: 15px; border-radius: 5px; font-size: 14px; color: #666;">
              <p style="margin: 0;"><strong>Submitted:</strong> ${data.submittedAt.toLocaleString()}</p>
              <p style="margin: 5px 0 0 0;"><strong>IP Address:</strong> ${data.ipAddress}</p>
            </div>
          </div>
          
          <div style="background: #343a40; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">This email was sent from the PVNG website contact form.</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">PVNG Electromechanical Works L.L.C. - Dubai, UAE</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission from ${data.fullName}

Contact Details:
- Full Name: ${data.fullName}
- Organization: ${data.orgName || 'Not provided'}
- Email: ${data.email}
- Phone: ${data.telNumber || 'Not provided'}
- Service Required: ${data.serviceType || 'Not specified'}

Message:
${data.message}

Submitted: ${data.submittedAt.toLocaleString()}
IP Address: ${data.ipAddress}

---
This email was sent from the PVNG website contact form.
PVNG Electromechanical Works L.L.C. - Dubai, UAE
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export async function sendTestEmail(): Promise<boolean> {
  try {
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'zamamehdi9@gmail.com';
    
    const mailOptions = {
      from: `"PVNG Website" <${process.env.EMAIL_USER}>`,
      to: notificationEmail,
      subject: 'Test Email from PVNG Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Email Configuration Test</h1>
          </div>
          <div style="padding: 30px; background: #f8f9fa;">
            <p>This is a test email to verify that the email configuration is working correctly.</p>
            <p>If you receive this email, the contact form notifications are properly set up!</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending test email:', error);
    return false;
  }
}
