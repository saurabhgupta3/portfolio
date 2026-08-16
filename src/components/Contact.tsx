"use client";

import { socialLinks } from "@/data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  EmailIcon,
  SendIcon,
} from "./Icons";
import SectionWrapper from "./SectionWrapper";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
  email: EmailIcon,
};

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>{"Let's Connect"}</h3>
          <p>
            {"I'm"} always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of the channels below.
          </p>

          <div className="contact-links">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <span className="contact-link-icon">
                    {IconComponent && <IconComponent />}
                  </span>
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        <form
          className="contact-form glass-card"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project or idea..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary form-submit">
            <SendIcon />
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
