# EmailJS Template HTML for Visa Project

## 📧 **Template HTML Code**

Copy and paste this HTML code into your EmailJS template editor:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; max-width: 600px; margin: 0 auto;">
  <!-- Header -->
  <div style="background: linear-gradient(45deg, #1976d2, #42a5f5); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
    <h2 style="margin: 0; font-size: 24px;">🎯 Visa Consultation Request / Feedback</h2>
    <p style="margin: 5px 0 0 0; opacity: 0.9;">A new inquiry / feedback has been received from your website</p>
  </div>

  <!-- Main Content -->
  <div style="background: white; padding: 20px; border: 1px solid #e0e0e0; border-top: none;">
    <div>A new consultation request or feedback from <strong>{{from_name}}</strong> has been received. Kindly respond at your earliest convenience.</div>
    
    <!-- Contact Information Card -->
    <div style="margin-top: 25px; padding: 20px; background: #f8faff; border-radius: 8px; border-left: 4px solid #1976d2;">
      <h3 style="margin: 0 0 15px 0; color: #1976d2; font-size: 18px;">📋 Contact Information</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">👤 Full Name:</td>
          <td style="padding: 8px 0; color: #333;">{{from_name}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">📧 Email:</td>
          <td style="padding: 8px 0; color: #333;">{{from_email}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">🛂 Visa Type:</td>
          <td style="padding: 8px 0; color: #1976d2; font-weight: 600;">{{visa_type}}</td>
        </tr>
      </table>
    </div>
    
    <!-- Message Section -->
    <div style="margin-top: 25px; padding: 20px; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #42a5f5;">
      <h3 style="margin: 0 0 15px 0; color: #1976d2; font-size: 18px;">💬 Message / Feedback</h3>
      <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #ddd; line-height: 1.6; color: #333;">
        {{message}}
      </div>
    </div>

    <!-- Footer -->
    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px dashed #ddd; text-align: center; color: #888; font-size: 13px;">
      <p style="margin: 0;">This inquiry was submitted through your visa consultation website</p>
      <p style="margin: 5px 0 0 0;">🌐 <strong><a href="https://svk-sivakumar.github.io/SSJS/" style="color: #1976d2; text-decoration: none;">SSJS USA Visa Booking Service</a></strong> • Contact Form Submission</p>
    </div>
  </div>
</div>
```

## 📝 **Template Variables Used**

Make sure your EmailJS template includes these variables:

| Variable | Description | Source |
|----------|-------------|---------|
| `{{from_name}}` | Customer's full name | First Name + Last Name |
| `{{from_email}}` | Customer's email address | Email field |
| `{{visa_type}}` | Selected visa service type | Visa type selection |
| `{{message}}` | Customer's message/requirements | Message textarea |

## 🎨 **Template Features**

✅ **Professional Design** - Clean, modern layout  
✅ **Visa-Specific Branding** - Uses your project's theme colors  
✅ **Clear Information Display** - Organized contact details  
✅ **Action Callout** - Reminds you to respond quickly  
✅ **Mobile Responsive** - Works on all email clients  
✅ **Visual Hierarchy** - Easy to scan and read  

## 📧 **Subject Line Suggestion**

```
New Visa Inquiry - {{visa_type}} from {{from_name}}
```

## 🔧 **How to Implement**

1. **Login to EmailJS Dashboard**
2. **Go to Email Templates**
3. **Find template ID: template_8wm946d**
4. **Click Edit**
5. **Paste the HTML code above**
6. **Set the subject line**
7. **Save the template**
8. **Test from your website**

## 📱 **Preview Example**

When someone submits:
- **Name**: John Smith  
- **Email**: john@example.com  
- **Visa Type**: B1/B2 Tourist & Business Visa  
- **Message**: "I need help with my tourist visa application..."  

You'll receive a beautifully formatted email with all the information clearly displayed!

## 🎯 **Benefits of This Template**

- **Easy to Scan** - Information is organized in clear sections
- **Professional Look** - Matches your website's branding  
- **Action-Oriented** - Clear call to respond quickly
- **Complete Context** - All form data is included
- **Branded Experience** - Consistent with your visa service theme

This template will make your email notifications look professional and help you respond to visa inquiries more efficiently! 🚀