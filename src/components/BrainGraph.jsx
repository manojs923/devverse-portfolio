import React, { useState } from "react";
import ForceGraph2D from "react-force-graph-2d";

const allNodes = [
  { id: "Manoj" },
  { id: "QuizArena" },
  { id: "FoodGuard" },

  { id: "React" },
  { id: "Node.js" },
  { id: "Express" },
  { id: "MongoDB" },
  { id: "Socket.io" },
  { id: "OpenAI API" }
];

const allLinks = [
  { source: "Manoj", target: "QuizArena" },
  { source: "Manoj", target: "FoodGuard" },

  { source: "QuizArena", target: "React" },
  { source: "QuizArena", target: "Node.js" },
  { source: "QuizArena", target: "Express" },
  { source: "QuizArena", target: "MongoDB" },
  { source: "QuizArena", target: "Socket.io" },
  { source: "QuizArena", target: "OpenAI API" }
];

function BrainGraph() {

  const [expanded, setExpanded] = useState(false);

  const visibleNodes = expanded
    ? allNodes
    : allNodes.filter(n =>
        ["Manoj", "QuizArena", "FoodGuard"].includes(n.id)
      );

  const visibleLinks = expanded
    ? allLinks
    : allLinks.filter(l =>
        l.source === "Manoj"
      );

  return (
    <div style={{
  width: "100%",
  height: "90vh",
  background: "#0f172a"
}}>
      <ForceGraph2D
  graphData={{ nodes: visibleNodes, links: visibleLinks }}
  nodeLabel="id"
  backgroundColor="#0f172a"


  onNodeClick={(node) => {
    if (node.id === "QuizArena") {
      setExpanded(true);
    }
  }}

  nodeCanvasObject={(node, ctx, globalScale) => {
  const label = node.id;

  ctx.beginPath();
  ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#38bdf8";
  ctx.shadowBlur = 10;
  ctx.shadowColor = "#38bdf8";
  ctx.fill();

  const fontSize = 12 / globalScale;
  ctx.font = `${fontSize}px Sans-Serif`;
  ctx.fillStyle = "white";
  ctx.fillText(label, node.x + 6, node.y + 6);
}}
/>
    </div>
  );
}

export default BrainGraph;