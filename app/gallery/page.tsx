"use client";
import { Gallery } from "@/components/Gallery/Gallery";
import { TextHeading, TextParagraph } from "@/components/AnimatedText/AnimatedText";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <div className="m-4 max-w-[1200px] mx-auto mt-40">
      <motion.div 
        className="flex flex-col md:flex-row md:gap-12 items-end mb-10 mx-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >

        <div className="md:w-3/12 md:pr-6 mb-6 md:mb-0">
          <TextParagraph className="text-base leading-relaxed font-normal font-lora italic">
            Hvis noget er velkendt, så skal kunst være det, der vender det på hovedet og viser en ny vinkel
          </TextParagraph>
        </div>
        <div className="md:w-8/12">
          <TextHeading className="text-[40px] leading-snug font-normal font-lora italic">
            Klarhed, realismen og Jeanette Elmelunds skarpe øje for hverdagens objekter får deres faste plads her — hvor farver, mønstre og humor mødes i motiver, der overrasker og fastholder blikket.
          </TextHeading>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 20, duration: 0.5 }   },
        }}
        initial="hidden"
        animate="visible"
      >
        <Gallery />
      </motion.div>
    </div>
  );
}