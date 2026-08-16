import { experiences } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey and industry exposure
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.company}>
            <div className="timeline-dot" />
            <div className="glass-card timeline-card">
              <span className="timeline-type">{exp.type}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-duration">{exp.duration}</p>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
