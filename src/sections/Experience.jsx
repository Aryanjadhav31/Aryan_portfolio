export default function Experience() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-6 md:px-20">

      {/* SECTION HEADING */}
      <h2 className="mb-8 text-3xl font-bold text-center text-transparent sm:text-4xl md:text-4xl bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
        Experience
      </h2>

      <div className="flex flex-col items-center space-y-6 md:space-y-8 md:items-stretch">

        {/* EXPERIENCE BOX 1 */}
        <div className="w-full max-w-[420px] md:max-w-full bg-[#0F1B2B] rounded-xl p-6 md:p-8 shadow-lg border border-white/10">
          
          <div className="flex flex-col gap-1 text-center md:flex-row md:justify-between md:items-start md:text-left">
            <h3 className="text-lg font-semibold text-white sm:text-xl md:text-xl">
              Vice President – CryptX Club
            </h3>
            <p className="text-sm text-gray-300 sm:text-base md:text-base">
              2025 – Present
            </p>
          </div>

          <p className="mt-1 text-sm text-center text-blue-300 sm:text-base md:text-base md:text-left">
            Rajarambapu Institute of Technology
          </p>

          <ul className="pl-0 mt-4 space-y-3 text-sm text-center text-gray-300 list-disc md:pl-5 sm:text-base md:text-base md:list-disc md:text-left">
            <li className="list-none md:list-disc">Cybersecurity, ethical hacking, and cryptography.</li>
            <li className="list-none md:list-disc">Hands-on sessions & real-world security practices.</li>
          </ul>

        </div>

        {/* EXPERIENCE BOX 2 */}
        <div className="w-full max-w-[420px] md:max-w-full bg-[#0F1B2B] rounded-xl p-6 md:p-8 shadow-lg border border-white/10">
          
          <div className="flex flex-col gap-1 text-center md:flex-row md:justify-between md:items-start md:text-left">
            <h3 className="text-lg font-semibold text-white sm:text-xl md:text-xl">
              Cybersecurity Virtual Intern
            </h3>
            <p className="text-sm text-gray-300 sm:text-base md:text-base">
              Jul – Sep 2024
            </p>
          </div>

          <p className="mt-1 text-sm text-center text-blue-300 sm:text-base md:text-base md:text-left">
            Palo Alto Networks | AICTE | EduSkills
          </p>

          <ul className="pl-0 mt-4 space-y-3 text-sm text-center text-gray-300 list-disc md:pl-5 sm:text-base md:text-base md:list-disc md:text-left">
            <li className="list-none md:list-disc">Zero Trust, threat prevention, cloud security.</li>
            <li className="list-none md:list-disc">SIEM tools, endpoint protection & network defense.</li>
          </ul>

        </div>

      </div>

    </section>
  );
}
