import { socialLinks } from "@/data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  LeetcodeIcon,
  EmailIcon,
} from "./Icons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
  email: EmailIcon,
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-text">
            © {new Date().getFullYear()} <span>Saurabh Gupta</span>. Built with
            Next.js & TypeScript.
          </p>

          <div className="footer-socials">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
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
    </footer>
  );
}
