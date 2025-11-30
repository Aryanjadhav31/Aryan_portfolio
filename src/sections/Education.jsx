export default function Education() {
  return (
    <section id="education" className="px-5 py-16 sm:px-6 md:px-20">

      {/* SECTION HEADING */}
      <h2 className="mb-8 text-3xl font-bold text-center text-transparent sm:text-4xl md:text-4xl bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
        Education
      </h2>

      <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:items-stretch">

        {/* BTECH */}
        <div className="w-full max-w-[420px] md:max-w-full bg-[#0F1B2B] rounded-xl p-6 md:p-8 shadow-lg border border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-2xl">
              B.Tech in Computer Science & Engineering
            </h3>
            <p className="mt-2 text-sm text-blue-300 sm:text-base md:text-base">
              Rajarambapu Institute of Technology (RIT), Islampur
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm text-blue-300 sm:text-base md:text-base">
              2023 – Present
            </p>
            <p className="mt-2 text-lg font-bold text-blue-400 sm:text-xl md:text-xl">
              CGPA: 8.32
            </p>
          </div>
        </div>

        {/* HSC */}
        <div className="w-full max-w-[420px] md:max-w-full bg-[#0F1B2B] rounded-xl p-6 md:p-8 shadow-lg border border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mt-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-2xl">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="mt-2 text-sm text-blue-300 sm:text-base md:text-base">
              Manere Jrcollege Ichalkaranji, Kolhapur
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm text-blue-300 sm:text-base md:text-base">
              2022 – 2023
            </p>
            <p className="mt-2 text-lg font-bold text-blue-300 sm:text-xl md:text-xl">
              70.81%
            </p>
          </div>
        </div>

        {/* SSC */}
        <div className="w-full max-w-[420px] md:max-w-full bg-[#0F1B2B] rounded-xl p-6 md:p-8 shadow-lg border border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mt-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-2xl">
              Secondary School Certificate (SSC)
            </h3>
            <p className="mt-2 text-sm text-blue-300 sm:text-base md:text-base">
              Aadersh Balakmandir Highschool, Islampur
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm text-blue-300 sm:text-base md:text-base">
              2020 – 2021
            </p>
            <p className="mt-2 text-lg font-bold text-blue-300 sm:text-xl md:text-xl">
              92.46%
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
