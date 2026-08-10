import {
  ArrowRight, BrainCircuit, BriefcaseBusiness, Cloud, Code2, Database,
  ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin,
  Menu, ServerCog, Sparkles, X
} from "lucide-react";
import { useState } from "react";

const skills = [
  { icon: Code2, title: "Languages", text: "Python · SQL · PostgreSQL" },
  { icon: BrainCircuit, title: "ML / Deep Learning", text: "TensorFlow · Keras · Scikit-learn · NLTK" },
  { icon: Sparkles, title: "Generative AI", text: "LangChain · LangGraph · LangSmith · RAG · Prompt Engineering · OpenAI · Groq · Hugging Face" },
  { icon: ServerCog, title: "Backend", text: "FastAPI · Flask · REST APIs" },
  { icon: Database, title: "Data & Reliability", text: "Pandas · NumPy · Matplotlib · MCP · AI Guardrails · Model Fallback" },
  { icon: Cloud, title: "Cloud & DevOps", text: "Azure · Docker · Docker Compose · GitHub Actions · MLflow" },
];

const projects = [
  {
    title: "Skin Lesion Classification & Report Generation",
    description:
      "Deep learning healthcare application using EfficientNet for seven-class lesion classification, Grad-CAM for explainability, and LangChain/OpenAI for diagnostic summaries, deployed on Azure with Streamlit.",
    tags: ["TensorFlow", "EfficientNet", "Grad-CAM", "LangChain", "Azure"],
    github: "https://github.com/gyrfalcon55/Skin-Lesion-Diagnosis-and-Report-Generation",
    liveDemo: "https://youtu.be/4wMtMKp6EUc",
  },
  {
    title: "IMDB Sentiment Analysis",
    description:
      "End-to-end NLP and MLOps pipeline for 50,000 IMDB reviews, benchmarking four classifiers with RandomizedSearchCV, MLflow experiment tracking, DVC and FastAPI inference.",
    tags: ["Scikit-learn", "NLTK", "MLflow", "DVC", "FastAPI"],
    github: "https://github.com/gyrfalcon55/IMDB_Sentiment_Analysis",
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  const profileUrl = `${import.meta.env.BASE_URL}profile.jpeg`;

  return (
    <main>
      <div className="orb orb1" />
      <div className="orb orb2" />

      <nav className="nav">
        <a className="brand" href="#home"><span>KJ</span> Khwaja Mohammed Junaid Shaik</a>
        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
        <div className={`navlinks ${open ? "open" : ""}`}>
          {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map(x => (
            <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)}>{x}</a>
          ))}
        </div>
      </nav>

      <section className="hero section" id="home">
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={15} /> AI · ML · GENERATIVE AI</div>
          <h1>Building reliable AI systems from <span>models to production.</span></h1>
          <p>
            I'm <strong>Khwaja Mohammed Junaid Shaik</strong>, a recent graduate building RAG pipelines and
            LLM applications with LangChain, LangGraph, and OpenAI/Groq APIs, with a focus on reliability,
            safe deployment, backend engineering and cloud.
          </p>
          <div className="actions">
            <a className="primary" href="#projects">Explore my work <ArrowRight size={18} /></a>
            <a className="secondary" href={resumeUrl} target="_blank" rel="noreferrer">View Resume <ExternalLink size={18} /></a>
            <a className="secondary" href="mailto:khwajamohammedjunaidshaik@gmail.com"><Mail size={18} /> Contact me</a>
          </div>
          <div className="socials">
            <a href="https://github.com/gyrfalcon55" target="_blank" rel="noreferrer"><Github /> GitHub</a>
            <a href="https://linkedin.com/in/junaid7623" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="profileFrame">
            <img src={profileUrl} alt="Junaid Shaik" className="profileImage" />
          </div>
          <div className="profileGlow" aria-hidden="true" />
        </div>
      </section>

      <section className="stats">
        <div><strong>3</strong><span>Featured Projects</span></div>
        <div><strong>1</strong><span>Certification</span></div>
        <div><strong>1</strong><span>AI-ML Internship</span></div>
        <div><a href={resumeUrl} target="_blank" rel="noreferrer"><strong>↗</strong><span>View Resume</span></a></div>
      </section>

      <section className="section" id="about">
        <div className="sectionLabel">01 / ABOUT</div>
        <div className="aboutGrid">
          <h2>I build AI systems beyond the notebook.</h2>
          <div>
            <p>I build RAG pipelines and LLM applications with LangChain and LangGraph, with an emphasis on reliability and safe deployment through guardrails, model fallback, FastAPI, MLflow, Docker and Azure.</p>
            <p>My projects combine machine learning, GenAI, backend engineering, experiment tracking and cloud deployment into practical end-to-end systems.</p>
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
            <h3>Supply Chain Intelligence System</h3>
            <p>
              An end-to-end forecasting, inventory and agentic analytics platform for supply-chain decision support.
              It combines intermittent-demand forecasting, procurement logic, PostgreSQL analytics and a LangChain/LangGraph agent with MCP integration, model fallback and AI guardrails.
            </p>
            <div className="metricRow">
              <div><strong>200</strong><span>SKUs</span></div>
              <div><strong>0.65</strong><span>MASE</span></div>
              <div><strong>Azure</strong><span>Deployment</span></div>
            </div>
            <div className="tags">
              {["Python", "FastAPI", "Streamlit", "PostgreSQL", "CrostonClassic", "LangGraph", "MCP", "MLflow", "Docker", "Azure"].map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="projectActions">
              <a className="projectLink" target="_blank" rel="noreferrer" href="https://github.com/gyrfalcon55/supply-chain-intelligence-system">
                <Github size={18} /> View repository <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="pipeline">
            <div className="pipelineHeader"><span>SUPPLY CHAIN INTELLIGENCE PIPELINE</span><span className="online">● LIVE</span></div>
            {[
              ["01", "Demand forecasting", "CrostonClassic · intermittent demand"],
              ["02", "Inventory intelligence", "Stockout risk · inventory classification"],
              ["03", "Procurement decisions", "Open-order reconciliation · purchasing logic"],
              ["04", "Agentic analytics", "LangGraph · PostgreSQL MCP"],
              ["05", "Reliability layer", "AI guardrails · model fallback"],
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
              <div className="projectActions">
                <a href={p.github} target="_blank" rel="noreferrer"><Github size={18} /> Repository <ExternalLink size={15} /></a>
                {p.liveDemo && (
                  <a href={p.liveDemo} target="_blank" rel="noreferrer"><ExternalLink size={18} /> Live Demo</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="sectionLabel">04 / EXPERIENCE</div>
        <div className="experienceSingle">
          <article className="panel">
            <BriefcaseBusiness />
            <h2>AI-ML Virtual Internship</h2>
            <div className="timeline">
              <div>
                <span>APR 2025 — JUN 2025</span>
                <h3>AICTE · AI-ML Virtual Internship</h3>
                <p>AI-ML virtual internship backed by Google for Developers under AICTE's India Edu Program, covering AI/ML fundamentals, neural networks and TensorFlow.</p>
                <p>Built a Loan Eligibility Prediction application using Logistic Regression, GridSearchCV, Flask and Bootstrap, achieving 89% accuracy.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="education">
        <div className="sectionLabel">05 / BACKGROUND</div>
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
        <div className="sectionLabel">06 / CONTACT</div>
        <h2>Have an AI problem worth solving?</h2>
        <p>I'm interested in AI/ML engineering, Generative AI and backend-focused opportunities where reliable intelligent systems meet real-world products.</p>
        <a className="primary" href="mailto:khwajamohammedjunaidshaik@gmail.com">Start a conversation <ArrowRight size={18} /></a>
        <div className="contactMeta">
          <span><Mail size={16} /> khwajamohammedjunaidshaik@gmail.com</span>
          <span><MapPin size={16} /> India</span>
          <span>+91 7337248619</span>
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
