import { motion } from "framer-motion";
import "./About.css";

const focusAreas = [
  "MERN stack development",
  "Realtime web applications",
  "AI-powered product features",
  "Problem-solving through practical projects",
];

const growthPoints = [
  {
    title: "What I Study",
    text: "I am a Computer Science student building my skills through hands-on development, not just theory. I enjoy understanding how systems work from frontend interaction to backend logic.",
  },
  {
    title: "What I Build",
    text: "My projects focus on products that feel useful and alive. I like working on full stack applications where the interface, data flow, and user experience all matter together.",
  },
  {
    title: "Where I Am Growing",
    text: "I am currently strengthening my skills in scalable MERN applications, realtime communication, and AI integration by turning ideas into working products.",
  },
];

const projectLessons = [
  {
    title: "QuizArena",
    text: "Helped me explore realtime systems, multiplayer interaction, and how to make web apps feel energetic and responsive.",
  },
  {
    title: "FoodGuard",
    text: "Taught me about full stack system design, automation, analytics, AI integration, and solving practical real-world problems.",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-label">About Me</p>
          <h1>A student developer learning by building meaningful products.</h1>
          <p className="about-intro">
            I&apos;m a Computer Science student with a strong interest in full stack
            development. I enjoy building applications that combine clean logic,
            engaging frontend experiences, and features that solve actual
            problems.
          </p>
          <p className="about-intro">
            My work so far has helped me explore MERN development, realtime
            systems, AI integration, and product thinking through projects like
            QuizArena and FoodGuard.
          </p>
        </motion.div>

        <motion.div
          className="about-focus-panel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="about-label">Current Focus</p>
          <ul className="about-focus-list">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="about-grid">
        {growthPoints.map((item, index) => (
          <motion.article
            key={item.title}
            className="about-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </section>

      <section className="about-projects">
        <div className="about-projects-heading">
          <p className="about-label">Projects Taught Me</p>
          <h2>The best part of learning has been building things that push me forward.</h2>
        </div>

        <div className="about-projects-grid">
          {projectLessons.map((item, index) => (
            <motion.article
              key={item.title}
              className="about-project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
