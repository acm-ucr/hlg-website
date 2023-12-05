import * as React from "react";
import Icon from "public/HLG-logo.png";
import Button from "src/components/Button";
import Image from "next/image";

const LandingTitle = () => {
  return (
    <div className="flex items-start">
      <Image src={Icon} alt="Icon" width={100} height={100} />
      <div className="flex-col pt-4">
        <p className="text-hlg-white font-bold md:text-3xl items-center m-0 flex space-y-2">
          HIGHLANDER GAMING
        </p>
        <p className="text-hlg-yellow md:text-sm items-center m-0 flex space-y-2">
          at University of California
        </p>
        <div className="pt-4"></div>
        <Button />
      </div>
    </div>
  );
};

export default LandingTitle;
