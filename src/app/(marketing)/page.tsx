import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const inter  =Inter({
    subsets : ['latin'],
    display : 'swap',
    weight : ['700', '400',],
})

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})


function MarketingPage() {
  return (
    <div className={cn("flex items-center justify-center flex-col",
      inter.className
    )}>
      <div className="flex items-center justify-center flex-col ">
        <div
          className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 
            text-amber-700 rounded-full uppercase text-xs md:text-base text-nowrap"
        >
          <Medal className=" h-6 w-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-base md:text-6xl sm:text-3xl text-center text-neutral-800 mb-6 text-nowrap font-bold">
          Taskify helps team move
        </h1>
        <div
          className="text-base md:text-6xl sm:text-3xl bg-gradient-to-r 
         from-fuchsia-600 to-pink-600 text-white  p-2 md:p-4 rounded-md 
            w-fit text-center text-nowrap font-bold"
        >
          work forward
        </div>
        <div className={cn("text-sm md:text-xl  text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            poppins.className
        )}>
          collaborate, manage project, and rech new productivity peaks. From
          high rises to the home office, the way your team works is different -
          accomplish it all with Taskify.
        </div>
        <Button className="mt-8" size="lg" >
          <Link href="/signup">Get Taskify for free</Link>
        </Button>
      </div>
    </div>
  );
}

export default MarketingPage;
