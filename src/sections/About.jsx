import { User } from "lucide-react";

export default function About() {
  return (
    <section
      id="profile"
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-5 overflow-x-hidden text-center sm:px-6"
    >

      {/* ✅ Heading placed in real middle area with spacing */}
      <div className="flex items-center justify-center w-full h-[5vh] sm:h-[5vh]">
        <h2 className="text-[34px] sm:text-[38px] md:text-[42px] font-extrabold text-transparent bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
          <User size={20} className="inline-block mr-3" />
          Profile
        </h2>
      </div>

      {/* ✅ Content box will never touch heading */}
      <div
        className="box w-full max-w-[400px] sm:max-w-[440px] md:max-w-[820px] bg-[#0F1B2B] 
                   rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(0,120,255,0.15)] border border-white/10"
      >

        {/* ✅ Proper text wrap + no compression + clean padding */}
        <div className="space-y-6 text-left text-gray-300 sm:space-y-7">

          <p className="text-[15px] sm:text-[16.5px] md:text-[17.5px] leading-relaxed break-words whitespace-normal">
            I’m a Computer Science & Engineering student at Rajarambapu Institute of Technology, and technology for me is more than assignments or certificates — it’s something I genuinely enjoy doing. I like building software that feels solid, secure, and actually works when tested in the real world. Backend systems, APIs, databases, and full-stack apps are the areas where I spend most of my time because that’s where ideas turn into working products. Cybersecurity sits right next to development for me. I enjoy learning how systems can be exploited, only so I can learn how to defend them better.
          </p>

          <p className="text-[15px] sm:text-[16.5px] md:text-[17.5px] leading-relaxed break-words whitespace-normal">
            When it comes to learning, I don’t just rely on theory. I like working with teams, leading clubs, participating in hackathons, and figuring things out by doing. I’ve always believed that skills grow faster when shared with people who are just as excited to learn. Collaboration teaches you patience, communication, responsibility, and honestly — how to ship work even when nothing feels perfect in the moment. That mindset has helped me in both tech and life.
          </p>

          <p className="text-[15px] sm:text-[16.5px] md:text-[17.5px] leading-relaxed break-words whitespace-normal">
            My creativity runs on cinema — it’s the absolute heart of my life. I connect deeply with movies, whether they're raw love stories capturing messy emotions or intense spy and war thrillers built on high-stakes strategy. These stories aren’t just entertainment for me — they show a powerful, authentic look into reality, from personal feelings to worldwide conflict.
          </p>

        </div>
      </div>

    </section>
  );
}
