import { education } from "@/data/portfolio";
import { CalendarIcon, MapPinIcon } from "./Icons";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background and qualifications</p>
      </div>

      {education.map((edu) => (
        <div className="glass-card education-card" key={edu.institution}>
          <h3 className="education-degree">{edu.degree}</h3>
          <p className="education-specialization">
            Specialization: {edu.specialization}
          </p>
          <p className="education-institution">{edu.institution}</p>

          <div className="education-meta">
            <span className="education-meta-item">
              <CalendarIcon />
              {edu.duration}
            </span>
            <span className="education-meta-item">
              <MapPinIcon />
              {edu.location}
            </span>
            <span className="education-meta-item">
              <strong>{edu.grade}</strong>
            </span>
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
