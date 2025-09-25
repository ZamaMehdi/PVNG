import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { sendContactFormNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { fullName, orgName, email, telNumber, serviceType, message } = body;
    
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get database connection
    const { db } = await getDatabase();
    const collection = db.collection('contact_submissions');

    // Create submission document
    const submission = {
      fullName,
      orgName: orgName || '',
      email,
      telNumber: telNumber || '',
      serviceType: serviceType || '',
      message,
      submittedAt: new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Insert into database
    const result = await collection.insertOne(submission);

    // Send email notification
    const emailSent = await sendContactFormNotification(submission);

    // Log the submission
    console.log('New contact form submission:', result.insertedId);
    console.log('Email notification sent:', emailSent);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        submissionId: result.insertedId,
        emailSent: emailSent
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { db } = await getDatabase();
    const collection = db.collection('contact_submissions');
    
    // Get all submissions (for admin purposes)
    const submissions = await collection
      .find({})
      .sort({ submittedAt: -1 })
      .limit(50)
      .toArray();

    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
