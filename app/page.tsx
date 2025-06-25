import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import FloatingDots from "@/components/floating-dots"



export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background relative">
      <FloatingDots />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
