import { Mail, Linkedin, Github, FileText, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden text-center"
    >
      {/* PROFILE IMAGE – PREMIUM GLOW */}
      <div className="relative flex justify-center mt-12 mb-16 md:mt-8">

        {/* Outer Soft Glow */}
        <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-cyan-400/30 blur-[110px] rounded-full"></div>

        {/* Border Ring */}
        <div className="absolute w-52 h-52 md:w-72 md:h-72 rounded-full border-4 border-[#00C8FF] shadow-[0_0_40px_#00C8FF]"></div>

        {/* Main Image */}
        <img
          src="/profile.jpeg"
          alt="Aryan"
          className="relative z-10 object-cover w-52 h-52 md:w-72 md:h-72 rounded-full shadow-[0_0_60px_#00C8FF]"
        />
      </div>

      {/* MAIN HEADING */}
      <h1
        className="mb-10 font-extrabold text-center text-transparent 
                   bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text leading-tight
                   text-[38px] sm:text-[46px] md:text-[58px]"
      >
        Hi, I am Aryan Jadhav
      </h1>

      {/* SUB HEADING */}
      <p className="mt-0 mb-4 text-xl text-gray-300 md:text-2xl -translate-y-1.5">
        Computer Science & Engineering Student
      </p>

      {/* RECTANGLE BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {/* RESUME */}
        <a
          href="/Aryan_Jadhav_Resume.docx"
          download
          className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition min-w-[150px] justify-center"
        >
          <FileText size={20} />
          <span className="font-medium text-white">Resume</span>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/Aryanjadhav31"
          target="_blank"
          className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition min-w-[150px] justify-center"
        >
          <Github size={20} />
          <span className="font-medium text-white">GitHub</span>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/jadhavaryan/"
          target="_blank"
          className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition min-w-[150px] justify-center"
        >
          <Linkedin size={20} />
          <span className="font-medium text-white">LinkedIn</span>
        </a>

        {/* TRYHACKME */}
        <a
          href="https://tryhackme.com/p/jaryanprakash.05"
          target="_blank"
          className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition min-w-[150px] justify-center"
        >
          <Terminal size={22} className="text-[#d0dbdb]" />
          <span className="font-medium text-white">TryHackMe</span>
        </a>
      </div>
    </section>
  );
}
