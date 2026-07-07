import Image from "next/image";
import { Navbar, Hero, About, TechStack, Projects, Contact, Footer } from '@/app/pages'
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <>
        <Navbar />
        
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="techstack">
          <TechStack />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
    </>
  );
}
