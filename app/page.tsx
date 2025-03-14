import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download } from "lucide-react";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <section id="about" className="py-16 bg-muted/50 dark:bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Fitsum Tafese"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                About Me
              </h2>
              <p className="text-muted-foreground mb-4">
                I'm a passionate Full-Stack Web Developer with several years of
                experience in building scalable and performant web applications.
                I specialize in modern JavaScript frameworks and libraries, with
                a focus on creating intuitive user experiences backed by robust
                server-side implementations.
              </p>
              <p className="text-muted-foreground mb-6">
                As a freelance developer, I've worked with clients across
                various industries, helping them transform their ideas into
                functional, beautiful web applications. My approach combines
                technical expertise with a deep understanding of user needs and
                business goals.
              </p>
              <Link href="/about">
                <Button variant="outline" className="group">
                  Learn more about me
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Interested in working together?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time
            opportunities. Let's build something amazing together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects">
              <Button variant="secondary" size="lg">
                View My Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Me
              </Button>
            </Link>
            <Link href="/resume">
              <Button
                variant="outline"
                size="lg"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
