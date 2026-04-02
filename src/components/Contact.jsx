import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

const contactLinks = [
  { icon: '✉', label: 'jes063@ucsd.edu',         href: 'jes063@ucsd.edu' },
  { icon: '⌨', label: 'github.com/Macu239',    href: 'https://github.com/Macu239' },
  { icon: '🔗', label: 'linkedin.com/in/jeremy-shih-ucsd/', href: 'https://www.linkedin.com/in/jeremy-shih-ucsd/' },
];

export default function Contact() {
  const [titleRef, titleVisible] = useReveal();
  const [gridRef,  gridVisible]  = useReveal();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (wire up your backend here)');
  };

  return (
    <section id="contact" className="section-wrap">
      <div ref={titleRef} className={`reveal${titleVisible ? ' visible' : ''}`}>
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Let's work together</h2>
      </div>

      <div ref={gridRef} className={`contact-grid reveal${gridVisible ? ' visible' : ''}`}>
        <div>
          <p className="contact-text">
            Whether you have a project in mind, a question, or just want to say hello —
            my inbox is always open. I'll get back to you within a day or two.
          </p>
          <div className="c-links">
            {contactLinks.map(({ icon, label, href }) => (
              <a href={href} className="c-link" key={label}>
                <div className="c-icon">{icon}</div>
                {label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="f-wrap">
              <label className="f-lbl">Name</label>
              <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} />
            </div>
            <div className="f-wrap">
              <label className="f-lbl">Email</label>
              <input name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
            </div>
          </div>
          <div className="f-wrap">
            <label className="f-lbl">Subject</label>
            <input name="subject" type="text" placeholder="What's on your mind?" value={form.subject} onChange={handleChange} />
          </div>
          <div className="f-wrap">
            <label className="f-lbl">Message</label>
            <textarea name="message" rows={6} placeholder="Tell me about your project..." value={form.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            Send message →
          </button>
        </form>
      </div>
    </section>
  );
}
