"use client";

import { useCallback, useState } from "react";
import { projects, INITIAL_PROJECT_COUNT } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";

const EXPAND_TRANSITION_MS = 550;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const [showExtras, setShowExtras] = useState(false);
  const hasMoreProjects = projects.length > INITIAL_PROJECT_COUNT;

  const handleToggle = useCallback(() => {
    if (expanded) {
      setExpanded(false);
      window.setTimeout(() => setShowExtras(false), EXPAND_TRANSITION_MS);
      return;
    }

    setShowExtras(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true));
    });
  }, [expanded]);

  const visibleProjects = showExtras
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <SectionWrapper id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className={`projects-grid ${expanded ? "is-expanded" : ""}`}>
        {visibleProjects.map((project, index) => (
          <div
            key={project.slug}
            className={`project-grid-cell${index >= INITIAL_PROJECT_COUNT ? " project-grid-cell--extra" : ""}`}
            style={
              expanded && index >= INITIAL_PROJECT_COUNT
                ? { transitionDelay: `${(index - INITIAL_PROJECT_COUNT) * 0.06}s` }
                : undefined
            }
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="projects-toggle-wrap">
          <button
            type="button"
            className="projects-toggle-btn"
            onClick={handleToggle}
            aria-expanded={expanded}
          >
            {expanded ? (
              <>
                Show Less
                <span className="projects-toggle-arrow" aria-hidden="true">
                  ↑
                </span>
              </>
            ) : (
              <>
                View More Projects
                <span className="projects-toggle-arrow" aria-hidden="true">
                  →
                </span>
              </>
            )}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
