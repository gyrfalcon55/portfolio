import {
  ArrowRight, BrainCircuit, BriefcaseBusiness, Cloud, Code2, Database,
  ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin,
  Menu, ServerCog, Sparkles, X
} from "lucide-react";
import { useState } from "react";

const skills = [
  { icon: Code2, title: "Languages", text: "Python · SQL · PostgreSQL" },
  { icon: BrainCircuit, title: "ML / Deep Learning", text: "TensorFlow · Keras · Scikit-learn · NLTK" },
  { icon: Sparkles, title: "Generative AI", text: "LangChain · LangGraph · RAG · OpenAI · Groq · Hugging Face" },
  { icon: ServerCog, title: "Backend", text: "FastAPI · Flask · REST APIs" },
  { icon: Database, title: "Data", text: "Pandas · NumPy · Matplotlib · Vector Databases" },
  { icon: Cloud, title: "Cloud & DevOps", text: "AWS · Azure · Docker · GitHub Actions · MLflow" },
];

const projects = [
  {
    title: "Legal Contract Processing & Clause Extraction",
    description:
      "RAG-based document intelligence pipeline for contract understanding and clause extraction across diverse legal documents using semantic retrieval and locally hosted LLMs.",
    tags: ["LangChain", "ChromaDB", "Ollama", "RAG", "Pydantic"],
    github: "https://github.com/gyrfalcon55/Document_Processing_with_LLMs",
  },
  {
    title: "IMDB Sentiment Analysis",
    description:
      "End-to-end NLP and MLOps pipeline for 50K movie reviews with preprocessing, model tuning, MLflow experiment tracking, DVC and a FastAPI inference interface.",
    tags: ["Scikit-learn", "NLTK", "FastAPI", "MLflow", "Docker"],
    github: "https://github.com/gyrfalcon55/IMDB_Sentiment_Analysis",
  },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="orb orb1" />
      <div className="orb orb2" />

      <nav className="nav">
        <a className="brand" href="#home"><span>KJ</span> Khwaja Mohammed Junaid Shaik </a>
        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
        <div className={`navlinks ${open ? "open" : ""}`}>
          {["About", "Skills", "Projects", "Education", "Contact"].map(x => (
            <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)}>{x}</a>
          ))}
        </div>
      </nav>

      <section className="hero section" id="home">
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={15} /> AI · ML · GENERATIVE AI</div>
          <h1>Building intelligent systems that move from <span>models to production.</span></h1>
          <p>
            I'm <strong>Khwaja Mohammed Junaid Shaik</strong>, a Computer Science & Data Science graduate
            focused on AI engineering, Generative AI, machine learning and production-ready backend systems.
          </p>
          <div className="actions">
            <a className="primary" href="#projects">Explore my work <ArrowRight size={18} /></a>
            <a
              className="secondary"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              View Resume <ExternalLink size={18} />
            </a>
            <a className="secondary" href="mailto:khwajamohammedjunaidshaik@gmail.com"><Mail size={18} /> Contact me</a>
          </div>
          <div className="socials">
            <a href="https://github.com/gyrfalcon55" target="_blank"><Github /> GitHub</a>
            <a href="https://linkedin.com/in/junaid7623" target="_blank"><Linkedin /> LinkedIn</a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="profileFrame">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpeg`}
              alt="Junaid Shaik"
              className="profileImage"
            />
          </div>
          <div className="profileGlow" aria-hidden="true" />
          <div className="floatingCard fc1">RAG <small>Retrieval + LLMs</small></div>
          <div className="floatingCard fc2">ML <small>Train → Track → Deploy</small></div>
        </div>
      </section>

      <section className="stats">
        <div><strong>4+</strong><span>Projects Built</span></div>
        <div><strong>1</strong><span>Certification</span></div>
        <div><strong>2</strong><span>Cloud Platforms</span></div>
        <div><a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          <strong>↗</strong>
          <span>View Resume</span>
        </a></div>
      </section>

      <section className="section" id="about">
        <div className="sectionLabel">01 / ABOUT</div>
        <div className="aboutGrid">
          <h2>I build AI systems beyond the notebook.</h2>
          <div>
            <p>My work spans model development, explainable AI, RAG systems, LLM orchestration, experiment tracking, APIs, containers and cloud deployment.</p>
            <p>I enjoy turning ML and GenAI concepts into usable systems with clean pipelines and practical engineering around the model.</p>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="sectionLabel">02 / TOOLKIT</div>
        <h2>Technical stack</h2>
        <div className="skillGrid">
          {skills.map(({ icon: Icon, title, text }) => (
            <article className="skill" key={title}>
              <Icon /><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionLabel">03 / SELECTED WORK</div>
        <h2>Projects</h2>

        <article className="featured">
          <div className="featuredCopy">
            <div className="projectNo">FEATURED PROJECT · 01</div>
            <h3>Skin Lesion Diagnosis & AI Report Generation</h3>
            <p>
              An end-to-end AI healthcare system using EfficientNet to classify seven lesion categories,
              segmentation for focused analysis, Grad-CAM for model interpretability, and LLM-powered
              diagnostic summaries for understandable reporting.
            </p>
            <div className="metricRow">
              <div><strong>89%</strong><span>Weighted F1</span></div>
              <div><strong>7</strong><span>Lesion classes</span></div>
              <div><strong>Azure</strong><span>Deployment</span></div>
            </div>
            <div className="tags">
              {["Python", "TensorFlow", "EfficientNet", "OpenCV", "Grad-CAM", "LangChain", "Azure"].map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="projectActions">
              <a className="projectLink" target="_blank" rel="noreferrer" href="https://github.com/gyrfalcon55/Skin-Lesion-Diagnosis-and-Report-Generation">
                <Github size={18} /> View repository <ExternalLink size={16} />
              </a>
              <a className="projectLink" target="_blank" rel="noreferrer" href="https://example.com">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>

          <div className="pipeline">
            <div className="pipelineHeader"><span>AI DIAGNOSTIC PIPELINE</span><span className="online">● ONLINE</span></div>
            {[
              ["01", "Image preprocessing", "Noise · Hair removal · Normalization"],
              ["02", "Lesion segmentation", "Region of interest extraction"],
              ["03", "EfficientNet classifier", "Seven-class prediction"],
              ["04", "Grad-CAM", "Explainable visual evidence"],
              ["05", "LLM report", "Clinical + patient summaries"],
            ].map(([n, a, b]) => <div className="pipe" key={n}><b>{n}</b><div><strong>{a}</strong><small>{b}</small></div></div>)}
          </div>
        </article>

        <div className="projectGrid">
          {projects.map((p, i) => (
            <article className="project" key={p.title}>
              <div className="projectNo">0{i + 2}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
              <a href={p.github} target="_blank"><Github size={18} /> Repository <ExternalLink size={15} /></a>
            </article>
          ))}
          <article className="project placeholder">
            <div className="projectNo">NEXT</div>
            <BriefcaseBusiness size={35} />
            <h3>Supply Chain Intelligence System</h3>
            <p>Reserved for the upcoming flagship project. Forecasting, agentic workflows and supply-chain decision intelligence will live here.</p>
            <div className="coming">COMING SOON</div>
          </article>
        </div>
      </section>

      <section className="section" id="education">
        <div className="sectionLabel">04 / BACKGROUND</div>
        <div className="twoCol">
          <article className="panel">
            <GraduationCap />
            <h2>Education</h2>
            <div className="timeline">
              <div><span>2022 — 2026</span><h3>B.Tech · CSE (Data Science)</h3><p>Raghu Engineering College · CGPA 8.1</p></div>
            </div>
          </article>
          <article className="panel">
            <Sparkles />
            <h2>Certification</h2>
            <div className="cert">
              <span>2025</span>
              <h3>Oracle Cloud Infrastructure</h3>
              <p>Certified AI Foundations Associate</p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="sectionLabel">05 / CONTACT</div>
        <h2>Have an AI problem worth solving?</h2>
        <p>I'm interested in AI/ML engineering, Generative AI and backend-focused opportunities where intelligent systems meet real-world products.</p>
        <a className="primary" href="mailto:khwajamohammedjunaidshaik@gmail.com">Start a conversation <ArrowRight size={18} /></a>
        <div className="contactMeta">
          <span><Mail size={16} /> khwajamohammedjunaidshaik@gmail.com</span>
          <span><MapPin size={16} /> India</span>
        </div>
      </section>

      <footer>
        <span>© 2026 Junaid Shaik</span>
        <span>Designed & built with React</span>
      </footer>
    </main>
  );
}

export default App;
