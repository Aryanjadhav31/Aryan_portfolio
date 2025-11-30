import { Brain, ShieldCheck, Coffee, Cloud, Database, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      name: "AI for Future Workforce – Intro to AI & Applied NLP",
      organization: "Intel • Dell • RIT",
      disambiguation: "certificate files",
      icon: Brain,
      live: "applied_ai.png",
    },
    {
      name: "Cybersecurity Virtual Internship",
      organization: "Palo Alto Networks • AICTE • EduSkills",
      disambiguation: "certificate files",
      icon: ShieldCheck,
      live: "palo_alto cybersecurity_internship.pdf",
    },
    {
      name: "Programming with Java",
      organization: "Amazon • Coursera",
      disambiguation: "certificate files",
      icon: Coffee,
      live: "Coursera java p[rograming.pdf",
    },
    {
      name: "Zero Trust Cloud Security Virtual Internship",
      organization: "Zscaler",
      disambiguation: "certificate files",
      icon: Cloud,
      live: "colud security zscaler.pdf",
    },
    {
      name: "Database Management Systems – NPTEL",
      organization: "IIT • NPTEL",
      disambiguation: "certificate files",
      icon: Database,
      live: "DBMS_NPTEL_Certificate.pdf",
    },
  ];

  return (
    <section id="certifications">

      {/* SECTION HEADING */}
      <h2 className="mb-10 text-4xl font-bold text-center text-transparent bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
        Certifications
      </h2>

      {/* CERT GRID */}
      <div className="w-full space-y-3">
        {certs.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={i}
              className="w-full bg-[#0F1B2B] rounded-xl p-5 shadow-lg border border-white/10 flex justify-between items-center"
            >

              {/* LEFT SIDE */}
              <div className="flex items-center gap-3 text-left max-w-[80%]">
                <div className="p-2 border rounded-lg bg-white/5 border-white/10">
                  <Icon size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-white">{c.name}</h3>
                  <p className="text-[13px] text-gray-300 mt-1 line-clamp-2">{c.organization}</p>
                </div>
              </div>

              {/* VIEW BUTTON */}
              <a
                href={c.live}
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
