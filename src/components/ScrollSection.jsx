import { motion } from "framer-motion";

function ScrollSection({ title, subtitle }) {
  return (
    <motion.div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white"
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 style={{ fontSize: "48px" }}>{title}</h1>
      <p style={{ marginTop: "10px" }}>{subtitle}</p>
    </motion.div>
  );
}

export default ScrollSection;