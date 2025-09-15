"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial:
      "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial04 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 gap-12">
      <h2 className="text-5xl font-semibold text-center tracking-[-0.03em] px-6 text-pretty">
        Success Stories
      </h2>
      <p className="text-center text-muted-foreground text-xl max-w-2xl">
        Real stories from people who use and love our product every day
      </p>

     
      <div className="relative w-full overflow-hidden">
        <div className="marquee-track-left flex gap-6 min-w-max">
          <TestimonialList testimonials={testimonials} />
          <TestimonialList testimonials={testimonials} />
        </div>
      </div>

    
      <div className="relative w-full overflow-hidden">
        <div className="marquee-track-right flex gap-6 min-w-max">
          <TestimonialList testimonials={testimonials} />
          <TestimonialList testimonials={testimonials} />
        </div>
      </div>

      <style jsx>{`
        /* Remover espaços invisíveis causados por gap extra ou margin */
        .marquee-track-left, .marquee-track-right {
          /* garantir que o conteúdo não encolha ou quebre linha */
          flex-shrink: 0;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .marquee-track-left {
          animation: marqueeLeft 25s linear infinite;
        }
        .marquee-track-right {
          animation: marqueeRight 25s linear infinite;
        }

        /* DEBUG: bordas para visualização */
        .marquee-track-left > div, .marquee-track-right > div {
          /* Uncomment pra ver limites dos cards */
          /* border: 1px solid red; */
        }
      `}</style>
    </div>
  );
};

const TestimonialList = ({ testimonials }) =>
  testimonials.map((testimonial, idx) => (
    <div
      key={`${testimonial.id}-${idx}`}
      className="min-w-[24rem] max-w-sm bg-accent rounded-xl p-6 flex-shrink-0"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonial04;
