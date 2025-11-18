import Marquee from 'react-fast-marquee';

export default function Banner() {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover autoFill>
      <div className="py-2 flex items-center">
        <div className="font-mono text-sm font-extralight">rudersdal municipality artist of the year 2025</div>
        <div className="font-mono text-sm font-extralight px-2">•</div>
      </div>
    </Marquee>
  );
}