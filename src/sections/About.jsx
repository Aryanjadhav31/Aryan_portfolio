import { User } from "lucide-react";

export default function About() {
  return (
    <section
      id="profile"
      className="relative w-full min-h-screen px-5 overflow-x-hidden text-center sm:px-6"
    >

      {/* ✅ HORIZONTAL CENTER HEADING */}
      <h3
        className="mx-auto text-[40px] sm:text-[38px] md:text-[42px] font-extrabold text-transparent 
                   bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text leading-tight w-fit"
      >
        <User size={30} className="inline-block mr-3" />
        Profile
      </h3>

      {/* ✅ Spacer to avoid touching box */}
      <div className="mt-16"></div>

      {/* ✅ ABOUT CONTENT BOX */}
      <div
        className="w-full max-w-[400px] sm:max-w-[440px] md:max-w-[820px] bg-[#0F1B2B] 
                   rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(0,120,255,0.15)] border border-white/10 mx-auto"
      >
        {/* ✅ TEXT CONTENT */}
        <div className="space-y-6 text-left text-gray-300 break-words whitespace-normal">

          <p className="text-[17px] sm:text-[18px] leading-relaxed">
            I’m a Computer Science & Engineering student at Rajarambapu Institute of Technology, and technology for me is more than assignments or certificates — it’s something I genuinely enjoy doing. I like building software that feels solid, secure, and actually works when tested in the real world. Backend systems, APIs, databases, and full-stack apps are the areas where I spend most of my time because that’s where ideas turn into working products. Cybersecurity sits right next to development for me. I enjoy learning how systems can be exploited, only so I can learn how to defend them better.
          </p>

          <p className="text-[17px] sm:text-[18px] leading-relaxed">
            When it comes to learning, I don’t just rely on theory. I like working with teams, leading clubs, participating in hackathons, and figuring things out by doing. I’ve always believed that skills grow faster when shared with people who are just as excited to learn. Collaboration teaches patience, communication, responsibility, and how to ship work even when nothing feels perfect in the moment. That mindset has helped me in both tech and life.
          </p>

          <p className="text-[17px] sm:text-[18px] leading-relaxed">
            My creativity runs on cinema — it’s the heart of my life. I connect deeply with movies, whether they're raw love stories capturing messy emotions or high-stakes spy and war thrillers built on strategy. These stories give me an authentic view of reality, from personal emotions to global conflict.
          </p>

        </div>
      </div>

    </section>
  );
}
