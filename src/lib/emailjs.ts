import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your-service-id';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your-template-id';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your-public-key';

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

export async function sendEmailJSNotification(data: ContactFormData): Promise<boolean> {
  try {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // List of recipient emails
    const recipientEmails = [
      'finance@pvngelectromechanical.com',
      'info@pvngelectromechanical.com',
      'sales@pvngelectromechanical.com',
      'zamamehdi9@gmail.com'
    ];

    // Send email to each recipient
    const emailPromises = recipientEmails.map(recipientEmail => {
      const templateParams = {
        to_email: recipientEmail,
        from_name: data.fullName,
        from_email: data.email,
        organization: data.orgName || 'Not provided',
        phone: data.telNumber || 'Not provided',
        service_type: data.serviceType || 'Not specified',
        message: data.message,
        submitted_at: data.submittedAt.toLocaleString(),
        ip_address: data.ipAddress,
        subject: `New Contact Form Submission from ${data.fullName}`
      };

      return emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
    });

    // Wait for all emails to be sent
    const responses = await Promise.all(emailPromises);
    
    console.log('EmailJS emails sent successfully to all recipients:', responses);
    return true;
  } catch (error) {
    console.error('Error sending EmailJS emails:', error);
    return false;
  }
}

export async function sendTestEmailJS(): Promise<boolean> {
  try {
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // List of recipient emails for test
    const recipientEmails = [
      'finance@pvngelectromechanical.com',
      'info@pvngelectromechanical.com',
      'sales@pvngelectromechanical.com',
      'zamamehdi9@gmail.com'
    ];

    // Send test email to each recipient
    const emailPromises = recipientEmails.map(recipientEmail => {
      const templateParams = {
        to_email: recipientEmail,
        from_name: 'PVNG Website Test',
        from_email: 'test@pvng.com',
        organization: 'Test Organization',
        phone: 'Test Phone',
        service_type: 'Test Service',
        message: 'This is a test email to verify EmailJS configuration.',
        submitted_at: new Date().toLocaleString(),
        ip_address: 'Test IP',
        subject: 'Test Email from PVNG Website'
      };

      return emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
    });

    // Wait for all test emails to be sent
    const responses = await Promise.all(emailPromises);
    
    console.log('EmailJS test emails sent successfully to all recipients:', responses);
    return true;
  } catch (error) {
    console.error('Error sending EmailJS test emails:', error);
    return false;
  }
}
