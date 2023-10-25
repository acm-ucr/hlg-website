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

const Sponsors = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-lg ">
      <p className="text-hlg-black ">Previously Sponsored By</p>
      <div className="flex flex-row space-x-20">
        <div className="flex flex-col">
          <div className="py-4">
            <Image src={Msi} className="" />
          </div>

          <div className="">
            <Image src={Corsair} className="" />
          </div>

          <div className="flex ">
            <Image src={Zotac} className="" />
          </div>

          <div className="flex ">
            <Image src={Spectre} className="" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex ">
            <Image src={Seasonic} className="" />
          </div>

          <div className="flex ">
            <Image src={TurtleBeach} className="" />
          </div>

          <div className="flex ">
            <Image src={RedBull} className="" />
          </div>

          <div className="flex ">
            <Image src={ClipStudio} className="" />
          </div>

          <div className="flex ">
            <Image src={WarnerBros} className="" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex ">
            <Image src={Razor} className="" />
          </div>

          <div className="flex ">
            <Image src={Gamdias} className="" />
          </div>

          <div className="flex ">
            <Image src={Roccat} className="" />
          </div>

          <div className="flex ">
            <Image src={EVGA} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
