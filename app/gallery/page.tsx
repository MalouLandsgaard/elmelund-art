import { Gallery } from "@/components/Gallery/Gallery";

export default function GalleryPage() {
  return (
    <div className="m-4 max-w-[1200px] mx-auto mt-40">
      <div className="flex flex-col md:flex-row md:gap-12 items-end mb-10">
  <div className="md:w-3/12 md:pr-6 mb-6 md:mb-0">
    <p className="text-base leading-relaxed font-normal font-lora italic">
      Hvis noget er velkendt, så skal kunst være det, der vender det på hovedet og viser en ny vinkel
    </p>
  </div>

  <div className="md:w-8/12">
    <h1 className="text-[40px] leading-snug font-normal font-lora italic">
      Klarhed, realismen og Jeanette Elmelunds skarpe øje for hverdagens objekter 
      får deres faste plads her — hvor farver, mønstre og humor mødes i motiver, der overrasker og fastholder blikket.
    </h1>
  </div>
</div>

      <Gallery />
    </div>
  );
}
