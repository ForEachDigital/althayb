import Hero from "./components/Hero";
import About from "./components/About";
import Goals from "./components/Goals";
import Stats from "./components/Stats";
import Partners from "./components/Partners";
import SiteFooter from "./components/SiteFooter";
import Projects from "@/app/[locale]/components/Projects";



export default function Home() {
  return (
      <main className="scroll-smooth">

        <Hero />
        <About />
        <Goals />
        <Stats />
        <Projects />
        <Partners />
        <SiteFooter />
      </main>
  );
}
