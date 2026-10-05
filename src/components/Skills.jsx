import { Icon } from './Icons.jsx';
import { skills } from '../data/site.js';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow reveal">02. Skills</div>
        <h2 className="reveal">My tech stack</h2>
        <p className="sub reveal">The tools I use every day to build products end to end.</p>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card reveal" key={s.title}>
              <div className="ic"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <div className="tags">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
