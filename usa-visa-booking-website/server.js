const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const { decrypt } = require('./utils/encrypt');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Function to safely decrypt the password
function getEmailPassword() {
  try {
    // Check if password is encrypted (should contain a colon separator for IV)
    const password = process.env.EMAIL_PASS || '';
    
    // Remove any quotes that might be added by dotenv
    const cleanPassword = password.replace(/^["']|["']$/g, '');
    
    if (cleanPassword && cleanPassword.includes(':')) {
      return decrypt(cleanPassword);
    } else {
      // If not encrypted or can't be decrypted, return as is (fallback)
      return cleanPassword;
    }
  } catch (error) {
    console.error('Error decrypting email password:', error);
    return process.env.EMAIL_PASS?.replace(/^["']|["']$/g, ''); // Fallback to original value
  }
}

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: getEmailPassword(),
  },
  debug: true, // Enable additional debug logging
  logger: true, // Log information to the console
});

// API endpoint for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    // Verify that email credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not set in .env file');
      return res.status(500).json({ 
        success: false, 
        message: 'Email server not properly configured. Please set valid EMAIL_USER and EMAIL_PASS in .env file.' 
      });
    }

    const { firstName, lastName, email, phone, visaType, message } = req.body;
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@ssjsvisaservices.com', // Your business email
      replyTo: email,
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

    // Verify email server connection first
    console.log('Verifying email server connection...');
    try {
      await transporter.verify();
      console.log('Email server connection successful');
    } catch (verifyError) {
      console.error('Email server connection failed:', verifyError);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to connect to email server. Please check your credentials.', 
        error: verifyError.message 
      });
    }

    // Send email
    console.log('Sending notification email...');
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
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

    console.log('Sending confirmation email...');
    await transporter.sendMail(confirmationMailOptions);
    console.log('Confirmation email sent successfully');

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

// Add debug endpoint to check email configuration
app.get('/api/email-config-check', async (req, res) => {
  try {
    const configStatus = {
      emailUser: process.env.EMAIL_USER ? 'Configured' : 'Missing',
      emailPass: process.env.EMAIL_PASS ? 'Configured (length: ' + process.env.EMAIL_PASS.length + ')' : 'Missing',
      serverRunning: true,
      smtpConnectionTest: 'Not tested yet'
    };
    
    // Test SMTP connection
    try {
      await transporter.verify();
      configStatus.smtpConnectionTest = 'Success';
    } catch (error) {
      configStatus.smtpConnectionTest = 'Failed: ' + error.message;
    }
    
    res.status(200).json({
      success: true,
      configStatus
    });
  } catch (error) {
    console.error('Error checking email config:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to check email configuration',
      error: error.message
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email configuration check available at http://localhost:${PORT}/api/email-config-check`);
});