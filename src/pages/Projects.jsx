import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function Projects() {
  return (
    <main style={{ padding: "28px 32px 40px" }}>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "36px",
          padding: "32px",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)), rgba(9,13,29,0.78)",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: "0.75rem",
            color: "#f4b168",
            margin: 0,
          }}
        >
          Projects
        </p>
        <h1 style={{ margin: "16px 0 0", maxWidth: "12ch" }}>
          A closer look at the projects I have built so far.
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "18px",
            marginTop: "28px",
          }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "24px",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "0.75rem",
                  color: "#f4b168",
                }}
              >
                {project.tag}
              </p>
              <h2 style={{ margin: "14px 0 12px" }}>{project.title}</h2>
              <p style={{ color: "rgba(227,233,243,0.78)" }}>
                {project.shortDescription}
              </p>
              <p
                style={{
                  marginTop: "18px",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  color: "#8fdfff",
                  fontFamily: "var(--heading)",
                }}
              >
                {project.stat}
              </p>
              <Link
                to={`/projects/${project.slug}`}
                style={{
                  display: "inline-flex",
                  marginTop: "20px",
                  textDecoration: "none",
                  color: "#ffbf7a",
                  fontWeight: 700,
                }}
              >
                View Project
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

export default Projects;
