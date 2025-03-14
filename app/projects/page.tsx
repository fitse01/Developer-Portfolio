import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "MySQL",
        "Prisma ORM",
        "Stripe",
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website template for developers and designers to showcase their work.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blog platform with markdown support, categories, and user authentication.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Next.js", "Prisma", "MySQL", "NextAuth.js"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/example/project",
    },
  ];

  return (
    <main className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Projects Showcase
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents different skills and technologies I've mastered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
