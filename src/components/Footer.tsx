"use client";

import { socialLinks } from "@/data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  EmailIcon,
  ArrowUpIcon,
} from "./Icons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
  email: EmailIcon,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-compact" id="footer">
      {/* Radiant Animated Top Border */}
      <div className="footer-compact-border">
        <div className="footer-border-glow-light" />
      </div>

      {/* Full-width container spreading to far edges */}
      <div className="footer-compact-container">
        {/* Left: Designed & Developed by Saurabh Gupta */}
        <div className="footer-compact-left">
          <div className="footer-compact-signature">
            <span className="footer-sparkle-symbol">✦</span>
            <span>
              Designed &amp; Developed by{" "}
              <strong className="footer-name-highlight">Saurabh Gupta</strong> ©{" "}
              {new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* Center: Tech Stack with Green Points */}
        <div className="footer-compact-center">
          <div className="footer-compact-tech">
            <span className="tech-item">
              <span className="tech-point" />
              <span className="tech-tag-plain">Next.js 15</span>
            </span>
            <span className="tech-item">
              <span className="tech-point" />
              <span className="tech-tag-plain">TypeScript</span>
            </span>
            <span className="tech-item">
              <span className="tech-point" />
              <span className="tech-tag-plain">Vanilla CSS</span>
            </span>
          </div>
        </div>

        {/* Right: Socials & Back to Top Button */}
        <div className="footer-compact-right">
          <div className="footer-compact-socials">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-mini-social-link"
                  aria-label={link.name}
                  title={link.name}
                >
                  {IconComponent && <IconComponent />}
                </a>
              );
            })}
          </div>

          <div className="footer-divider-v" />

          {/* Compact Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="footer-mini-back-to-top"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUpIcon className="footer-mini-arrow" />
          </button>
        </div>
      </div>
    </footer>
  );
}
