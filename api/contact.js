import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Enable CORS manually if needed, or rely on Vercel's same-origin handling for the app
    // Ideally, for a same-domain request (app hosted on Vercel), we don't need extensive CORS.

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.verify();
    } catch (error) {
        console.error('Transporter verification failed:', error);
        return res.status(500).json({ success: false, message: 'Server configuration error' });
    }

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Use authenticated user as sender to avoid spoofing blocks
        to: process.env.EMAIL_USER,
        replyTo: email, // Allow replying to the user
        subject: `Portfolio Contact: ${name}`,
        text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      Message:
      ${message}
    `,
        html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
}
