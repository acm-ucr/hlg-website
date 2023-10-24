import React from "react";
import Image from "next/image";
import Graves from "public/team/graves.png";

const Teammate = () => {
  return (
    <div className="bg-gradient-to-r from-hlg-blue-300 to-hlg-black">
      <div className="flex ">
        <Image
          src={Graves} // Path to your image inside the 'public' directory
          alt="Graves Image"
        />

        <div className="mt-10 pl-10">
          <div className="bg-gradient-to-r from-hlg-blue-100 to-hlg-blue-200 bg-clip-text text-transparent">
            <div className="font-bold leading-tight text-3xl m-0 p-0">
              <p className="m-0 p-0">Matthew &quot;GetTurtled&quot;</p>
              <p className="m-0 p-0"> Nguyen</p>
            </div>
          </div>
          <div className="mb-7 text-hlg-white leading-5">
            <p className="ml-2 p-0 mt-2">YEAR: 3</p>
            <p className="ml-2 p-0">POSITION: JG</p>
            <p className="ml-2 p-0">CHAMPION: Graves</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teammate;
