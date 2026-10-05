import { Icon } from './Icons.jsx';

export default function Education() {
  return (
    <section id="education" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="eyebrow reveal">05. Education</div>
        <div className="edu reveal">
          <div className="ic"><Icon name="grad" /></div>
          <div>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Khawaja Fareed University of Engineering &amp; Information Technology, Rahim Yar Khan</p>
          </div>
          <span className="date">2014 – 2018</span>
        </div>
      </div>
    </section>
  );
}
