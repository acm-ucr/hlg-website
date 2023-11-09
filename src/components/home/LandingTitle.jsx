import * as React from "react";
import Icon from "public/HLG-logo.png";
import Button from "src/components/Button";
import Image from "next/image";

console.log(Icon);

const LandingTitle = () => {
  return (
    <div className="flex items-center">
      <Image src={Icon} alt="Icon" className="w-1/12" />
      <div className="flex-col">
        <p className="text-hlg-white font-bold text-3xl items-center m-0 flex space-y-2">
          HIGHLANDER GAMING
        </p>
        <p className="text-hlg-yellow text-sm items-center m-0 flex space-y-2">
          at University of California
        </p>
        <Button />
      </div>
    </div>
  );
};

export default LandingTitle;
