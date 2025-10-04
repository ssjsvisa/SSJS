# Email Setup Instructions for Contact Form

## Method 1: EmailJS (Recommended - Client-side Solution)

### Step 1: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 2: Setup EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and User ID

### Step 3: Configure EmailJS
1. Update the `emailJSConfig` object in `ContactPage.js`:
```javascript
const emailJSConfig = {
  serviceID: 'your_actual_service_id',
  templateID: 'your_actual_template_id', 
  userID: 'your_actual_user_id',
};
```

2. Uncomment the EmailJS code in the `sendEmailWithEmailJS` function

### Step 4: EmailJS Template Variables
In your EmailJS template, use these variables:
- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email
- `{{visa_type}}` - Selected visa type
- `{{message}}` - User's message
- `{{to_email}}` - Your email (sssj.b1b285@gmail.com)

### Example EmailJS Template:
```
Subject: New Contact Form Submission - {{visa_type}}

Hello,

You have received a new message from your visa website contact form.

Name: {{from_name}}
Email: {{from_email}}
Visa Type: {{visa_type}}

Message:
{{message}}

Best regards,
Your Website Contact Form
```

## Method 2: Backend API (More Secure)

### Option A: Node.js/Express Backend
1. Create a backend server with Express
2. Install nodemailer: `npm install nodemailer`
3. Create `/api/send-email` endpoint
4. Use environment variables for email credentials

### Option B: Serverless Functions (Netlify/Vercel)
1. Create a serverless function
2. Deploy to Netlify or Vercel
3. Update the API endpoint in the code

### Example Backend Code (Node.js):
```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { firstName, lastName, email, visaType, message } = req.body;
  
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'sssj.b1b285@gmail.com',
    subject: `New Contact Form - ${visaType}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Visa Type:</strong> ${visaType}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
```

## Method 3: Third-party Services

### Formspree (Easy Setup)
1. Go to [Formspree.io](https://formspree.io/)
2. Create account and get form endpoint
3. Update form action or use their API

### Emailer Services
- SendGrid
- Mailgun  
- AWS SES
- Postmark

## Security Considerations

1. **Never expose email credentials in frontend code**
2. **Use environment variables for sensitive data**
3. **Implement rate limiting to prevent spam**
4. **Add CAPTCHA for additional security**
5. **Validate and sanitize all form inputs**

## Current Implementation Status

✅ Form validation implemented
✅ Loading states added
✅ Error handling implemented  
✅ Success/error notifications
🔄 Email sending (needs configuration)

## Next Steps

1. Choose EmailJS or Backend approach
2. Configure your email service
3. Update the configuration in ContactPage.js
4. Test the email functionality
5. Deploy and verify in production

## Testing

To test without real email setup:
- The current code simulates email sending with a 2-second delay
- Check browser console for form data
- Success message will appear after simulation

Remove the simulation code once real email is configured.