import Marquee from 'react-fast-marquee';

export default function Banner() {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover autoFill>
      <div className="p-2">
        georgina campbell fine dining restaurant of the year 2025 •
      </div>
    </Marquee>
  );
}