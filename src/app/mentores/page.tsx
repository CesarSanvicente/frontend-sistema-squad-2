"use client"
import React, { useEffect, useState } from "react";
import MentorCard from "@/components/MentorCard";
import axios from "axios";

interface Mentor {
  id: number;
  name: string;
  expertise: string;
  experienceYears: number;
  isAvailable: boolean;
  imageSrc?: string;
}

export default function MentoresPage() {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/mentores`
        );
        setMentors(response.data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div>
      <main className="min-h-screen flex flex-col items-center py-10 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Nuestros Mentores</h1>
        <p className="mb-10 text-lg text-center max-w-2xl">
          Conoce a nuestros mentores expertos en diversas áreas tecnológicas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentorName={mentor.name}
              specialization={mentor.expertise}
              experience={mentor.experienceYears}
              availability={mentor.isAvailable ? "Disponible" : "No disponible"}
              imageSrc={`/assets/mentores/carlos-lopez.webp`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
