import { personalInfo, socialLinks } from "@/data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  EmailIcon,
  ExternalLinkIcon,
  DownloadIcon,
} from "./Icons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
  email: EmailIcon,
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="hero-bg-orb hero-bg-orb--1" />
      <div className="hero-bg-orb hero-bg-orb--2" />
      <div className="hero-bg-orb hero-bg-orb--3" />

      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">{"// Hello, I'm"}</p>
          <h1 className="hero-name">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="hero-title">{personalInfo.title}</p>
          <p className="hero-description">{personalInfo.tagline}</p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              <ExternalLinkIcon />
              View Projects
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label={link.name}
                  title={link.name}
                >
                  {IconComponent && <IconComponent />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
