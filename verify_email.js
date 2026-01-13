import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

console.log('Testing SMTP Configuration...');
console.log('User:', process.env.EMAIL_USER);
// Mask password in logs
console.log('Pass:', process.env.EMAIL_PASS ? '****' : 'Not Set');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.error('❌ Connection failed:', error);
    } else {
        console.log('✅ Server is ready to take our messages');
        
        // Try sending a test email to self
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'SMTP Test - Portfolio',
            text: 'This is a test email to verify SMTP configuration.',
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('❌ Failed to send email:', err);
            } else {
                console.log('✅ Email sent successfully:', info.response);
            }
        });
    }
});
