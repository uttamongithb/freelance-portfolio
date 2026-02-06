const nodemailer = require('nodemailer');

let transporter = null;

// Initialize email transporter
const initializeEmailService = () => {
  // Support different email providers
  const provider = process.env.EMAIL_PROVIDER || 'gmail';

  try {
    if (provider === 'gmail') {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD
        }
      });
    } else if (provider === 'sendgrid') {
      transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY
        }
      });
    } else if (provider === 'custom') {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    }

    // Verify connection
    if (transporter) {
      transporter.verify((error, success) => {
        if (error) {
          console.warn('⚠️  Email service not fully configured:', error.message);
        } else {
          console.log('✅ Email service ready:', provider);
        }
      });
    }
  } catch (error) {
    console.error('❌ Failed to initialize email service:', error.message);
  }
};

// Send contact form email
const sendContactEmail = async (data) => {
  if (!transporter) {
    console.warn('⚠️  Email service not configured, skipping email');
    return { success: true, email_sent: false };
  }

  try {
    const { name, email, company, phone, budget, message } = data;

    // Email to business
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@heritage.com',
      to: process.env.CONTACT_EMAIL || 'contact@heritage.com',
      subject: `🆕 Contact Form: ${name} from ${company || 'Unknown Company'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0B2340; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
          </div>
          
          <div style="background-color: #F4F7FA; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            
            <hr style="border: none; border-top: 2px solid #ddd; margin: 20px 0;">
            
            <h3>Message:</h3>
            <p style="line-height: 1.6; color: #263238;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #ddd; font-size: 12px; color: #707C86;">
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      `
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@heritage.com',
      to: email,
      subject: 'We received your message - Heritage Modern',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0B2340; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0;">Thanks for reaching out!</h2>
          </div>
          
          <div style="background-color: #F4F7FA; padding: 20px; border-radius: 8px;">
            <p>Hi ${name.split(' ')[0]},</p>
            
            <p>We've received your message and really appreciate you contacting us. Our team will review your request and get back to you within 24 hours.</p>
            
            <p style="margin-top: 30px; margin-bottom: 10px;"><strong>What's Next?</strong></p>
            <ul style="color: #263238; line-height: 1.8;">
              <li>We'll review your requirements</li>
              <li>Schedule an initial call (if needed)</li>
              <li>Send you a customized proposal</li>
            </ul>
            
            <p style="margin-top: 30px; color: #707C86;">
              In the meantime, feel free to browse our <a href="https://heritage.com/work" style="color: #1769A5; text-decoration: none;">case studies</a> to see our recent work.
            </p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #ddd; font-size: 12px; color: #707C86; text-align: center;">
            <p>Heritage Modern | hello@heritage.com | www.heritage.com</p>
          </div>
        </div>
      `
    });

    return { success: true, email_sent: true };
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    throw error;
  }
};

// Send newsletter email
const sendNewsletterConfirmation = async (email) => {
  if (!transporter) return { success: true, email_sent: false };

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@heritage.com',
      to: email,
      subject: 'Welcome to Heritage Modern Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0B2340; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0;">Welcome to our newsletter!</h2>
          </div>
          
          <p>Thanks for subscribing. We'll send you monthly insights on design, development, and growth strategies.</p>
        </div>
      `
    });

    return { success: true, email_sent: true };
  } catch (error) {
    console.error('❌ Error sending newsletter email:', error.message);
    throw error;
  }
};

module.exports = {
  initializeEmailService,
  sendContactEmail,
  sendNewsletterConfirmation
};
