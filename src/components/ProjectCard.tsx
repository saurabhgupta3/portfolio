"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/portfolio";
import { GithubIcon, ExternalLinkIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
}

function isValidLiveUrl(liveUrl?: string): boolean {
  return Boolean(liveUrl && liveUrl !== "#" && liveUrl.trim() !== "");
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [primaryError, setPrimaryError] = useState(false);
  const [secondaryError, setSecondaryError] = useState(false);
  const hasLiveUrl = isValidLiveUrl(project.liveUrl);

  return (
    <article className="glass-card project-card">
      <div className="project-thumbnail-scene">
        <div className="project-thumbnail" aria-hidden="true">
          <div className="project-thumbnail__face">
            {primaryError ? (
              <div className="project-thumbnail__placeholder">
                <span>{project.title}</span>
              </div>
            ) : (
              <Image
                src={project.imagePrimary}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                className="project-thumbnail__img"
                onError={() => setPrimaryError(true)}
              />
            )}
          </div>
          <div className="project-thumbnail__face project-thumbnail__face--back">
            {secondaryError ? (
              <div className="project-thumbnail__placeholder project-thumbnail__placeholder--alt">
                <span>{project.title}</span>
              </div>
            ) : (
              <Image
                src={project.imageSecondary}
                alt={`${project.title} alternate screenshot`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                className="project-thumbnail__img"
                onError={() => setSecondaryError(true)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="project-card-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.description}</p>

        <div className="project-tech-stack">
          {project.techStack.map((tech) => (
            <span className="tech-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link--live"
            >
              <ExternalLinkIcon />
              Live
            </a>
          ) : (
            <span
              className="project-link project-link--live project-link--disabled"
              aria-disabled="true"
              title="Add a liveUrl in src/data/portfolio.ts to enable"
            >
              <ExternalLinkIcon />
              Live
            </span>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--github"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
