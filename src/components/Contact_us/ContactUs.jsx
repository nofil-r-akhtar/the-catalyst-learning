import { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-container">

        {/* Left Info Panel */}
        <div className="contact-info">
          <div className="info-card">
            <span className="icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>info@thecatalystlearning.com</p>
            </div>
          </div>

          <div className="info-card">
            <span className="icon">📱</span>
            <div>
              <h4>Phone</h4>
              <p>+92 321 2002625</p>
            </div>
          </div>

          <div className="info-card social">
            <h4>Let's Connect</h4>
            <div className="social-icons">{/* future icons */}</div>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="message"
            placeholder="Query"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">
            <span className="send-icon">📨</span> Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
