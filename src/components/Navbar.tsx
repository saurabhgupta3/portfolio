"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { DownloadIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      closeMobile();
    },
    [closeMobile]
  );

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="navbar-inner">
          {/* Desktop Nav links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.replace("#", "") ? "active" : ""}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary navbar-resume-btn"
              >
                <DownloadIcon />
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile hamburger toggle */}
          <button
            className={`navbar-toggle ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay (Separate from nav to prevent transform clipping) */}
      <div
        className={`navbar-mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={closeMobile}
        aria-hidden={!mobileOpen}
      />

      {/* Mobile Drawer (Separate from nav to prevent transform clipping) */}
      <aside
        className={`navbar-mobile ${mobileOpen ? "open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="navbar-mobile-header">
          <span className="navbar-mobile-brand">&lt;SG /&gt;</span>
          <button
            className="navbar-mobile-close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="navbar-mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.replace("#", "") ? "active" : ""}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="navbar-mobile-link-dot" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-mobile-footer">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar-mobile-resume-btn"
            onClick={closeMobile}
          >
            <DownloadIcon />
            Resume
          </a>
        </div>
      </aside>
    </>
  );
}
