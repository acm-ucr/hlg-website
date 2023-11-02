import Link from "next/link";
import React from "react";

const Social = ({ icon, name, link }) => {
  return (
    <Link href={link} style={{ textDecoration: "none" }}>
      <div className="rounded-2xl bg-hlg-white p-5 text-center w-40 h-40 shadow-md">
        <div className="flex flex-col items-center">
          <div className="text-hlg-blue-300 mt-[-25px] mb-2 text-5xl">
            {" "}
            {icon}{" "}
          </div>
          <div className="w-8 h-1.5 bg-hlg-yellow rounded-md mb-1.5" />
          <div className="text-hlg-blue-300 text-lg"> {name} </div>
        </div>
      </div>
    </Link>
  );
};

export default Social;
