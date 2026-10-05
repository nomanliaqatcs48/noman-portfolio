import { jobs } from '../data/site.js';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="eyebrow reveal">03. Experience</div>
        <h2 className="reveal">Where I've worked</h2>
        <p className="sub reveal">8+ years across product companies and agencies in Lahore.</p>
        <div className="timeline">
          {jobs.map((j) => (
            <div className="job reveal" key={j.company}>
              <div className="job-head">
                <h3>{j.title} · <span className="co">{j.company}</span></h3>
                <span className="date">{j.date}</span>
              </div>
              <div className="loc">{j.location}</div>
              <ul>
                {j.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="tags">
                {j.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
