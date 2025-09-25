import { NextResponse } from 'next/server';
import { sendTestEmail } from '@/lib/email';

export async function POST() {
  try {
    const emailSent = await sendTestEmail();
    
    if (emailSent) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Test email sent successfully to zamamehdi9@gmail.com'
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send test email. Check your email configuration.'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send test email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
