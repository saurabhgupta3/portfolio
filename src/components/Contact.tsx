"use client";

import { useState, useEffect } from "react";
import { socialLinks } from "@/data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  EmailIcon,
  SendIcon,
  SpinnerIcon,
  CheckCircleIcon,
  AlertCircleIcon,
} from "./Icons";
import SectionWrapper from "./SectionWrapper";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
  email: EmailIcon,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-dismiss notification after 3 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email directly."
      );
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="section-header">
        <span className="section-eyebrow">Connect</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind, a question, or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="contact-container">
        {/* Left: Info Card */}
        <div className="contact-info-panel glass-card moving-border-card">
          <h3 className="contact-headline">
            Let&apos;s build something <span className="gradient-text">exceptional</span> together.
          </h3>

          <p className="contact-desc">
            I&apos;m always open to discussing new projects, creative concepts, full-time engineering roles, or consulting. Drop me a line anytime.
          </p>

          <div className="contact-direct-card">
            <div className="contact-direct-icon">
              <EmailIcon />
            </div>
            <div className="contact-direct-meta">
              <span className="contact-direct-label">Email Me Directly</span>
              <a
                href={socialLinks.find((l) => l.icon === "email")?.url || "mailto:sggupta548@gmail.com"}
                className="contact-direct-value"
              >
                {socialLinks.find((l) => l.icon === "email")?.url.replace("mailto:", "") || "sggupta548@gmail.com"}
              </a>
            </div>
          </div>

          <div className="contact-socials-wrapper">
            <span className="contact-socials-title">Find me across the web</span>
            <div className="contact-socials-list">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-pill"
                    aria-label={link.name}
                  >
                    <span className="contact-social-pill-icon">
                      {IconComponent && <IconComponent />}
                    </span>
                    <span className="contact-social-pill-text">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Form Card */}
        <div className="contact-form-panel glass-card moving-border-card">
          <div className="contact-form-header">
            <h3 className="contact-form-title">Send a Message</h3>
            <p className="contact-form-subtitle">
              Fill out the form below and I&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form className="contact-form-box" onSubmit={handleSubmit}>
            {status === "success" && (
              <div className="contact-alert success">
                <CheckCircleIcon />
                <div>
                  <strong>Message Sent!</strong>
                  <p>Thank you! Your message has been delivered to Saurabh.</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="contact-alert error">
                <AlertCircleIcon />
                <div>
                  <strong>Sending Failed</strong>
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project, idea, or questions..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="contact-action-bar">
              <button
                type="submit"
                className="contact-submit-button"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <SpinnerIcon />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <SendIcon />
                  </>
                )}
              </button>
              <span className="contact-form-hint">🔒 No spam. Replies go directly to your email.</span>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
