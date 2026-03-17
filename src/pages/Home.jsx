import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";
import { projects } from "../data/projects";

const constellationNodes = [
  { label: "MERN Architecture", className: "node-a" },
  { label: "Socket.io Systems", className: "node-b" },
  { label: "AI Integrations", className: "node-c" },
  { label: "REST + Realtime APIs", className: "node-d" },
];

const highlights = [
  {
    value: "02+",
    label: "Flagship products designed around real-world use cases",
  },
  {
    value: "MERN",
    label: "Core stack for responsive, scalable full stack delivery",
  },
  {
    value: "AI",
    label: "Used where intelligence adds value instead of noise",
  },
];

const signalPath = [
  {
    step: "01",
    title: "Observe",
    text: "Study the product problem before chasing visuals or tech trends.",
  },
  {
    step: "02",
    title: "Shape",
    text: "Design an interface with mood, rhythm, and clear user energy.",
  },
  {
    step: "03",
    title: "Activate",
    text: "Build the stack so realtime behavior and intelligence feel natural.",
  },
];

function Home() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 18 });
  const glow = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(255, 154, 108, 0.28), transparent 30%), radial-gradient(circle at calc(${smoothX}% - 18%) calc(${smoothY}% + 10%), rgba(0, 184, 255, 0.18), transparent 28%)`;
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);

  const handlePointerMove = ({ clientX, clientY }) => {
    if (!heroRef.current) {
      return;
    }

    const bounds = heroRef.current.getBoundingClientRect();
    const x = ((clientX - bounds.left) / bounds.width) * 100;
    const y = ((clientY - bounds.top) / bounds.height) * 100;
    pointerX.set(Math.max(0, Math.min(100, x)));
    pointerY.set(Math.max(0, Math.min(100, y)));
  };

  return (
    <main className="home-page" ref={pageRef}>
      <motion.div className="floating-glow" style={{ background: glow }} />

      <section
        className="hero-panel"
        ref={heroRef}
        onMouseMove={handlePointerMove}
      >
        <motion.div className="hero-copy" style={{ y: heroY }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Portfolio / Resume / Developer Universe
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Manoj is a student developer building full stack projects with purpose.
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I enjoy building full stack applications, experimenting with
            realtime systems, and adding AI features where they solve real
            problems. This portfolio is a place to share what I&apos;ve learned
            through projects and practical development.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="/projects" className="primary-action">
              Explore Projects
            </a>
            <a href="/contact" className="secondary-action">
              Let&apos;s Connect
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ rotate: heroRotate }}
        >
          <div className="constellation-board">
            <motion.div
              className="signal-card signal-card-large"
              whileHover={{ y: -8, rotate: -1 }}
            >
              <span>Current Focus</span>
              <strong>Full stack development, realtime systems, and practical AI features</strong>
            </motion.div>

            <div className="constellation-core">
              <span>DevVerse</span>
              <strong>Learning by building real projects</strong>
            </div>

            {constellationNodes.map((node, index) => (
              <motion.div
                key={node.label}
                className={`constellation-node ${node.className}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.28 + index * 0.08 }}
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <span className="chip-index">0{index + 1}</span>
                {node.label}
              </motion.div>
            ))}

            <motion.div
              className="signal-card signal-card-small"
              whileHover={{ y: -8, rotate: 1 }}
            >
              <span>Design Direction</span>
              <strong>Clean structure, thoughtful UI, and interactive experiences</strong>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="highlights-strip">
        {highlights.map((item) => (
          <motion.article
            key={item.value}
            className="highlight-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, scale: 1.01 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </motion.article>
        ))}
      </section>

      <section className="story-grid">
        <motion.article
          className="story-panel manifesto-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">About The Work</p>
          <h2>I want my projects to feel clear, useful, and engaging to explore.</h2>
          <p>
            I like combining backend logic, frontend design, and practical
            features into projects that show both technical learning and
            product thinking. My goal is to keep improving by building things
            that are useful, interactive, and grounded in real ideas.
          </p>
        </motion.article>

        <motion.article
          className="story-panel rhythm-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="section-label">Build Rhythm</p>
          <ul>
            <li>Strong UI direction before writing generic layout code</li>
            <li>APIs and realtime flows designed for user energy</li>
            <li>Problem-first AI integrations with practical output</li>
          </ul>
        </motion.article>
      </section>

      <section className="path-section">
        <div className="showcase-heading">
          <p className="section-label">Creative Workflow</p>
          <h2>My workflow usually begins with the problem and grows through building.</h2>
        </div>

        <div className="path-grid">
          {signalPath.map((item, index) => (
            <motion.article
              key={item.step}
              className="path-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <span className="path-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="projects-showcase">
        <div className="showcase-heading">
          <p className="section-label">Selected Projects</p>
          <h2>These projects reflect what I&apos;ve been learning through hands-on development.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-panel"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -14, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <div className="project-meta">{project.stat}</div>
              <Link to={`/projects/${project.slug}`}>View Details</Link>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className="closing-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">Open For Opportunities</p>
        <h2>I&apos;m looking for opportunities to learn, contribute, and grow through real work.</h2>
        <a href="/contact" className="primary-action">
          Start A Conversation
        </a>
      </motion.section>
    </main>
  );
}

export default Home;
