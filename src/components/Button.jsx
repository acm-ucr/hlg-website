import * as React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <Link
      href="https://linktr.ee/hlg_ucr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className=" md:items-center rounded-full bg-gradient-to-r from-hlg-orange to-hlg-yellow px-9 py-1 text-white md:font-extrabold font-bold border-solid">
        <div className="md:text-md md:inline hidden">JOIN US</div>
        <div className="text-xs inline md:hidden">JOIN US</div>
      </button>
    </Link>
  );
};

export default Button;
