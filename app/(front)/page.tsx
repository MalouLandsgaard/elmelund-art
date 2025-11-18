import Banner from "@/components/Banner/Banner";
import AnimatedSVG from "@/components/AnimatedLogo/AnimatedLogo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="p-4 max-w-[1200px] mx-auto">
        <div className="py-10 w-1/2 ">
        <AnimatedSVG/>
        </div>
     
      <p className="font-mono text-sm w-full text-balance font-extralight">
      allta is a modern irish fine dining restaurant by chef niall davidson. our menu tells a story of time and place, capturing the best ingredients ireland has to offer. in each moment, every dish is shaped by our travels, our connection to nature, and a commitment to sustainability. the dining room blends fun and sophistication with the energy of the open kitchen alongside a soundtrack played over our bespoke toby hatchett sound system.
      </p>
      <Link href="/gallery">Gallery</Link>
      </div>
    
    </div>
  );
}
