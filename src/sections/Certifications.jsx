import { Brain, ShieldCheck, Coffee, Cloud, Database, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      name: "AI for Future Workforce – Intro to AI & Applied NLP",
      org: "Intel • Dell • RIT (2024 & 2025)",
      file: "public/applied_ai.png",
      icon: Brain,
    },
    {
      name: "Cybersecurity Virtual Internship",
      org: "Palo Alto Networks • AICTE • EduSkills (2024)",
      file: "public/palo_alto cybersecurity_internship.pdf",
      icon: ShieldCheck,
    },
    {
      name: "Programming with Java",
      org: "Amazon • Coursera (2025)",
      file: "public/Coursera java p[rograming.pdf",
      icon: Coffee,
    },
    {
      name: "Zero Trust Cloud Security Virtual Internship",
      org: "Zscaler (2025)",
      file: "public/colud security zscaler.pdf",
      icon: Cloud,
    },
    {
      name: "Database Management Systems – NPTEL",
      org: "IIT • NPTEL (2025)",
      file: "public/DBMS_NPTEL_Certificate.pdf",
      icon: Database,
    },
  ];

  return (
    <section id="certifications">

      <h2 className="mb-10 text-4xl font-bold text-center text-transparent bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
        Certifications
      </h2>

      <div className="w-full space-y-3">
        {certs.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={i}
              className="w-full bg-[#0F1B2B] rounded-xl p-5 shadow-lg border border-white/10 flex justify-between items-center"
            >
              <div className="flex items-center gap-3 text-left max-w-[80%]">
                <div className="p-2 border rounded-lg bg-white/5 border-white/10">
                  <Icon size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white">{c.name}</h3>
                  <p className="text-[13px] text-gray-300 mt-1 line-clamp-2">{c.org}</p>
                </div>
              </div>

              <a
                href={c.file}
                target="_blank"
                className="flex items-center gap-1 text-[13px] text-blue-400 hover:underline font-medium whitespace-nowrap"
              >
                <ExternalLink size={16} /> View
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
