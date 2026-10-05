import { useState } from 'react';
import { Icon } from './Icons.jsx';
import { projects } from '../data/projects.js';
import { filters } from '../data/site.js';

export default function Projects() {
  const [active, setActive] = useState('all');
  const [touched, setTouched] = useState(false);

  const choose = (key) => {
    setActive(key);
    setTouched(true);
  };

  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow reveal">04. Projects</div>
        <h2 className="reveal">Things I've built</h2>
        <p className="sub reveal">A selection of {projects.length} web and mobile products I've worked on. Filter by type, or open a live site.</p>
        <div className="filters reveal">
          {filters.map((f) => (
            <button key={f.key} className={`filter${active === f.key ? ' active' : ''}`} onClick={() => choose(f.key)}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="projects">
          {projects.map((p) => {
            const hidden = active !== 'all' && p.cat !== active;
            return (
              <article key={p.name} className={`project reveal${touched ? ' in' : ''}${hidden ? ' hide' : ''}`}>
                <div className="p-top">
                  <span className="p-cat">{p.label}</span>
                  {p.url && (
                    <a className="p-link" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`}>
                      <Icon name="external" />
                    </a>
                  )}
                </div>
                <h3>{p.name}</h3>
                <div className="p-role">{p.role}</div>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
