import React from "react";
import { FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Icon from "src/components/Icon.jsx";

const Footer = () => {
  return (
    <div className="bg-gradient-to-l from-hlg-blue-300 to-hlg-black text-white p-4 flex-1 flex justify-between">
      <div className="flex items-start mt-2">
        <Icon />
      </div>
      <div className="flex items-end">
        <div className="flex flex-col items-end">
          <div className="mb-1">contact us</div>
          <div className="ml-4">900 University Ave,</div>
          <div className="ml-4">Riverside, CA 92521</div>
        </div>
        <div className="border-l-4 border-white h-full mx-4"></div>
        <div className="flex flex-col items-end">
          <a
            href={"https://discord.gg/vyq7GRXC"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-4xl mb-2"></FaDiscord>
          </a>
          <IoIosMail className="text-4xl"></IoIosMail>
        </div>
      </div>
    </div>
  );
};

export default Footer;
