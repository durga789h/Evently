import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex justify-center bg-primary-50  bg-contain">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 2xl:max-[1320px]">
         <div className="flex flex-col justify-center gap-8">
          <h2 className="h2-bold">Host Connect,celebrate:your Events,our platform!</h2>
          <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3168+ mentors in world-class companies with our global community.</p>
          <Button size={"lg"} asChild className="bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus-ring-4 focus:outline-none
  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center button sm:w-fit">
            <Link href={"#events"}>Explore Now</Link>
          </Button>
         </div>
         <Image src={"/assets/images/hero.png"} width={1000} height={1000} alt="hero"
         className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"></Image>
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col md:gap-12">
       <h2 className="h2-bold">Trust by <br/> Thousands of Events</h2>
       <div className="flex w-full flex-col gap-5 md:flex-row">Search Category filter</div>
      </section>
      
    </div>
     );
}
