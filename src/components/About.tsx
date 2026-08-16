import Image from "next/image";
import { personalInfo, aboutStats } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A glimpse into who I am and what drives me
        </p>
      </div>

      <div className="about-grid">
        <div className="about-image-wrapper">
          <div className="about-image">
            <Image
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} profile photo`}
              width={280}
              height={280}
              priority={false}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="about-text">
          <p>{personalInfo.bio}</p>

          <div className="about-stats">
            {aboutStats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
