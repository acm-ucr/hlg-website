import Link from "next/link";
import React from "react";

const Social = ({ icon, name, link }) => {
  return (
    <div className="rounded-2xl bg-hlg-white p-5 text-center w-40 h-40">
      <div className="flex flex-col items-center">
        <Link href={link}>
          {/* {React.createElement(icon, { size: 50, className: "text-hlg-blue-300 mt-[-25px] mb-2" })} */}

          {React.cloneElement(icon, {
            size: 50,
            className: "text-hlg-blue-300 mt-[-25px] mb-2",
          })}
        </Link>

        <div className="w-8 h-1.5 bg-hlg-yellow rounded-md mb-1.5" />
        <div className="text-hlg-blue-300 text-lg"> {name} </div>
      </div>
    </div>
  );
};

export default Social;
