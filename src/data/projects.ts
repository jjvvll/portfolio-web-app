import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "chat_app",
    number: "01",
    title: "Chat App",
    category: "Messaging",
    videoUrl: "/videos/chat_app.mp4",
    videoUrlAlt: "Chat App Demo Video",
    techStack: ["Laravel", "Livewire", "PHP", "Tailwind CSS", "MySQL"],
    role: "Developer",
    outcome:
      "Chat application with messenger-style functionality, including user authentication, profile photo updates, real-time messaging with typing indicators, message reactions, replies, and forwarding. ",
    reversed: false,
  },
  {
    id: "gym_app",
    number: "02",
    title: "Gym Workout App",
    category: "Fitness",
    videoUrl: "/videos/gym_app.mp4",
    videoUrlAlt: "Gym workout App Demo Video",
    techStack: [
      "React",
      "TypeScript",
      "Laravel REST API",
      "Axios",
      "Tailwind CSS",
      "MySQL",
      "Local LLM (Hosted via Ollama)",
    ],
    role: "Developer",
    outcome:
      "Built a full-stack workout tracking application using Laravel and React with user authentication and isolated data per user. Implemented dynamic exercise management, rest timer functionality, and an AI-powered workout generator using a locally hosted model. Currently expanding the system to support historical progress tracking.",
    reversed: true,
  },
  {
    id: "job_board",
    number: "03",
    title: "Job Board",
    category: "Job Portal",
    videoUrl: "/videos/job_board.mp4",
    videoUrlAlt: "Job Board Demo Video",
    techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    role: "Developer",
    outcome:
      "Responsive job board with authentication, job posting, applications, email notifications, and real-time updates via broadcasting.",
    reversed: false,
  },
  {
    id: "book_review",
    number: "04",
    title: "Book Review",
    category: "Reviews",
    videoUrl: "/videos/book_review.mp4",
    videoUrlAlt: "Book Review Demo Video",
    techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    role: "Developer",
    outcome:
      "Book review platform with Laravel and PHP, allowing users to submit and read reviews progress for historical tracking. ",
    reversed: true,
  },
];
