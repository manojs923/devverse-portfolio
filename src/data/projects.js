export const projects = [
  {
    slug: "quizarena",
    title: "QuizArena",
    tag: "Realtime Experience",
    stat: "Live multiplayer momentum",
    shortDescription:
      "A multiplayer quiz platform built for live competition, instant scoring, and high-energy user interaction.",
    heroSummary:
      "QuizArena is designed like a live event. The focus is speed, energy, competition, and keeping every player engaged in real time.",
    impact: [
      "Realtime room-based gameplay with instant updates",
      "Fast answer evaluation and score progression",
      "A playful interface built to sustain user excitement",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    metrics: [
      { label: "Core Mode", value: "Multiplayer Live Quiz" },
      { label: "Interaction Style", value: "Realtime Rooms + Scoring" },
      { label: "Main Strength", value: "Fast game flow" },
    ],
    timeline: [
      {
        phase: "Challenge",
        text: "Make quiz sessions feel social and fast instead of static and single-user.",
      },
      {
        phase: "Build",
        text: "Used Socket.io events, room management, and quick feedback loops to create live play.",
      },
      {
        phase: "Outcome",
        text: "The result feels closer to a live competition than a typical question-answer app.",
      },
    ],
    features: [
      {
        name: "Live Rooms",
        detail: "Players join the same session and immediately sync to shared state.",
      },
      {
        name: "Instant Scoreboard",
        detail: "Scores update as the game evolves, creating tension and momentum.",
      },
      {
        name: "Fast Feedback",
        detail: "Every answer creates a quick response so the game never feels flat.",
      },
    ],
    modules: [
      {
        name: "Gameplay Engine",
        detail: "Room-based sessions, synchronized questions, and fast state transitions keep the experience competitive.",
      },
      {
        name: "Realtime Layer",
        detail: "Socket.io handles live score updates, session flow, and low-latency interaction between players.",
      },
      {
        name: "Feedback System",
        detail: "Immediate responses after each answer help the product feel dynamic instead of static.",
      },
    ],
    accent: "orange",
  },
  {
    slug: "foodguard",
    title: "FoodGuard",
    tag: "AI + Sustainability",
    stat: "Lifecycle intelligence with real-world action",
    shortDescription:
      "An AI-powered food lifecycle and sustainability platform that reduces wastage, connects users with farmers, and automates food monitoring workflows.",
    heroSummary:
      "FoodGuard is a full-stack food lifecycle and sustainability management platform built around authentication, automation, AI services, analytics, and real-time collaboration. The goal is not just monitoring food data, but helping users take smarter action before wastage happens.",
    impact: [
      "Supports both regular users and farmers with secure role-based access",
      "Tracks manufacturing date, shelf life, expiry date, and wastage status for each food item",
      "Preserves historical analytics accuracy through soft archival instead of destructive deletion",
      "Combines automation, AI, chat, and reporting in one modular platform",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    metrics: [
      { label: "Core Mode", value: "Food Lifecycle Management" },
      { label: "Auth Model", value: "JWT + Google OAuth + OTP Reset" },
      { label: "Main Strength", value: "Automation + data integrity" },
    ],
    timeline: [
      {
        phase: "Challenge",
        text: "Build a system that does more than store food records. It needed to reduce wastage, support multiple roles, and preserve reliable long-term analytics.",
      },
      {
        phase: "Build",
        text: "Implemented role-based authentication, lifecycle tracking, cron-driven expiry checks, AI integrations, realtime chat, and analytics reporting in a modular full-stack architecture.",
      },
      {
        phase: "Outcome",
        text: "The final platform demonstrates full-stack system design with strong automation, reporting, and historical accuracy principles.",
      },
    ],
    features: [
      {
        name: "Auth System",
        detail: "I implemented JWT-based authentication for two roles, with email/password login, Google OAuth, OTP password reset, React Context on the frontend, and backend middleware for protected routes.",
      },
      {
        name: "Lifecycle Engine",
        detail: "Each food item stores manufacturing date, shelf life, expiry date, and wastage state. I used soft archival instead of hard deletion so analytics remain historically accurate.",
      },
      {
        name: "Automation + AI",
        detail: "A scheduled cron job detects expiring items daily, triggers suggestions, in-app notifications, and email alerts without duplicates. Clarifai handles food image recognition, and a Hugging Face model generates sustainable farming suggestions.",
      },
    ],
    modules: [
      {
        name: "Realtime Chat",
        detail: "Built with REST for message history and Socket.io for live room-based delivery between users and farmers.",
      },
      {
        name: "Analytics Dashboard",
        detail: "Used MongoDB aggregation pipelines to generate daily, monthly, and yearly wastage analytics.",
      },
      {
        name: "Reporting Layer",
        detail: "Added Excel and PDF export functionality so the system can move from dashboard insight to shareable reports.",
      },
    ],
    accent: "cyan",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
