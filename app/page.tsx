import LandingPage1 from "@/components/landing-page-one";
import { Suspense } from "react";

export default async function Home() {
  // HERE YOU CAN FETCH FROM THE SERVER
  const data = setTimeout(async () => {
    return new Promise((resolve) => {
      resolve();
    });
  });

  return (
    // RENDER A FALL BACK WHILE THE DATA IS FETCHING
    <Suspense fallback={<div>Loading component here...</div>}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <LandingPage1 />
      </main>
    </Suspense>
  );
}
