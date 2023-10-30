import React from "react";
import Image from "next/image";
import Graves from "public/team/graves.png";
import Mordekaiser from "public/team/mordekaiser.png";
import Gragas from "public/team/gragas.png";
import Aphelios from "public/team/aphelios.png";
import Rell from "public/team/rell.png";

const Teammate = () => {
  return (
    <div>
      <div className="flex justify-center font-bold text-4xl shadow-md pb-3">
        LEAGUE OF LEGENDS
      </div>
      <div className="flex bg-gradient-to-r from-hlg-blue-300 to-hlg-black mt-5 mr-20 ml-20">
        <Image src={Mordekaiser} alt="Mordekaiser Image" />

        <div className="mt-6 pl-10">
          <div className="bg-gradient-to-r from-hlg-orange to-hlg-yellow bg-clip-text text-transparent font-bold text-4xl">
            <p>Brogan &quot;don&apos;t play top&quot;</p>
            <p>McCoy</p>
          </div>

          <div className="text-hlg-white pt-2">
            <p>YEAR: 2</p>
            <p>POSITION: TOP</p>
            <p>CHAMPION: Mordekaiser</p>
          </div>
        </div>
      </div>

      <div className="flex bg-gradient-to-r from-hlg-blue-300 to-hlg-black mt-5 mr-20 ml-20">
        <Image src={Graves} alt="Graves Image" />

        <div className="mt-6 pl-10">
          <div className="bg-gradient-to-r from-hlg-blue-100 to-hlg-blue-200 bg-clip-text text-transparent font-bold text-4xl">
            <p>Matthew &quot;GetTurtled&quot;</p>
            <p>Nguyen</p>
          </div>

          <div className="text-hlg-white pt-2">
            <p>YEAR: 3</p>
            <p>POSITION: JG</p>
            <p>CHAMPION: Graves</p>
          </div>
        </div>
      </div>

      <div className="flex bg-gradient-to-r from-hlg-blue-300 to-hlg-black mt-5 mr-20 ml-20">
        <Image src={Gragas} alt="Gragas Image" />
        <div className="mt-10 pl-10">
          <div className="bg-gradient-to-r from-hlg-orange to-hlg-yellow bg-clip-text text-transparent font-bold text-4xl">
            <p>Jake &quot;LDCs&quot; Han</p>
          </div>

          <div className="text-hlg-white pt-10">
            <p>YEAR: 4</p>
            <p>POSITION: MID</p>
            <p>CHAMPION: Gragas</p>
          </div>
        </div>
      </div>

      <div className="flex bg-gradient-to-r from-hlg-blue-300 to-hlg-black mt-5 mr-20 ml-20">
        <Image src={Aphelios} alt="Aphelios Image" />
        <div className="mt-10 pl-10">
          <div className="bg-gradient-to-r from-hlg-purple to-hlg-pink bg-clip-text text-transparent font-bold text-4xl">
            <p>Andre &quot;Galamode&quot; Amante</p>
          </div>

          <div className="text-hlg-white pt-10">
            <p>YEAR: 4</p>
            <p>POSITION: Bot/ADC</p>
            <p>CHAMPION: Aphelios</p>
          </div>
        </div>
      </div>

      <div className="flex bg-gradient-to-r from-hlg-blue-300 to-hlg-black mt-5 mr-20 ml-20 mb-20">
        <Image src={Rell} alt="Rell Image" />
        <div className="mt-10 pl-10">
          <div className="bg-gradient-to-r from-hlg-yellow to-hlg-green bg-clip-text text-transparent font-bold text-4xl">
            <p>Chrisian &quot;SlyLego&quot; Tran</p>
          </div>

          <div className="text-hlg-white pt-10">
            <p>YEAR: 4</p>
            <p>POSITION: SUPPORT</p>
            <p>CHAMPION: Rell</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teammate;
