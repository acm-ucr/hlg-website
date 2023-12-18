import * as React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <Link
      href="https://linktr.ee/hlg_ucr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="md:inline hidden items-center rounded-full bg-gradient-to-r from-hlg-orange to-hlg-yellow px-12 py-1 text-white font-extrabold border-solid">
        <div className="text-md">JOIN US</div>
      </button>
      {/* mobile */}
      <button className="inline md:hidden rounded-full bg-gradient-to-r from-hlg-orange to-hlg-yellow px-2 py-1 text-white font-bold border-solid">
        <div className="text-xs">JOIN US</div>
      </button>
    </Link>
  );
};

export default Button;
