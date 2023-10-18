import React from "react";
import Image from "next/image";

const Teammate = () => {
  return (
    <div className="bg-gradient-to-r from-hlg-blue-300 to-hlg-black">
      <div className="flex">
        <Image
          src="team/graves.png" // Path to your image inside the 'public' directory
          alt="Graves Image"
          width={500} // Desired width of the image
          height={300} // Desired height of the image
        />

        <div className="mt-10 ml-10">
          <div className="bg-gradient-to-r from-hlg-blue-100 to-hlg-blue-200 bg-clip-text text-transparent">
            <div className="font-extrabold leading-tight text-5xl -mb-3 m-0 p-0">
              <p>Matthew &quot;GetTurtled&quot;</p>
              <p>Nguyen</p>
            </div>
          </div>
          <div className="mb-7 text-hlg-white p-3 leading-3">
            <p>YEAR: 3</p>
            <p>POSITION: JG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teammate;
