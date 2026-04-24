import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

const projects = [
  {
    num: "01.",
    title: "Resonance - Full Stack Social Platform",
    desc: "Building a MERN stack social platform for music discovery andmicroblog-style interaction. Designed scalable APIs, authentication, anda modular Express.js backend, with a focus on system design and deployment.",

    tags: ["React", "MongoDB", "Node.js", "Express"],
    href: "https://github.com/Macu239/Resonance",
  },
  {
    num: "02.",
    title: "Study Abroad Guide — Informational Resource",
    desc: "A Inofficial resource website for students who want to study abroad in Taiwan, providing comprehensive guides on application processes, university reviews, and cultural tips to help them navigate their international education journey.",
    tags: ["React", "Node.js", "HTML", "CSS"],
    href: "https://github.com/Macu239/StudyAbroadGuide",
  },
  {
    num: "03.",
    title: "Travel Splitter — Expense Tracking App",
    desc: "A simple expense tracking app for splitting costs among friends.",
    tags: ["React", "MongoDB", "Node.js", "Express"],
    href: "https://github.com/Macu239/TravelSplitter",
  },
];

export default function Projects() {
  const [titleRef, titleVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section id="projects" className="section-wrap">
      <div ref={titleRef} className={`reveal${titleVisible ? " visible" : ""}`}>
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Things I've built</h2>
      </div>

      <div
        ref={gridRef}
        className={`proj-grid reveal${gridVisible ? " visible" : ""}`}
      >
        {projects.map(({ num, title, desc, tags, href }) => (
          <div className="proj-card" key={num}>
            <div className="proj-top-bar" />
            <div className="proj-num">{num}</div>
            <div className="proj-title">{title}</div>
            <div className="proj-desc">{desc}</div>
            <div className="proj-tags">
              {tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <a href={href} className="proj-link">
              View project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
