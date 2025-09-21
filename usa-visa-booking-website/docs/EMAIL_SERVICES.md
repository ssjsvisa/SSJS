# Using Email Service Providers Instead of Gmail

Instead of using Gmail with passwords or OAuth2, you can use dedicated email service providers that offer simpler API key authentication. This guide explains how to set up popular email services with Node.js.

## Why Use Email Service Providers?

- Simpler authentication with API keys
- Higher sending limits
- Better deliverability
- Detailed analytics
- No need to handle OAuth2 complexity

## Option 1: SendGrid

### Setup

1. Create a [SendGrid account](https://sendgrid.com/)
2. Create an API key in the SendGrid dashboard
3. Install the SendGrid package:
   ```
   npm install @sendgrid/mail
   ```

### Implementation

```javascript
// Replace the nodemailer configuration in server.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, visaType, message } = req.body;
    
    // Email content for notification
    const notificationMsg = {
      to: 'info@ssjsvisaservices.com',
      from: process.env.FROM_EMAIL, // Verified sender in SendGrid
      subject: `New Contact Form Submission: ${visaType} Visa Inquiry`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Visa Type:</strong> ${visaType}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    };

    // Email content for confirmation
    const confirmationMsg = {
      to: email,
      from: process.env.FROM_EMAIL,
      subject: 'Thank you for contacting SSJS Visa Services',
      html: `
        <h2>Thank you for contacting SSJS Visa Services</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your inquiry regarding ${visaType} visa services.</p>
        <p>Our team will review your message and get back to you within 24-48 business hours.</p>
        <p>If you need immediate assistance, please call us at +1 (234) 567-890.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>SSJS Visa Services Team</strong></p>
      `,
    };

    // Send both emails
    await sgMail.send(notificationMsg);
    await sgMail.send(confirmationMsg);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
});
```

### Environment Variables

```
SENDGRID_API_KEY=your-sendgrid-api-key
FROM_EMAIL=verified-sender@yourdomain.com
```

## Option 2: Mailgun

### Setup

1. Create a [Mailgun account](https://www.mailgun.com/)
2. Get your API key from the Mailgun dashboard
3. Install the Mailgun package:
   ```
   npm install mailgun-js
   ```

### Implementation

```javascript
// Replace the nodemailer configuration in server.js
const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

// API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, visaType, message } = req.body;
    
    // Email content for notification
    const notificationData = {
      from: `SSJS Visa Services <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: 'info@ssjsvisaservices.com',
      subject: `New Contact Form Submission: ${visaType} Visa Inquiry`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Visa Type:</strong> ${visaType}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    };

    // Email content for confirmation
    const confirmationData = {
      from: `SSJS Visa Services <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: email,
      subject: 'Thank you for contacting SSJS Visa Services',
      html: `
        <h2>Thank you for contacting SSJS Visa Services</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your inquiry regarding ${visaType} visa services.</p>
        <p>Our team will review your message and get back to you within 24-48 business hours.</p>
        <p>If you need immediate assistance, please call us at +1 (234) 567-890.</p>
        <br>
        <p>Best regards,</p>
        <p><strong>SSJS Visa Services Team</strong></p>
      `,
    };

    // Send notification email
    await new Promise((resolve, reject) => {
      mailgun.messages().send(notificationData, (error, body) => {
        if (error) reject(error);
        else resolve(body);
      });
    });

    // Send confirmation email
    await new Promise((resolve, reject) => {
      mailgun.messages().send(confirmationData, (error, body) => {
        if (error) reject(error);
        else resolve(body);
      });
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
});
```

### Environment Variables

```
MAILGUN_API_KEY=your-mailgun-api-key
MAILGUN_DOMAIN=your-mailgun-domain.com
```

## Option 3: Amazon SES

### Setup

1. Create an [AWS account](https://aws.amazon.com/)
2. Set up Amazon SES in the AWS Management Console
3. Create an IAM user with SES permissions
4. Get the access key and secret
5. Install the AWS SDK:
   ```
   npm install aws-sdk
   ```

### Implementation

```javascript
// Replace the nodemailer configuration in server.js
const AWS = require('aws-sdk');
const ses = new AWS.SES({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

// API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, visaType, message } = req.body;
    
    // Email content for notification
    const notificationParams = {
      Destination: {
        ToAddresses: ['info@ssjsvisaservices.com'],
      },
      Message: {
        Body: {
          Html: {
            Data: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Visa Type:</strong> ${visaType}</p>
              <h3>Message:</h3>
              <p>${message}</p>
            `,
          },
        },
        Subject: {
          Data: `New Contact Form Submission: ${visaType} Visa Inquiry`,
        },
      },
      Source: process.env.SES_FROM_EMAIL,
    };

    // Email content for confirmation
    const confirmationParams = {
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Html: {
            Data: `
              <h2>Thank you for contacting SSJS Visa Services</h2>
              <p>Dear ${firstName},</p>
              <p>We have received your inquiry regarding ${visaType} visa services.</p>
              <p>Our team will review your message and get back to you within 24-48 business hours.</p>
              <p>If you need immediate assistance, please call us at +1 (234) 567-890.</p>
              <br>
              <p>Best regards,</p>
              <p><strong>SSJS Visa Services Team</strong></p>
            `,
          },
        },
        Subject: {
          Data: 'Thank you for contacting SSJS Visa Services',
        },
      },
      Source: process.env.SES_FROM_EMAIL,
    };

    // Send notification email
    await ses.sendEmail(notificationParams).promise();
    
    // Send confirmation email
    await ses.sendEmail(confirmationParams).promise();

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
});
```

### Environment Variables

```
AWS_ACCESS_KEY=your-aws-access-key
AWS_SECRET_KEY=your-aws-secret-key
AWS_REGION=us-west-2
SES_FROM_EMAIL=verified-sender@yourdomain.com
```

## Comparison

| Service | Free Tier | Ease of Setup | Features |
|---------|-----------|---------------|----------|
| SendGrid | 100 emails/day | Simple | Comprehensive analytics, templates |
| Mailgun | 5,000 emails/month for 3 months | Moderate | Good deliverability, detailed logs |
| Amazon SES | 62,000 emails/month (when hosted on EC2) | Complex | Highly scalable, low cost |

## Recommendation

For small to medium projects, SendGrid offers the best balance of ease of setup, features, and free tier capacity.