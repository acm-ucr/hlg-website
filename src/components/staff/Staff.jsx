"use client";
// import {links} from 'src/data/links.js';
import Image from "next/image";

// icons here
import { FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import { Toaster, toast } from "react-hot-toast";

// displays a single staff element.
const Staff = ({
  posname = "position name",
  name = "name",
  discordlink = "none",
  emaillink = "none",
  photo = "",
}) => {
  return (
    <section className="mb-4">
      <div>
        <h3>{posname}</h3>
        <div className="pl-5 pb-1">
          <Image src={photo} />
        </div>
      </div>

      <div className="flex flex-row justify-left">
        <h5 className="rounded-3xl py-1.5 px-3.5 bg-blue-950 break-words inline-block text-center text-white font-normal">
          {name}
        </h5>
      </div>

      <div className="flex flex-row pl-4">
        <div className="h-5 w-7 pt-1">
          <Toaster />
          <a
            href={discordlink}
            onClick={(event) => {
              event.preventDefault();
              navigator.clipboard.writeText(discordlink);
              toast("Discord username copied to clipboard! \u2705");
            }}
          >
            <FaDiscord className="w-full h-full text-amber-400" />
          </a>
        </div>
        <div className="h-7 w-6 pb-1">
          <a href={`mailto:${emaillink}`}>
            <IoIosMail className="w-full h-full text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Staff;
