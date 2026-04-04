import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "C++", "Java", "Python"],
  },
  {
    label: "Frontend",
    skills: ["React", "HTML", "CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js","MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools & Environment",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Vim",
      "VS Code",
      "GitHub Copilot",
    ],
  },
];

export default function Skills() {
  const [titleRef, titleVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section id="skills" className="section-wrap">
      <div ref={titleRef} className={`reveal${titleVisible ? " visible" : ""}`}>
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">What I work with</h2>
        <p className="skills-intro">
          A growing set of tools shaped through coursework, personal builds, and group projects.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`skill-grid reveal${gridVisible ? " visible" : ""}`}
      >
        {skillGroups.map(({ label, skills }) => (
          <div className="skill-group" key={label}>
            <div className="skill-hd">{label}</div>
            {skills.map((s) => (
              <div className="skill-item" key={s}>
                <div className="skill-pip" />
                <div className="skill-name">{s}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
