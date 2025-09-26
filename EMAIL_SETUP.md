# Email Notification Setup Guide

## 📧 Email Configuration for Contact Form Notifications

Your contact form is now configured to send email notifications to **zamamehdi9@gmail.com** whenever someone submits the form.

## 🔧 Setup Instructions

### 1. Gmail App Password Setup

Since you're using Gmail, you need to create an App Password:

1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to **Security** → **2-Step Verification**
4. Scroll down to **App passwords**
5. Select **Mail** and **Other (Custom name)**
6. Enter "PVNG Website" as the app name
7. Copy the generated 16-character password

### 2. Update Environment Variables

Edit your `.env.local` file and replace the placeholder:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=zamamehdi9@gmail.com
EMAIL_PASS=your-16-character-app-password-here
NOTIFICATION_EMAIL=zamamehdi9@gmail.com
```

**Replace `your-16-character-app-password-here` with your actual Gmail App Password.**

### 3. Test Email Configuration

You can test the email setup by making a POST request to:
```
http://localhost:3000/api/test-email
```

Or use this curl command:
```bash
curl -X POST http://localhost:3000/api/test-email
```

### 4. How It Works

1. **User submits contact form** → Data saved to MongoDB Atlas
2. **Email notification sent** → You receive formatted email at zamamehdi9@gmail.com
3. **Fallback mechanism** → If email fails, form still saves to database

## 📨 Email Format

The notification emails include:
- **Professional HTML formatting** with PVNG branding
- **Complete contact details** (name, email, phone, organization)
- **Full message content**
- **Submission timestamp and IP address**
- **Direct reply links** (click email to reply)

## 🚨 Troubleshooting

### Common Issues:

1. **"Invalid login" error**
   - Make sure you're using the App Password, not your regular Gmail password
   - Verify 2FA is enabled on your Gmail account

2. **"Connection timeout" error**
   - Check your internet connection
   - Verify Gmail SMTP settings are correct

3. **"Authentication failed" error**
   - Double-check the App Password
   - Make sure there are no extra spaces in the password

### Testing Steps:

1. **Start the development server**: `npm run dev`
2. **Test email endpoint**: Visit `/api/test-email` or use curl
3. **Submit contact form**: Fill out and submit the form
4. **Check your email**: Look for the notification in zamamehdi9@gmail.com

## 🔒 Security Notes

- **Never commit** your `.env.local` file to version control
- **App Passwords** are safer than using your main Gmail password
- **Environment variables** are used for all email configuration
- **IP logging** helps track form submissions

## 📊 Monitoring

- **Console logs** show email send status
- **Database** stores all submissions regardless of email status
- **API responses** include email send status
- **Error handling** ensures form still works if email fails

## 🎯 Next Steps

1. Update your `.env.local` with the Gmail App Password
2. Test the email functionality
3. Submit a test contact form
4. Verify you receive the notification email

Your contact form is now fully integrated with both database storage and email notifications! 🎉


