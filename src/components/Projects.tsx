import { projects } from "@/data/portfolio";
import { GithubIcon, ExternalLinkIcon } from "./Icons";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of projects that showcase my skills and passion for building
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="glass-card project-card" key={project.title}>
            <div className="project-card-content">
              <h3 className="project-title">{project.title}</h3>

              <ul className="project-description">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link--github"
                >
                  <GithubIcon />
                  Code
                </a>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--live"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
