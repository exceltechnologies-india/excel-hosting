import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/send-mail', async (req, res) => {
  try {
    const { name, email, phone, message, domain, issueType, description } = req.body;

    // Create transporter using .env config
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build email content
    let mailBody = `<h2>Hosting Website Enquiry</h2>`;
    if (name) mailBody += `<p><strong>Name:</strong> ${name}</p>`;
    if (email) mailBody += `<p><strong>Email:</strong> ${email}</p>`;
    if (phone) mailBody += `<p><strong>Phone:</strong> ${phone}</p>`;
    if (message) mailBody += `<p><strong>Message:</strong> ${message}</p>`;
    if (domain) mailBody += `<p><strong>Domain:</strong> ${domain}</p>`;
    if (issueType) mailBody += `<p><strong>Issue Type:</strong> ${issueType}</p>`;
    if (description) mailBody += `<p><strong>Description:</strong> ${description}</p>`;

    await transporter.sendMail({
      from: process.env.MAIL_FROM || 'no-reply@exceltechnologies.in',
      to: process.env.MAIL_TO || 'pawan@exceltechnologies.in',
      subject: 'Hosting Website Enquiry',
      html: mailBody,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error in /send-mail:', error);
    console.error('Request body:', req.body);
    res.status(500).json({ success: false, message: 'Failed to send message.', error: error.message, details: error });
  }
});

// Catch-all route to serve index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 