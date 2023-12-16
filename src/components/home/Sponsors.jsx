import Image from "next/image";
import RedBull from "public/sponsors/red-bull.png";
import ClipStudio from "public/sponsors/clip-studio.png";
import Corsair from "public/sponsors/corsair.png";
import EVGA from "public/sponsors/evga.png";
import Gamdias from "public/sponsors/gamdias.png";
// import Geng from "public/sponsors/geng.png";
import Msi from "public/sponsors/msi.png";
import Razor from "public/sponsors/razor.png";
import Roccat from "public/sponsors/roccat.png";
import Seasonic from "public/sponsors/seasonic.png";
import Spectre from "public/sponsors/spectre.png";
import TurtleBeach from "public/sponsors/turtle-beach.png";
import WarnerBros from "public/sponsors/warner-bros.png";
import Zotac from "public/sponsors/zotac.png";
import GenG from "public/sponsors/geng.png";

const Sponsors = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-lg ">
      <p className="text-hlg-black ">Partnered with</p>
      <Image src={GenG} className="w-1/3 xl:w-1/6" />
      <div className="py-5"></div>
      <div className="xl:py-16 2xl:py-16"></div>
      <p className="text-hlg-black ">Previously Sponsored By</p>
      <div className="flex flex-row space-x-20 ms: mx-4">
        <div className="flex flex-col">
          <Image src={Msi} className="mb-10" />

          <Image src={Corsair} className="mb-10" />

          <Image src={Zotac} className="mb-10" />

          <Image src={Spectre} className="mb-10" />
        </div>

        <div className="flex flex-col">
          <Image src={Seasonic} className="mb-10" />

          <Image src={TurtleBeach} className="mb-10" />

          <Image src={RedBull} className="mb-10" />

          <Image src={ClipStudio} className="mb-10" />

          <Image src={WarnerBros} className="mb-10" />
        </div>

        <div className="flex flex-col ">
          <Image src={Razor} className="mb-10" />

          <Image src={Gamdias} className="mb-10" />

          <Image src={Roccat} className="mb-10" />

          <Image src={EVGA} className="mb-10" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
