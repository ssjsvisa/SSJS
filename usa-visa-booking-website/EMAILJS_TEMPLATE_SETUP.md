# EmailJS Template Setup Instructions

## 🚀 **Your EmailJS Configuration is Ready!**

✅ **Service ID**: service_qiychvj  
✅ **Template ID**: template_8wm946d  
✅ **User ID**: INgIoTycuxyTDj900  
✅ **EmailJS Package**: Installed and configured  

## 📧 **EmailJS Template Setup**

### **Step 1: Login to EmailJS Dashboard**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Login to your account

### **Step 2: Navigate to Email Templates**
1. Click on **"Email Templates"** in the left sidebar
2. Find your template with ID: **template_8wm946d**
3. Click **"Edit"** to modify the template

### **Step 3: Template Variables Setup**
Your contact form sends these variables to EmailJS:

| Variable Name | Description | Example |
|---------------|-------------|---------|
| `{{from_name}}` | Full name of sender | "John Doe" |
| `{{from_email}}` | Email address of sender | "john@example.com" |
| `{{visa_type}}` | Selected visa type | "B1/B2 Tourist & Business Visa" |
| `{{message}}` | User's message | "I need help with my visa application..." |
| `{{to_email}}` | Your email (destination) | "sssj.b1b285@gmail.com" |

### **Step 4: Recommended Template Content**

#### **Subject Line:**
```
New Visa Inquiry - {{visa_type}} from {{from_name}}
```

#### **Email Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #1976d2; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-box { background-color: #f5f5f5; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .message-box { background-color: #e3f2fd; padding: 15px; margin: 15px 0; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="header">
        <h2>🎯 New Visa Consultation Request</h2>
    </div>
    
    <div class="content">
        <h3>Contact Information</h3>
        <div class="info-box">
            <strong>👤 Name:</strong> {{from_name}}<br>
            <strong>📧 Email:</strong> {{from_email}}<br>
            <strong>🛂 Visa Type:</strong> {{visa_type}}
        </div>
        
        <h3>Message</h3>
        <div class="message-box">
            {{message}}
        </div>
        
        <hr>
        <p><em>This inquiry was submitted through your visa website contact form.</em></p>
        <p><strong>⏰ Please respond within 24 hours for best customer experience.</strong></p>
    </div>
</body>
</html>
```

#### **Plain Text Version:**
```
NEW VISA CONSULTATION REQUEST
=============================

Contact Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Visa Type: {{visa_type}}

Message:
{{message}}

---
This inquiry was submitted through your visa website contact form.
Please respond within 24 hours for best customer experience.
```

### **Step 5: Test Your Setup**

1. **Save** your template in EmailJS
2. **Test** from your website contact form
3. **Check** your email inbox (sssj.b1b285@gmail.com)
4. **Verify** all variables are populated correctly

### **Step 6: Troubleshooting**

If emails are not arriving:

1. **Check Spam Folder** - EmailJS emails sometimes go to spam initially
2. **Verify Service Connection** - Ensure your Gmail/email service is connected in EmailJS
3. **Check Template Variables** - Make sure all {{variables}} match exactly
4. **Review Console Logs** - Open browser developer tools to see any errors
5. **Test Template** - Use EmailJS dashboard "Test" feature

## 🎯 **Expected Behavior**

When someone submits the contact form:
1. ⏳ Form shows "Sending..." with loading spinner
2. 📧 EmailJS sends email to sssj.b1b285@gmail.com
3. ✅ Success message appears: "Thank you! Your message has been sent successfully..."
4. 🔄 Form resets automatically

## 📱 **Testing Checklist**

- [ ] Submit test form with all fields filled
- [ ] Check email arrives at sssj.b1b285@gmail.com
- [ ] Verify all form data appears correctly in email
- [ ] Test from different devices/browsers
- [ ] Check spam folder if email doesn't arrive

## 🚨 **Common Issues & Solutions**

**Issue**: "EmailJS configuration is incomplete"  
**Solution**: Restart your development server after updating .env file

**Issue**: Emails go to spam  
**Solution**: Add EmailJS sending domain to your email whitelist

**Issue**: Variables not showing in email  
**Solution**: Check variable names match exactly (case-sensitive)

Your email functionality is now active! Test it and let me know if you need any adjustments! 🚀