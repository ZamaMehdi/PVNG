# EmailJS Setup Guide (No App Password Required!)

## 🎉 Easy Email Setup Without Gmail App Passwords

This setup uses EmailJS, which sends emails directly from your website without needing server-side email configuration or Gmail App Passwords.

**📧 Multiple Recipients**: Form submissions will be sent to all four email addresses:
- finance@pvngelectromechanical.com
- info@pvngelectromechanical.com
- sales@pvngelectromechanical.com
- zamamehdi9@gmail.com

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Gmail Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail**
4. Connect your Gmail account (zamamehdi9@gmail.com)
5. **No App Password needed!** EmailJS handles this for you
6. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```html
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
        <td style="padding: 10px; background: white;">{{from_name}}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background: #e9ecef; font-weight: bold;">Organization:</td>
        <td style="padding: 10px; background: white;">{{organization}}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background: #e9ecef; font-weight: bold;">Email:</td>
        <td style="padding: 10px; background: white;">
          <a href="mailto:{{from_email}}" style="color: #007bff; text-decoration: none;">{{from_email}}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px; background: #e9ecef; font-weight: bold;">Phone:</td>
        <td style="padding: 10px; background: white;">{{phone}}</td>
      </tr>
      <tr>
        <td style="padding: 10px; background: #e9ecef; font-weight: bold;">Service Required:</td>
        <td style="padding: 10px; background: white;">{{service_type}}</td>
      </tr>
    </table>
    
    <h3 style="color: #333;">Message</h3>
    <div style="background: white; padding: 15px; border-left: 4px solid #007bff; margin-bottom: 20px;">
      <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
    </div>
    
    <div style="background: #e9ecef; padding: 15px; border-radius: 5px; font-size: 14px; color: #666;">
      <p style="margin: 0;"><strong>Submitted:</strong> {{submitted_at}}</p>
      <p style="margin: 5px 0 0 0;"><strong>IP Address:</strong> {{ip_address}}</p>
    </div>
  </div>
  
  <div style="background: #343a40; color: white; padding: 20px; text-align: center; font-size: 14px;">
    <p style="margin: 0;">This email was sent from the PVNG website contact form.</p>
    <p style="margin: 5px 0 0 0; opacity: 0.8;">PVNG Electromechanical Works L.L.C. - Dubai, UAE</p>
  </div>
</div>
```

4. Set **To Email** to: `finance@pvngelectromechanical.com` (or any of the four emails - we'll send to all four programmatically)
5. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abc123def456`)

### Step 5: Update Environment Variables

Edit your `.env.local` file:

```env
# EmailJS Configuration (No App Password Needed)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123def456
```

Replace with your actual values from EmailJS.

## ✅ Test the Setup

1. **Start your development server**: `npm run dev`
2. **Go to the contact page**
3. **Fill out and submit the form**
4. **Check all four email addresses**:
   - finance@pvngelectromechanical.com
   - info@pvngelectromechanical.com
   - sales@pvngelectromechanical.com
   - zamamehdi9@gmail.com

## 🎯 Benefits of EmailJS

- ✅ **No App Passwords needed**
- ✅ **No server-side email configuration**
- ✅ **Free tier: 200 emails/month**
- ✅ **Easy setup and management**
- ✅ **Professional email templates**
- ✅ **Works with any email service**

## 🔧 Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Check your Service ID is correct
   - Make sure the service is active in EmailJS

2. **"Template not found" error**
   - Check your Template ID is correct
   - Make sure the template is published

3. **"Invalid public key" error**
   - Check your Public Key is correct
   - Make sure it's the right key for your account

### Testing:

1. Check browser console for error messages
2. Verify all environment variables are set correctly
3. Test with a simple form submission

## 📊 Free Tier Limits

- **200 emails per month** (free tier)
- **Upgrade available** for more emails
- **No credit card required** for free tier

## 🎉 You're Done!

Your contact form now sends emails to **all four email addresses**:
- finance@pvngelectromechanical.com
- info@pvngelectromechanical.com  
- sales@pvngelectromechanical.com
- zamamehdi9@gmail.com

**No Gmail App Passwords or complex server configuration needed!**

The emails will be sent directly from your website using EmailJS, and all form submissions are still saved to your MongoDB Atlas database.
