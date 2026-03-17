import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [activeFeature, setActiveFeature] = useState(0);
  const [stageActive, setStageActive] = useState(false);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const activePanel = project.features[activeFeature];

  return (
    <main className={`project-detail-page accent-${project.accent}`}>
      <section className="project-detail-hero">
        <motion.div
          className="project-detail-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="project-eyebrow">{project.tag}</p>
          <h1>{project.title}</h1>
          <p className="project-hero-summary">{project.heroSummary}</p>

          <div className="project-detail-actions">
            <Link to="/projects" className="project-back-link">
              Back To Projects
            </Link>
            <a href="/contact" className="project-primary-link">
              Discuss This Project
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-detail-stage"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="project-stage-shell">
            <div className="stage-orbit stage-orbit-one" />
            <div className="stage-orbit stage-orbit-two" />
            <div className="stage-core-anchor">
              <motion.button
                type="button"
                className={stageActive ? "stage-core stage-core-active" : "stage-core"}
                onHoverStart={() => setStageActive(true)}
                onHoverEnd={() => setStageActive(false)}
                onFocus={() => setStageActive(true)}
                onBlur={() => setStageActive(false)}
                onClick={() => setStageActive((value) => !value)}
                onTapStart={() => setStageActive(true)}
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(255, 179, 107, 0.2)" }}
                whileTap={{ scale: 1.02, boxShadow: "0 0 44px rgba(255, 179, 107, 0.24)" }}
                animate={{
                  boxShadow: stageActive
                    ? "0 0 40px rgba(255, 179, 107, 0.2)"
                    : "0 0 0 rgba(255, 179, 107, 0)",
                }}
                transition={{ duration: 0.2 }}
              >
                <span>Project Signal</span>
                <strong>{project.stat}</strong>
              </motion.button>
            </div>

            {project.stack.map((item, index) => (
              <motion.div
                key={item}
                className={`stage-node stage-node-${index + 1}`}
                animate={
                  stageActive
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.72, y: 18 }
                }
                transition={{ duration: 0.35, delay: stageActive ? index * 0.06 : 0 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="project-detail-metrics">
        {project.metrics.map((metric) => (
          <motion.article
            key={metric.label}
            className="project-metric-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </motion.article>
        ))}
      </section>

      <section className="project-detail-grid">
        <motion.article
          className="project-story-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="project-section-label">Why It Matters</p>
          <h2>The product story behind {project.title}.</h2>
          <ul className="project-impact-list">
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          className="project-story-card interactive-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="project-section-label">Interactive Breakdown</p>
          <h2>Click through the parts that make this project work.</h2>

          <div className="feature-switcher">
            {project.features.map((feature, index) => (
              <button
                key={feature.name}
                type="button"
                className={
                  index === activeFeature
                    ? "feature-chip feature-chip-active"
                    : "feature-chip"
                }
                onClick={() => setActiveFeature(index)}
              >
                {feature.name}
              </button>
            ))}
          </div>

          <motion.div
            key={activePanel.name}
            className="feature-panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span>{activePanel.name}</span>
            <p>{activePanel.detail}</p>
          </motion.div>
        </motion.article>
      </section>

      <section className="project-timeline">
        <div className="project-timeline-heading">
          <p className="project-section-label">Build Journey</p>
          <h2>How the project moved from idea to product direction.</h2>
        </div>

        <div className="timeline-track">
          {project.timeline.map((item, index) => (
            <motion.article
              key={item.phase}
              className="timeline-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <span className="timeline-step">0{index + 1}</span>
              <h3>{item.phase}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="project-modules">
        <div className="project-timeline-heading">
          <p className="project-section-label">System Modules</p>
          <h2>The technical layers that make {project.title} feel complete.</h2>
        </div>

        <div className="modules-grid">
          {project.modules.map((item, index) => (
            <motion.article
              key={item.name}
              className="module-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectDetail;
