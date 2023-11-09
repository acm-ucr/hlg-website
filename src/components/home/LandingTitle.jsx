import * as React from "react";
import Icon from "public/HLG-logo.png";
import Button from "src/components/Button";
import Image from "next/image";

console.log(Icon);

const LandingTitle = () => {
  return (
    <div className="h-screen bg-gradient-to-r flex items-center">
      <Image src={Icon} alt="Icon" className="w-1/12" />;
      <div className="flex-call">
        <p className="text-white font-bold font-sans text-3xl items-center mt-20 flex space-y-2">
          HIGHLANDER GAMING
        </p>
        <p className="text-yellow-500 font-sans text-sm items-center mt-25 flex space-y-2">
          at University of California
        </p>
        <Button />
      </div>
    </div>
  );
};

export default LandingTitle;
