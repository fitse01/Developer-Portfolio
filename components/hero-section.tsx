import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background dark:from-primary/10 dark:via-background dark:to-background -z-10"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 -z-10">
        <div className="absolute h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl -top-40 -left-40 animate-blob animation-delay-2000"></div>
        <div className="absolute h-[25rem] w-[25rem] rounded-full bg-secondary/20 blur-3xl top-40 right-10 animate-blob animation-delay-4000"></div>
        <div className="absolute h-[20rem] w-[20rem] rounded-full bg-accent/20 blur-3xl bottom-10 left-20 animate-blob"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Fitsum Tafese
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground">
              Full-Stack Web Developer
            </p>
            <p className="max-w-[42rem] text-muted-foreground mx-auto">
              Building scalable web applications with React, Next.js, and
              Node.js
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-full">
                View My Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
