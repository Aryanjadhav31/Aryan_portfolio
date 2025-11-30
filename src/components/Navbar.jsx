import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-10 flex justify-between items-center 
    bg-[#071625]/90 backdrop-blur-xl shadow-lg fixed top-0 left-0 z-50">

      {/* LOGO */}
      <h1 className="text-2xl font-bold text-blue-400">Aryan Jyotiprakash</h1>

      {/* DESKTOP NAV */}
      <div className="items-center hidden gap-6 md:flex">
        <a href="#profile" className="text-gray-300 hover:text-blue-400">Profile</a>
        <a href="#projects" className="text-gray-300 hover:text-blue-400">Projects</a>
        <a href="#experience" className="text-gray-300 hover:text-blue-400">Experience</a>
        <a href="#skills" className="text-gray-300 hover:text-blue-400">Skills</a>
        <a href="#education" className="text-gray-300 hover:text-blue-400">Education</a>
        <a href="#certifications" className="text-gray-300 hover:text-blue-400">Certifications</a>
      </div>

      {/* MOBILE BUTTON */}
      <button className="text-gray-300 md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#071625]/95 backdrop-blur-xl 
        flex flex-col items-start gap-4 p-6 md:hidden border-t border-white/10">
          <a onClick={() => setOpen(false)} href="#profile" className="text-gray-300 hover:text-blue-400">Profile</a>
          <a onClick={() => setOpen(false)} href="#projects" className="text-gray-300 hover:text-blue-400">Projects</a>
          <a onClick={() => setOpen(false)} href="#experience" className="text-gray-300 hover:text-blue-400">Experience</a>
          <a onClick={() => setOpen(false)} href="#skills" className="text-gray-300 hover:text-blue-400">Skills</a>
          <a onClick={() => setOpen(false)} href="#education" className="text-gray-300 hover:text-blue-400">Education</a>
          <a onClick={() => setOpen(false)} href="#certifications" className="text-gray-300 hover:text-blue-400">Certifications</a>
        </div>
      )}
    </nav>
  );
}
