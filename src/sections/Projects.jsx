import {
  Code,
  Cpu,
  Bot,
  Github,
  ExternalLink,
  Server,
  Brain,
  Plus,
} from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const initialProjects = [
    {
      title: "Employee Task Management System",
      subtitle: "Full-Stack • RBAC • Productivity",
      description:
        "A full-stack employee task manager with secure role-based access, task tracking, and real-time updates.",
      tags: ["Full-Stack", "RBAC", "Node.js", "Express", "MongoDB"],
      live: "https://project1-neon-two.vercel.app/login",
      github: "https://github.com/Aryanjadhav31/Employee-Management-System",
      icon: Server,
    },

    {
      title: "Anti-Sleep Device for Drivers",
      subtitle: "IoT • Embedded Systems • Safety",
      description:
        "IoT-based drowsiness detection device using heartbeat + GSR sensors with instant buzzer alerts.",
      tags: ["IoT", "Embedded C", "Sensors", "GSR", "Safety"],
      live: "https://youtu.be/7m-och_n2G0?si=31MzQUNYFQpHPYzK",
      icon: Cpu,
    },

    {
      title: "Password Strength Checker",
      subtitle: "Hacker Theme • UI • Security",
      description:
        "A hacker-themed password strength checker that evaluates password strength as Weak, Medium, or Strong with a neon green glow UI, gives suggestions to improve security, and includes password visibility toggle.",
      tags: ["Security", "JavaScript", "UI/UX", "Frontend"],
      live: "#",
      github: "https://github.com/Aryanjadhav31/Password_strength_checker",
      icon: Bot,
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [showForm, setShowForm] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    tags: "",
    live: "",
    github: "",
  });

  const correctPassword = "aryan123"; // YOU CAN CHANGE THIS

  const handleAddProject = () => {
    if (password !== correctPassword) {
      alert("Incorrect Password ❌");
      return;
    }

    const newProject = {
      ...formData,
      tags: formData.tags.split(",").map((t) => t.trim()),
      icon: Code,
    };

    setProjects([...projects, newProject]);
    setShowForm(false);
    setPassword("");
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      tags: "",
      live: "",
      github: "",
    });
  };

  const handleRemoveProject = (index) => {
    const pass = prompt("Enter password to remove project:");
    if (pass !== correctPassword) {
      alert("Wrong Password! ❌ Project not deleted.");
      return;
    }

    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <section id="projects" className="px-6 py-20 md:px-20">

      <h2 className="mb-10 text-4xl font-bold text-center text-transparent bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
        Projects
      </h2>

      {/* GRID 2 PER ROW */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, index) => {
          const Icon = p.icon;

          return (
            <div
              key={index}
              className="p-6 bg-[#0F1B2B] rounded-2xl shadow-xl border border-white/10 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 border rounded-xl bg-blue-500/20 border-blue-500/30">
                  <Icon size={26} className="text-blue-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-blue-300">{p.subtitle}</p>
                </div>
              </div>

              <p className="mt-2 leading-relaxed text-gray-300">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm text-blue-400 border rounded-full bg-blue-500/20 border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6">
                <a
                  href={p.live}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition border rounded-lg bg-white/10 border-white/20 hover:bg-white/20"
                >
                  <Github size={18} /> Code
                </a>

                {/* REMOVE BUTTON WITH PASSWORD */}
                <button
                  onClick={() => handleRemoveProject(index)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition bg-red-500 rounded-lg hover:bg-red-600"
                >
                  <Brain size={16} /> Remove
                </button>
              </div>

            </div>
          );
        })}

        {/* ADD PROJECT BOX */}
        <div
          onClick={() => setShowForm(true)}
          className="flex flex-col items-center justify-center gap-3 p-8 cursor-pointer bg-[#0F1B2B] rounded-2xl border border-white/10 shadow-xl hover:bg-blue-500/10 transition"
        >
          <div className="p-4 border rounded-full bg-blue-500/20 border-blue-500/30">
            <Plus size={36} className="text-blue-400" />
          </div>
          <p className="text-xl font-semibold text-white">Add Project</p>
          <p className="text-sm text-blue-300 opacity-80">Password Protected</p>
        </div>

      </div>

      {/* POPUP FORM */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-lg p-6 bg-[#f5f7fa] text-gray-900 rounded-2xl shadow-2xl border border-gray-300">

            <h3 className="mb-4 text-2xl font-semibold">Add New Project</h3>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="text"
              placeholder="Project Title"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Subtitle"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.target.value })
              }
            />

            <textarea
              placeholder="Description"
              rows="3"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>

            <input
              type="text"
              placeholder="Tags (comma separated)"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Live Link"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              value={formData.live}
              onChange={(e) =>
                setFormData({ ...formData, live: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="GitHub Link"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              value={formData.github}
              onChange={(e) =>
                setFormData({ ...formData, github: e.target.value })
              }
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-white transition bg-red-500 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>

              <button
                onClick={handleAddProject}
                className="px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Add Project
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
