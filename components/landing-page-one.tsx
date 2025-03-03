import React from "react";
import Slider from "./slider";
import { Navbar } from "./base/navbar";
import LoanHighlights from "./highlights";
import { Button } from "./ui/button";
import Footer from "./base/footer";

function LandingPage1() {
  return (
    <div className="no-scrollbar relative bottom-0 top-0 flex-1 flex-col flex w-full">
      <Navbar />
      <Slider />
      <LoanHighlights />

      <section id="newsletter" className="w-full ">
        <div className="relative isolate flex min-h-[580px] flex-col items-center justify-center overflow-hidden bg-[#204D88] px-6 sm:px-4 md:px-0">
          <h2 className="text-center text-[clamp(20px,3vw,1.5rem)] font-[900] text-white">
            Join our newsletter
          </h2>
          <h2 className="text-center text-[clamp(20px,20px+3vw,3rem)] font-[900] text-white">
            Managing loans?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center tracking-wide text-white/80 xl:text-lg">
            Ares provides you a loan management platform to directly analyze,
            track and manage loans.
          </p>
          <Button
            color="secondary"
            size="lg"
            className={"my-10 bg-white text-foreground hover:bg-white/80"}
          >
            Get Started
          </Button>
          <p className="mx-auto text-center text-xs font-light tracking-wide text-white/80 sm:text-sm xl:text-base">
            Be a part of 1,000+ other applicants.
          </p>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/3 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#3b8dfa" />
                <stop offset={1} stopColor="#73afff" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage1;
