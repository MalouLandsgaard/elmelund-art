type TextStripProps = {
  text: string;
};

export default function TextStrip({ text }: TextStripProps) {
  return (  
    <div className="h-screen w-full">
      <div className="grid grid-cols-12 gap-4">
      <div className="col-span-1"></div>
      <p className="col-span-5 font-mono text-sm w-full text-balance font-extralight">
        {text}
      </p>
      <p className="col-span-5 font-mono text-sm w-full text-balance font-extralight">
        {text}
      </p>
      <div className="col-span-1"></div>
      </div>
    </div>
  );
}