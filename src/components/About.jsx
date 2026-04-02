import { useReveal } from '../hooks/useReveal';
import './About.css';

const facts = [
  { icon: '📍', label: 'Based in',  value: 'San Diego / Taiwan' },
  { icon: '🎓', label: 'Studying',  value: 'Computer Science @ UC San Diego' },
  { icon: '☕', label: 'Powered by', value: 'Coffee and good documentation' },
  { icon: '🎁', label: 'Currently exploring', value: 'AI, LLMs, and full-stack systems' },
];

export default function About() {
  const [titleRef, titleVisible] = useReveal();
  const [gridRef,  gridVisible]  = useReveal();

  return (
    <section id="about" className="section-wrap">
      <div ref={titleRef} className={`reveal${titleVisible ? ' visible' : ''}`}>
        <p className="eyebrow">About me</p>
        <h2 className="section-title">The human behind the code</h2>
      </div>

      <div ref={gridRef} className={`about-grid reveal${gridVisible ? ' visible' : ''}`}>
        <div className="about-text">
          <p>
            I am a Computer Science student at UC San Diego with hands-on experience
            building full-stack web applications using React, Node.js, and
            MongoDB. Interested in scalable systems, real-time applications, and
            cloud infrastructure. Active ACM member and collaborative team
            contributor with strong bilingual communication skills.
          </p>
        </div>

        <div className="fact-stack">
          {facts.map(({ icon, label, value }) => (
            <div className="fact-card" key={label}>
              <div className="fact-icon">{icon}</div>
              <div>
                <div className="fact-label">{label}</div>
                <div className="fact-value">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
