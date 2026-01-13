import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getContactValue = (type) => contact.find(c => c.Type === type)?.Value || '';
  const getContactLink = (type) => contact.find(c => c.Type === type)?.Link || '#';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Info</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello.</p>

            {getContactValue('Email') && (
              <div className="info-item">
                <FaEnvelope className="icon" />
                <a href={getContactLink('Email')}>{getContactValue('Email')}</a>
              </div>
            )}
            {getContactValue('Phone') && (
              <div className="info-item">
                <FaPhone className="icon" />
                <a href={getContactLink('Phone')}>{getContactValue('Phone')}</a>
              </div>
            )}
            <div className="social-links">
              {getContactLink('LinkedIn') !== '#' && <a href={getContactLink('LinkedIn')} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
              {getContactLink('GitHub') !== '#' && <a href={getContactLink('GitHub')} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .contact-info {
          padding: 2rem;
          background: var(--card-bg);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .contact-info h3 {
          margin-bottom: 1rem;
        }
        .contact-info p {
          color: #a3a3a3;
          margin-bottom: 2rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .icon {
          color: var(--accent-color);
          font-size: 1.2rem;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .social-links a {
          font-size: 1.5rem;
          color: #a3a3a3;
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: var(--accent-color);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.9rem;
          color: #a3a3a3;
        }
        .form-group input,
        .form-group textarea {
          padding: 1rem;
          background: var(--secondary-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: white;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-color);
        }
        .status-message {
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
        }
        .status-message.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        @media (min-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr 1.5fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
