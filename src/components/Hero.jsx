import { Icon } from './Icons.jsx';
import { RESUME_URL, RESUME_FILENAME } from '../data/site.js';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="grid-bg" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="badge reveal"><span className="dot" /> Open to new opportunities</div>
            <div className="kicker reveal">Senior Full Stack Developer</div>
            <div className="also reveal"><span>Also worked as</span><b>React Native Developer</b><b>Shopify Developer</b></div>
            <h1 className="reveal">I'm Noman. I turn complex ideas into clean, scalable products.</h1>
            <p className="lead reveal">
              I build fast, reliable web and mobile apps with React, Next.js and React Native, and power them with Node.js,
              NestJS, MongoDB and PostgreSQL. Over 8 years I've shipped products in e-commerce, Shopify, real estate, Web3,
              fintech and wellness.
            </p>
            <div className="hero-cta reveal">
              <a href="#projects" className="btn btn-primary">View my work <Icon name="arrowDown" /></a>
              <a href={RESUME_URL} download={RESUME_FILENAME} className="btn btn-ghost"><Icon name="download" />Resume</a>
            </div>
            <div className="stats reveal">
              <div className="stat"><b>8+</b><span>Years building</span></div>
              <div className="stat"><b>22+</b><span>Shipped products</span></div>
              <div className="stat"><b>5</b><span>Apps on Play Store</span></div>
            </div>
          </div>

          <div className="code-wrap reveal">
            <div className="float f1"><Icon name="bolt" />8+ years shipping</div>
            <div className="code">
              <div className="code-bar">
                <i style={{ background: '#ff5f57' }} />
                <i style={{ background: '#febc2e' }} />
                <i style={{ background: '#28c840' }} />
                <span>portfolio.js — ~/noman</span>
              </div>
              <pre>
                <span className="ln">1</span><span className="k">const</span> developer = {'{'}{'\n'}
                <span className="ln">2</span>{'  '}<span className="p">name</span>: <span className="str">'Noman Liaqat'</span>,{'\n'}
                <span className="ln">3</span>{'  '}<span className="p">role</span>: <span className="str">'Senior Full Stack Dev'</span>,{'\n'}
                <span className="ln">4</span>{'  '}<span className="p">skills</span>: [<span className="str">'React'</span>, <span className="str">'React Native'</span>, <span className="str">'Node.js'</span>],{'\n'}
                <span className="ln">5</span>{'  '}<span className="p">experience</span>: <span className="str">'8+ years'</span>,{'\n'}
                <span className="ln">6</span>{'  '}<span className="p">location</span>: <span className="str">'Lahore, PK'</span>,{'\n'}
                <span className="ln">7</span>{'  '}<span className="p">passion</span>: <span className="str">'Building scalable products'</span>{'\n'}
                <span className="ln">8</span>{'};'}{'\n'}
                <span className="ln">9</span><span className="cm">// Ready to build something great</span>{'\n'}
                <span className="cursor" />
              </pre>
            </div>
            <div className="float f2"><Icon name="check" />US &amp; KSA clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
