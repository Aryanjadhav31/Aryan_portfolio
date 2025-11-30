export default function Skills() {
  return (
    
    <section id="skills" className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center w-full max-w-[100vw] overflow-x-hidden">


      {/* HEADING */}
      <h2 className="mb-10 text-4xl font-bold text-center text-transparent bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
        Technical Skills
      </h2>

      {/* GRID - 6 PERFECT BOXES */}
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* Programming */}
        <div className="p-6 bg-[#0f1b2b] rounded-2xl shadow-xl border border-white/10 h-full">
          <h3 className="text-xl font-semibold text-white">Programming</h3>
          <p className="mt-2 text-gray-300">C++, Python, Java</p>
        </div>

        {/* Development */}
        <div className="p-6 bg-[#0f1b2b] rounded-2xl shadow-xl border border-white/10 h-full">
          <h3 className="text-xl font-semibold text-white">Web Development</h3>
          <p className="mt-2 text-gray-300">
            HTML, CSS, JavaScript, React, Express.js
          </p>
        </div>

        {/* Databases */}
        <div className="p-6 bg-[#0f1b2b] rounded-2xl shadow-xl border border-white/10  h-full">
          <h3 className="text-xl font-semibold text-white">Databases</h3>
          <p className="mt-2 text-gray-300">MySQL, MongoDB</p>
        </div>

        {/* OS & Networking */}
        <div className="p-6 bg-[#0f1b2b] rounded-2xl shadow-xl border border-white/10 h-full">
          <h3 className="text-xl font-semibold text-white">OS & Networking</h3>
          <p className="mt-2 text-gray-300">
            Operating Systems, Linux, Computer Networks, TCP/IP
          </p>
        </div>

        {/* Cybersecurity */}
        <div className="p-6 bg-[#0f1b2b] rounded-2xl shadow-xl border border-white/10 h-full">
          <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
          <p className="mt-2 text-gray-300">
            Ethical Hacking, Vulnerability Analysis, Network Security,<br />
           
          </p>
        </div>

        {/* AI Skills */}
        <div className="p-6 bg-[#0f1b2b] rounded-2xl shadow-xl border border-white/10 h-full">
          <h3 className="text-xl font-semibold text-white">Artificial Intelligence</h3>
          <p className="mt-2 text-gray-300">
            Machine Learning, NLP, Neural Networks,  
            Data Processing, 
          </p>
        </div>

      </div>
    </section>
  );
}
