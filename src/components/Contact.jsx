import { Icon } from './Icons.jsx';
import { contact, RESUME_URL, RESUME_FILENAME } from '../data/site.js';

export default function Contact() {
  return (
    <section id="contact" style={{ paddingTop: 24 }}>
      <div className="wrap">
        <div className="contact-box reveal">
          <div className="eyebrow">06. Contact</div>
          <h2>Let's build something together</h2>
          <p className="sub" style={{ marginBottom: 32 }}>
            I'm open to full-time roles, contracts and freelance projects. The fastest way to reach me is email or LinkedIn.
          </p>
          <div className="contact-grid">
            <a className="c-card" href={`mailto:${contact.email}`}>
              <div className="ic"><Icon name="mail" /></div>
              <div><small>Email</small><b>{contact.email}</b></div>
            </a>
            <a className="c-card" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="ic"><Icon name="linkedin" /></div>
              <div><small>LinkedIn</small><b>{contact.linkedinLabel}</b></div>
            </a>
            <a className="c-card" href={contact.phoneHref}>
              <div className="ic"><Icon name="call" /></div>
              <div><small>Phone / WhatsApp</small><b>{contact.phone}</b></div>
            </a>
            <div className="c-card">
              <div className="ic"><Icon name="pin" /></div>
              <div><small>Location</small><b>{contact.location}</b></div>
            </div>
          </div>
          <div className="contact-cta">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">Send me an email</a>
            <a href={RESUME_URL} download={RESUME_FILENAME} className="btn btn-ghost">
              <Icon name="download" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
