import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Fitsum is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive. He transformed our outdated platform into a modern, user-friendly application that our customers love.",
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupX",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with Fitsum was a game-changer for our startup. He not only built our MVP in record time but also provided valuable insights that improved our product. His technical expertise and communication skills make him a standout developer.",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director at CreativeAgency",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Fitsum has a rare ability to translate design concepts into flawless code. His collaborative approach and technical skills made our project a success. I highly recommend him for any web development project.",
    },
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          What People Say
        </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <Avatar className="h-20 w-20">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-quote"
                          >
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground italic">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
