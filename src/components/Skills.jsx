import { useReveal } from '../hooks/useReveal';
import './Skills.css';

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React / Next.js', 'TypeScript', 'CSS / Tailwind', 'Figma'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Python / FastAPI', 'GraphQL / REST', 'PostgreSQL'],
  },
  {
    label: 'DevOps',
    skills: ['AWS / GCP', 'Docker', 'GitHub Actions', 'Terraform'],
  },
  {
    label: 'Other',
    skills: ['Technical Writing', 'Agile / Scrum', 'Code Review', 'Mentorship'],
  },
];

export default function Skills() {
  const [titleRef, titleVisible] = useReveal();
  const [gridRef,  gridVisible]  = useReveal();

  return (
    <section id="skills" className="section-wrap">
      <div ref={titleRef} className={`reveal${titleVisible ? ' visible' : ''}`}>
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">What I work with</h2>
        <p className="skills-intro">
          A toolkit built over years of real projects — from weekend hacks to
          production systems serving thousands.
        </p>
      </div>

      <div ref={gridRef} className={`skill-grid reveal${gridVisible ? ' visible' : ''}`}>
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
