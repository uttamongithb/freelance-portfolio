require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { initializeEmailService, sendContactEmail, sendNewsletterConfirmation } = require('./emailService');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize email service
initializeEmailService();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10kb' }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Agency Portfolio API is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Contact Form Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, budget, company, phone } = req.body;

    // Validation
    const errors = [];
    if (!name || name.trim().length < 2) errors.push('Name is required');
    if (!email || !email.includes('@')) errors.push('Valid email is required');
    if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters');

    if (errors.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed',
        errors 
      });
    }

    console.log('📧 Contact Form Submission:', { name, email, company, phone, budget });

    // Send emails
    const emailResult = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      budget,
      company,
      phone
    });

    res.status(200).json({ 
      success: true, 
      message: 'Thank you! We will respond within 24 hours.',
      email_sent: emailResult.email_sent
    });
  } catch (error) {
    console.error('❌ Error processing contact form:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Newsletter Subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ 
        success: false, 
        message: 'Valid email is required' 
      });
    }

    console.log('📬 Newsletter Subscription:', email);

    await sendNewsletterConfirmation(email.trim());

    res.status(200).json({ 
      success: true, 
      message: 'Welcome! Check your email for confirmation.' 
    });
  } catch (error) {
    console.error('❌ Error processing newsletter:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again later.' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Endpoint not found' 
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
