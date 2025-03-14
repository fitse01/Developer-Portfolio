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
import { CalendarDays, Clock, User } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt:
        "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
      image: "/placeholder.svg?height=300&width=600",
      date: "March 15, 2023",
      readTime: "8 min read",
      author: "Fitsum Tafese",
      categories: ["CSS", "Web Design", "Tailwind"],
    },
    {
      id: 2,
      title: "Server Components in Next.js: A Game Changer",
      excerpt:
        "Explore how Server Components in Next.js can improve performance and developer experience.",
      image: "/placeholder.svg?height=300&width=600",
      date: "May 22, 2023",
      readTime: "10 min read",
      author: "Fitsum Tafese",
      categories: ["Next.js", "React", "Performance"],
    },
    {
      id: 3,
      title: "Getting Started with Prisma ORM",
      excerpt:
        "A comprehensive guide to using Prisma ORM for database management in your Node.js applications.",
      image: "/placeholder.svg?height=300&width=600",
      date: "July 8, 2023",
      readTime: "12 min read",
      author: "Fitsum Tafese",
      categories: ["Database", "Prisma", "Node.js"],
    },
    {
      id: 4,
      title: "Optimizing React Applications for Performance",
      excerpt:
        "Learn techniques and best practices to optimize your React applications for better performance.",
      image: "/placeholder.svg?height=300&width=600",
      date: "September 30, 2023",
      readTime: "15 min read",
      author: "Fitsum Tafese",
      categories: ["React", "Performance", "Optimization"],
    },
  ];

  return (
    <main className="py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, design, and
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories.map((category, i) => (
                    <Badge key={i} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
