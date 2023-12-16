import React from "react";
import { FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Icon from "src/components/Icon.jsx";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gradient-to-l from-hlg-blue-300 to-hlg-black text-hlg-white p-2 sm:p-4 flex justify-between">
      <div className="flex items-center mt-2 sm:mt-11 ">
        <Icon />
      </div>
      <div className="flex items-center py-2 sm:py-4">
        <div className="flex flex-col items-end pl-2 pr-1 sm:px-4">
          <div className="mb-1 text-xs sm:text-sm">contact us</div>
          <div className="text-xs sm:text-sm">900 University Ave,</div>
          <div className="text-xs sm:text-sm">Riverside, CA 92521</div>
        </div>

        <div className="border-l-4 border-hlg-white h-full mx-2 sm:mx-4"></div>

        <div className="flex flex-col sm:pr-4">
          <Link
            href="https://discord.com/invite/hlg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-4xl mb-2" />
          </Link>

          <IoIosMail className="text-4xl"></IoIosMail>
        </div>
      </div>
    </div>
  );
};

export default Footer;
