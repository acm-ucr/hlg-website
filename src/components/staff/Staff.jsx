"use client";
// import {links} from 'src/data/links.js';
import Image from "next/image";

// icons here
import { FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";

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
        {(posname === "President" ||
          posname === "Treasurer" ||
          posname === "Vice President") && <h3>{posname}</h3>}
        <div className="pl-5 pb-1">
          <Image src={photo} />
        </div>
      </div>

      <div className="flex flex-col justify-left rounded-lg bg-hlg-blue-300">
        <h5 className="rounded-3xl py-1.5 px-3.5  break-words inline-block text-center text-white font-normal">
          {name}
        </h5>
        <div className="flex flex-row gap-1 justify-center">
          <div>
            <Toaster />
            <button
              className=" m-0 p-0 h-5 w-7 pt-1"
              onClick={(event) => {
                event.preventDefault();
                navigator.clipboard.writeText(discordlink);
                toast("Discord username copied to clipboard! \u2705", {
                  position: "top-center",
                  toastClassName: () => "shadow-none",
                  style: { boxShadow: "none" },
                });
              }}
            >
              <FaDiscord className="w-full h-full text-amber-400 transform transition duration-500 ease-in-out hover:scale-110" />
            </button>
          </div>
          <div className="h-7 w-6 pb-1">
            <Link href={`mailto:${emaillink}`}>
              <IoIosMail className="w-full h-full text-amber-400 transform transition duration-500 ease-in-out hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
