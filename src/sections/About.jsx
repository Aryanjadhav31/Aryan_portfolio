import { User } from "lucide-react";

export default function About() {
  return (
    <section id="profile" className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center w-full max-w-[100vw] overflow-x-hidden">

      {/* SECTION HEADING */}
      <h2
        className="mb-10 text-3xl sm:text-[34px] md:text-[42px] font-bold text-center text-transparent 
                   bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text leading-tight"
      >
        <User size={26} className="inline-block mr-2 sm:mr-3" />
        Profile
      </h2>

      {/* ABOUT BOX */}
      <div
        className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-full bg-[#0F1B2B] 
                   rounded-2xl p-6 md:p-8 shadow-xl border border-white/10 mx-auto"
      >

        {/* BIO TEXT */}
        <div className="space-y-6 text-left text-gray-300 sm:space-y-7">

          <p className="text-base sm:text-lg md:text-[17px] leading-relaxed wrap-break-word">
          I’m a Computer Science & Engineering student at Rajarambapu Institute of Technology, and technology for me is more than assignments or certificates it’s something I genuinely enjoy doing. I like building software that feels solid, secure, and actually works when tested in the real world. Backend systems, APIs, databases, and full-stack apps are the areas where I spend most of my time because that’s where ideas turn into working products. Cybersecurity sits right next to development for me. I enjoy learning how systems can be exploited, only so I can learn how to defend them better.          </p>

          <p className="text-base sm:text-lg md:text-[17px] leading-relaxed wrap-break-word">
          When it comes to learning, I don’t just rely on theory. I like working with teams, leading clubs, participating in hackathons, and figuring things out by doing. I’ve always believed that skills grow faster when shared with people who are just as excited to learn. Collaboration teaches you patience, communication, responsibility, and honestly, how to ship work even when nothing feels perfect in the moment. That mindset has helped me in both tech and life.</p>
          <p className="text-base sm:text-lg md:text-[17px] leading-relaxed wrap-break-word">
        My creativity runs on cinema, it's the absolute heart of my life. I connect deeply with movies, whether they're raw love stories that capture messy, complex emotions or intense spy thrillers and war films built on high-stakes strategy. For me, these stories aren't just entertainment; they offer an authentic, powerful look into reality, from the most intimate feelings to global conflict.
          </p>
          

        </div>
      </div>

    </section>
  );
}
