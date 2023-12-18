import * as React from "react";
import Icon from "public/HLG-logo.webp";
import Button from "src/components/Button";
import Image from "next/image";

const LandingTitle = () => {
  return (
    <div className="flex justify-center items-start">
      <Image src={Icon} alt="Icon" className="w-1/2 sm:w-1/5" />
      <div className="flex-col pt-4">
        {/* desktop */}
        <p className="text-hlg-white md:block  hidden font-bold text-4xl m-0  space-y-2">
          HIGHLANDER GAMING
        </p>
        <p className="text-hlg-yellow md:block  hidden text-lg m-0 space-y-2">
          at University of California
        </p>
        {/* mobile */}
        <p className="text-hlg-white md:hidden font-bold text-xs m-0  space-y-2">
          HIGHLANDER GAMING
        </p>
        <p className="text-hlg-yellow md:hidden  text-sm m-0 space-y-2">
          at University of California
        </p>
        <div className="pt-4"></div>
        <Button />
      </div>
    </div>
  );
};

export default LandingTitle;
