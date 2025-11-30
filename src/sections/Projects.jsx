import { Code, Cpu, Bot, Github, ExternalLink, Server, Brain, ShieldCheck, Coffee, Cloud, Database, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const initialProjects = [
    {
      title: "Employee Task Management System",
      subtitle: "Full-Stack • RBAC • Productivity",
      description:
        "A full-stack employee task manager with secure role-based access, task tracking, and real-time updates.",
      tags: ["Full-Stack", "RBAC", "Vite React", "Node.js", "Express", "MongoDB"],
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
        "Hacker-themed password strength checker with suggestions and visibility toggle.",
      tags: ["Security", "JavaScript", "UI/UX", "Frontend"],
      live: "#",
      github: "https://github.com/Aryanjadhav31/Password_strength_checker",
      icon: ShieldCheck,
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    tags: "",
    live: "",
    github: "",
  });

  const correctPassword = "aryan123";

  const handleAddProject = () => {
    if (password !== correctPassword) {
      alert("Incorrect Password ❌");
      return;
    }

    const newProject = {
      title: formData.title,
      subtitle: formData.subtitle,
      description: formData.description,
      tags: formData.tags.split(",").map((t) => t.trim()),
      live: formData.live,
      github: formData.github,
      icon: Code,
    };

    setProjects([...projects, newProject]);
    setShowAddForm(false);
    setPassword("");
    setFormData({ title: "", subtitle: "", description: "", tags: "", live: "", github: "" });
  };

  const handleDeleteRequest = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
    setPassword("");
  };

  const handleDeleteProject = () => {
    if (password !== correctPassword) {
      alert("Incorrect Password ❌");
      return;
    }

    setProjects(projects.filter((_, i) => i !== deleteIndex));
    setShowDeleteModal(false);
  };

  return (
    <section id="projects" className="w-full px-5 py-16 sm:px-6 md:px-20 mb-14">
      <h2 className="mb-10 text-4xl font-bold text-center text-transparent bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
        Projects
      </h2>

      {/* GRID 2 PER ROW ON ALL BIG SCREENS - 1 ON SMALL */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((p, index) => {
          const Icon = p.icon;
          return (
            <div
              key={index}
              className="w-full max-w-[400px] sm:max-w-[420px] md:max-w-full bg-[#0F1B2B] rounded-2xl p-6 shadow-xl border border-white/10 mx-auto md:mx-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 border rounded-xl bg-blue-500/20 border-blue-500/30">
                  <Icon size={26} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-[22px] md:text-xl">{p.title}</h3>
                  <p className="text-sm text-blue-300 sm:text-[14px]">{p.subtitle}</p>
                </div>
              </div>
              <p className="mt-3 text-gray-300 leading-relaxed sm:text-[15px] md:text-gray-300">{p.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4 sm:justify-start">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm sm:text-[12px] text-blue-400 border rounded-full bg-blue-500/20 border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:justify-start md:gap-5">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-white transition border rounded-lg bg-white/10 border-white/20 hover:bg-white/20"
                  >
                    <Github size={18}/> Code
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    <ExternalLink size={16}/> Live Demo
                  </a>
                )}
                <button
                  onClick={() => handleDeleteRequest(index)}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white transition border rounded-lg sm:gap-2 border-white/20 bg-white/10 hover:bg-white/20"
                >
                  <Trash2 size={16}/> Delete
                </button>
              </div>
            </div>
          );
        })}

        {/* ADD PROJECT CARD */}
        <div
          onClick={() => setShowAddForm(true)}
          className="w-full max-w-[400px] sm:max-w-[420px] flex flex-col items-center justify-center gap-2 p-7 cursor-pointer bg-[#0F1B2B] rounded-2xl border border-white/10 shadow-xl hover:bg-white/5 transition mx-auto"
        >
          <div className="p-4 border rounded-full bg-blue-500/20 border-blue-500/30">
            <Plus size={36} className="text-blue-400" />
          </div>
          <p className="text-xl font-semibold text-white">Add Project</p>
          <p className="text-sm text-blue-300 opacity-80">Password Protected</p>
        </div>
      </div>

      {/* ADD FORM MODAL */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-[420px] md:max-w-lg bg-[#0F1B2B] rounded-2xl p-6 shadow-2xl border border-white/20">
            <h3 className="mb-4 text-2xl font-semibold text-center text-white">Add New Project</h3>
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
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Subtitle"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              rows="3"
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            ></textarea>
            <input
              type="text"
              placeholder="Tags (comma separated)"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            />
            <input
              type="text"
              placeholder="Live Link"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              onChange={(e) => setFormData({ ...formData, live: e.target.value })}
            />
            <input
              type="text"
              placeholder="GitHub Link"
              className="w-full p-3 mb-3 text-gray-800 bg-white border border-gray-300 rounded-lg"
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
            />
            <div className="flex justify-between gap-3 mt-4">
              <button
                onClick={() => setShowAddForm(false)}
                className="w-1/2 p-2 text-white transition border rounded-lg sm:p-3 border-white/20 bg-white/10 hover:bg-white/20"
              >
                Cancel
              </button>

              <button
                onClick={handleAddProject}
                className="w-1/2 p-2 text-white transition bg-blue-600 rounded-lg sm:p-3 hover:bg-blue-700"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-[420px] sm:max-w-md md:max-w-lg bg-[#0F1B2B] rounded-xl p-6 shadow-xl border border-white/20">
            <h3 className="mb-3 text-xl font-bold text-center text-white">Delete Project?</h3>
            
            <input
              type="password"
              placeholder="Enter password to delete"
              className="w-full p-3 mb-4 text-gray-800 bg-white border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-1/2 p-2 text-white transition border rounded-lg sm:p-3 border-white/20 bg-white/10 hover:bg-white/20"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteProject}
                className="w-1/2 p-2 text-white transition bg-red-600 rounded-lg sm:p-3 hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
