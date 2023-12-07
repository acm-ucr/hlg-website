import * as React from "react";

const Button = () => {
  return (
    <div className="">
      <button className=" md:items-center rounded-full bg-gradient-to-r from-hlg-orange to-hlg-yellow px-9 py-1 text-white md:font-extrabold font-bold border-solid">
        <div className="md:text-md md:inline hidden">JOIN US</div>
        <div className="text-sm inline md:hidden">JOIN US</div>
      </button>
    </div>
  );
};

export default Button;
