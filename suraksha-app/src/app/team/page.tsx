"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const teamMembers = [
  {
    name: "Gnaneswar Lopinti",
    role: "Team Lead",
    description: "Led the project, managed tasks, and developed the backend.",
    image: "/images/gnaneswar.jpg", // Placeholder path
  },
  {
    name: "M L Goutham",
    role: "Frontend Developer",
    description: "Built the React frontend and designed the UI.",
    image: "/images/teammate1.jpg",
  },
  {
    name: "Kashyap",
    role: "Backend Developer",
    description: "Contributed to the backend APIs and security integration.",
    image: "/images/teammate2.jpg",
  },
]

export default function MeetTheTeam() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Meet Our Team</h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          The brilliant minds behind our success, driving innovation and excellence in every project.
        </p>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                    <div className="relative h-64 w-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-sm font-medium text-blue-600 mb-4">{member.role}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

