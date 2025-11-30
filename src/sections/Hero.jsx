import { Mail, Linkedin, Github, FileText, Terminal } from "lucide-react";
import logo from "/logo.png";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 text-center">

      

      {/* ✅ PROFILE IMAGE optimized + BIG on mobile */}
      <div className="relative flex justify-center mt-6 mb-14">
        <div className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-cyan-500/25 blur-[90px] rounded-full"></div>
        <div className="absolute w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 border-4 border-cyan-400 shadow-[0_0_35px_rgba(0,200,255,0.5)] rounded-full"></div>
        <img
          src="/profile.jpeg"
          alt="Aryan"
          className="relative z-10 object-cover 
                     w-56 h-56 sm:w-64 sm:h-64  /* 📱 BIGGER on mobile */
                     md:w-72 md:h-72  /* 💻 unchanged larger screens */
                     rounded-full shadow-[0_0_40px_rgba(0,200,255,0.3)]"
        />
      </div>

      {/* MAIN HEADING */}
      <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[56px] lg:text-[70px] text-transparent bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text leading-tight">
        Hi, I am Aryan Jadhav
      </h1>

      {/* SUB HEADING */}
      <p className="text-[16px] sm:text-[18px] md:text-[24px] text-gray-300 mt-2 mb-8">
        Computer Science & Engineering Student
      </p>

      {/* ✅ BUTTONS optimized for screen */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-4 w-full
                      max-[768px]:flex-col max-[768px]:gap-4 max-[768px]:w-full">

        <a href="/Aryan_Jadhav_Resume.docx" download
           className="flex items-center justify-center gap-2 px-5 py-4 text-sm sm:text-base md:text-lg bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition text-white max-[768px]:w-[80%]">
          <FileText size={18} />
          <span>Resume</span>
        </a>

        <a href="https://github.com/Aryanjadhav31" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-center gap-2 px-5 py-4 text-sm sm:text-base md:text-lg bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition text-white max-[768px]:w-[80%]">
          <Github size={18} />
          <span>GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/jadhavaryan/" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-center gap-2 px-5 py-4 text-sm sm:text-base md:text-lg bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition text-white max-[768px]:w-[80%]">
          <Linkedin size={15} />
          <span>LinkedIn</span>
        </a>

        <a href="https://tryhackme.com/p/jaryanprakash.05" target="_blank" rel="noopener noreferrer"
           className="flex items-center justify-center gap-2 px-5 py-4 text-sm sm:text-base md:text-lg bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition text-white max-[768px]:w-[80%]">
          <Terminal size={18} />
          <span>TryHackMe</span>
        </a>

      </div>

    </section>
  );
}
