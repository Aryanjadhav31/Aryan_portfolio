
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />             {/* id = hero */}
      <About />            {/* id = profile */}
      <Projects />         {/* id = projects */}
      <Experience />       {/* id = experience */}
      <Skills />           {/* id = skills */}
      <Education />        {/* id = education */}
      <Certifications />   {/* id = certifications */}

      <Footer />
    </>
  );
}

