"use client";

import { skillCategories } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Skills() {
  const gridRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <SectionWrapper id="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          The tools and technologies I work with to bring ideas to life
        </p>
      </div>

      <div className="skills-grid scroll-reveal-children" ref={gridRef}>
        {skillCategories.map((category) => (
          <div className="glass-card skill-category-card" key={category.category}>
            <div className="skill-category-header">
              <span className="skill-category-icon">{category.icon}</span>
              <h3 className="skill-category-name">{category.category}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span className="skill-tag" key={skill.name}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
