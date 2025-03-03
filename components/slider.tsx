"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  // CarouselNext,
  // CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

type Slide = {
  title: string;
  description: string;
  image: string;
  [x: string]: unknown;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Welcome to LoanEase",
    description:
      "Manage your loans with ease. Apply for a loan, track repayments, and stay on top of your finances all in one place.",
    image: "/images/onboarding/image1.jpg",
  },
  {
    id: 2,
    title: "Get Loans Instantly",
    description:
      "Need quick financial assistance? Apply for a loan in minutes and receive funds directly to your account.",
    image: "/images/onboarding/image2.jpg",
  },
  {
    id: 3,
    title: "Track Your Repayments",
    description:
      "Stay informed about your repayment schedule, set reminders, and avoid late fees with our easy-to-use tracking system.",
    image: "/images/onboarding/image3.jpg",
  },
  {
    id: 4,
    title: "Secure and Reliable",
    description:
      "Your financial security is our priority. Enjoy a seamless and secure loan management experience with LoanEase.",
    image: "/images/onboarding/image4.jpg",
  },
];

export default function Slider({ slides = SLIDES }: { slides?: Slide[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    setCurrentIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative flex aspect-video w-full max-w-screen flex-1 flex-col items-center overflow-clip max-h-[60svh]">
      <div className="absolute inset-0 z-30 flex bg-gradient-to-t from-black/80 via-secondary/30 to-transparent"></div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 7000 + current + count,
            stopOnInteraction: true,
            stopOnLastSnap: false,
          }),
        ]}
        setApi={setApi}
        className="flex w-full flex-1"
      >
        <CarouselContent className="mx-0 flex w-full flex-grow">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="p-0">
              <Image
                className="w-full"
                src={`/images/${index + 1}.jpg`}
                alt="slide-image"
                width={1280}
                height={480}
                priority
                unoptimized
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="z-50 ">
          <CarouselPrevious className="border-transparent bg-slate-50 text-primary hover:bg-slate-50/80 hover:text-primary left-16 cursor-pointer" />
          <CarouselNext className="border-transparent bg-slate-50 text-primary hover:bg-slate-50/80 hover:text-primary right-16 cursor-pointer" />
        </div>
      </Carousel>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex} // Ensure a unique key for each step
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              ease: "easeInOut",
              duration: 0.25,
            },
          }}
          exit={{ opacity: 0, x: -100 }}
          className="absolute bottom-0 z-30 mx-2 mb-8 flex flex-col items-center justify-center gap-4 md:mx-auto"
        >
          <h3 className="text-center text-[clamp(1rem,1.25rem+2vw,5rem)] font-bold leading-10 text-nowrap text-white">
            {slides[currentIndex]?.title}
          </h3>

          <p className="w-full text-center text-[clamp(11px,11px+0.5vw,1.25rem)] leading-7 text-neutral-200">
            {slides[currentIndex]?.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
