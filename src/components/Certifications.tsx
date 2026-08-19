import { certifications, achievements } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Certifications() {
  return (
    <SectionWrapper id="achievements">
      <div className="section-header">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Milestones and recognitions along my journey
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div className="glass-card cert-card" key={cert.title}>
            <div className="cert-icon">{cert.icon}</div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
          </div>
        ))}

        {achievements.map((ach) => (
          <div className="glass-card cert-card" key={ach.title}>
            <div className="cert-icon">{ach.icon}</div>
            <h3 className="cert-title">{ach.title}</h3>
            <p className="cert-description">{ach.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}