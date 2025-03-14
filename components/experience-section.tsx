import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Leading development of enterprise web applications using React, Next.js, and Node.js. Improved application performance by 40% through code optimization and implementing modern best practices.",
      achievements: [
        "Launched 5 major features with zero downtime",
        "Mentored junior developers",
      ],
      technologies: ["React", "Next.js", "Node.js", "MySQL", "Prisma"],
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client websites and web applications. Collaborated with design and product teams to deliver high-quality solutions.",
      achievements: [
        "Reduced page load time by 60%",
        "Implemented CI/CD pipeline",
      ],
      technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-muted/50 dark:bg-muted/20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Work Experience
        </h2>

        <div className="space-y-6 mb-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-muted-foreground">
                      {exp.company} | {exp.period}
                    </p>
                  </div>
                </div>
                <p className="mb-4">{exp.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/experience">
            <Button variant="outline" className="group">
              View full experience
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
