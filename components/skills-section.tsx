import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Prisma ORM", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML", level: 95 },
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-card rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <Badge variant="outline">{skill.level}%</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/skills">
            <Button variant="outline" className="group">
              View all skills
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
