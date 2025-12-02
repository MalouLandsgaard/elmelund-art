import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const link = "https://via.ritzau.dk/pressemeddelelse/14404048/arets-kunstner-i-rudersdal-er-jeanette-elmelund?publisherId=13561555&lang=da";

export default function Banner() {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover autoFill>
      <div className="py-2 flex items-center">
        <Link href={link} className="font-mono text-sm font-extralight hover:underline" target="_blank" rel="noopener noreferrer">rudersdal municipality artist of the year 2025</Link>
        <div className="font-mono text-sm font-extralight px-2">•</div>
      </div>
    </Marquee>
  );
}