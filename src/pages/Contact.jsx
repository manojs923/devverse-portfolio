import { motion } from "framer-motion";
import "./Contact.css";

const contactItems = [
  {
    label: "Email",
    value: "manoj.sm923@gmail.com",
    href: "mailto:manoj.sm923@gmail.com",
    note: "Best for direct collaboration and project discussions.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/manojs923",
    href: "https://linkedin.com/in/manojs923",
    note: "A professional place to connect and stay in touch.",
  },
  {
    label: "GitHub",
    value: "github.com/MANOJ.S",
    href: "https://github.com/MANOJ.S",
    note: "Explore my code, projects, and technical work.",
  },
  {
    label: "Location",
    value: "Karnataka, India",
    href: null,
    note: "Working from India and open to global opportunities.",
  },
];

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <motion.div
          className="contact-copy contact-copy-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-label">Contact</p>
          <h1>Feel free to reach out if you&apos;d like to connect.</h1>
          <p className="contact-intro">
            I&apos;m a Computer Science student interested in full stack development,
            internships, and learning through real projects. You can contact me
            through email, LinkedIn, or GitHub.
          </p>

          <div className="contact-actions">
            <a href="mailto:manoj.sm923@gmail.com" className="contact-primary">
              Send An Email
            </a>
            <a
              href="https://linkedin.com/in/manojs923"
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              Open LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      <section className="contact-grid">
        {contactItems.map((item, index) => {
          const body = (
            <>
              <span>{item.label}</span>
              <h2>{item.value}</h2>
              <p>{item.note}</p>
            </>
          );

          return item.href ? (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="contact-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {body}
            </motion.a>
          ) : (
            <motion.article
              key={item.label}
              className="contact-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              {body}
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}

export default Contact;
