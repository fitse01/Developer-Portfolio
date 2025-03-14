import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="py-16">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Resume</h1>
            <p className="text-muted-foreground">
              My professional experience, education, and skills
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Fitsum Tafese</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Email: fitsum.tafese@example.com
                  </p>
                  <p className="text-muted-foreground">Phone: +123 456 7890</p>
                  <p className="text-muted-foreground">
                    Location: Addis Ababa, Ethiopia
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Online Presence</h3>
                  <p className="text-muted-foreground">
                    Website: fitsumtafese.com
                  </p>
                  <p className="text-muted-foreground">
                    GitHub: github.com/fitsumtafese
                  </p>
                  <p className="text-muted-foreground">
                    LinkedIn: linkedin.com/in/fitsumtafese
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>Professional Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Full-Stack Web Developer with several years of experience in
                building scalable and performant web applications. Specialized
                in React, Next.js, Node.js, and database technologies.
                Passionate about creating intuitive user experiences and writing
                clean, maintainable code. Proven track record of delivering
                high-quality solutions that meet business requirements and
                exceed client expectations.
              </p>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span>Work Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Senior Full-Stack Developer
                    </h3>
                    <p className="text-muted-foreground">
                      Tech Innovations Inc.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    2021 - Present
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>
                    Led development of enterprise web applications using React,
                    Next.js, and Node.js
                  </li>
                  <li>
                    Improved application performance by 40% through code
                    optimization and implementing modern best practices
                  </li>
                  <li>Launched 5 major features with zero downtime</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Full-Stack Developer
                    </h3>
                    <p className="text-muted-foreground">
                      Digital Solutions Ltd.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">2019 - 2021</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>
                    Developed and maintained multiple client websites and web
                    applications
                  </li>
                  <li>
                    Collaborated with design and product teams to deliver
                    high-quality solutions
                  </li>
                  <li>
                    Reduced page load time by 60% through optimization
                    techniques
                  </li>
                  <li>
                    Implemented CI/CD pipeline for streamlined deployments
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Web Developer</h3>
                    <p className="text-muted-foreground">Creative Web Agency</p>
                  </div>
                  <p className="text-sm text-muted-foreground">2017 - 2019</p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>
                    Built responsive websites for clients across various
                    industries
                  </li>
                  <li>
                    Implemented front-end designs using HTML, CSS, and
                    JavaScript
                  </li>
                  <li>
                    Integrated content management systems for client websites
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span>Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-muted-foreground">
                      Addis Ababa University
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">2013 - 2017</p>
                </div>
                <p className="text-muted-foreground">
                  Graduated with honors. Specialized in software engineering and
                  web development.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Redux</Badge>
                    <Badge>Framer Motion</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Express.js</Badge>
                    <Badge>REST API</Badge>
                    <Badge>GraphQL</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Prisma ORM</Badge>
                    <Badge>Firebase</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Tools & Others</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Docker</Badge>
                    <Badge>CI/CD</Badge>
                    <Badge>Jest</Badge>
                    <Badge>Cypress</Badge>
                    <Badge>Figma</Badge>
                    <Badge>Agile/Scrum</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">
                  AWS Certified Developer - Associate
                </h3>
                <p className="text-sm text-muted-foreground">
                  Amazon Web Services, 2022
                </p>
              </div>
              <div>
                <h3 className="font-medium">
                  Professional Web Developer Certification
                </h3>
                <p className="text-sm text-muted-foreground">
                  Meta (Facebook), 2021
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
