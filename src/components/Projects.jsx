import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const projects = [
  {
    num: '01.',
    title: 'Nourish — Meal Planning App',
    desc: 'A full-stack app generating personalized weekly meal plans from dietary preferences and pantry inventory. Serves 2k+ active users.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    href: '#',
  },
  {
    num: '02.',
    title: 'Codepal — AI Code Reviewer',
    desc: 'A GitHub Action that reviews pull requests and suggests improvements using an LLM. 800+ installs on the marketplace.',
    tags: ['TypeScript', 'OpenAI', 'GitHub API'],
    href: '#',
  },
  {
    num: '03.',
    title: 'Trailhead — Hiking Companion',
    desc: 'Mobile-first PWA for discovering and tracking hikes, with offline map support and social sharing for the outdoor community.',
    tags: ['Next.js', 'Mapbox', 'Supabase'],
    href: '#',
  },
];

export default function Projects() {
  const [titleRef, titleVisible] = useReveal();
  const [gridRef,  gridVisible]  = useReveal();

  return (
    <section id="projects" className="section-wrap">
      <div ref={titleRef} className={`reveal${titleVisible ? ' visible' : ''}`}>
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Things I've built</h2>
      </div>

      <div ref={gridRef} className={`proj-grid reveal${gridVisible ? ' visible' : ''}`}>
        {projects.map(({ num, title, desc, tags, href }) => (
          <div className="proj-card" key={num}>
            <div className="proj-top-bar" />
            <div className="proj-num">{num}</div>
            <div className="proj-title">{title}</div>
            <div className="proj-desc">{desc}</div>
            <div className="proj-tags">
              {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            <a href={href} className="proj-link">View project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
