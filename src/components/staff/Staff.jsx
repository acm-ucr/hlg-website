// import {links} from 'src/data/links.js';
import Image from "next/image";
import photo from "public/awesome-cat-placeholder.png";

// icons here
import { FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

// displays a single staff element.
const Staff = ({
  posname,
  name,
  discordlink = "none",
  emaillink = "none",
  photo1,
}) => {
  return (
    <section className="mb-4">
      <div>
        <h3>{posname}</h3>
        <div className="pl-5 pb-1">
          <Image src={photo} />
        </div>
      </div>

      <div className=" flex flex-row justify-left">
        <h5 className="rounded-3xl py-1.5 px-3.5 bg-blue-950 break-words inline-block text-center text-white font-normal">
          {name}
        </h5>
      </div>

      <div className="flex flex-row pl-8">
        <div className="h-5 w-7 pt-1">
          <a href={discordlink} target="_blank noreferrer">
            <FaDiscord className="w-full h-full text-amber-400" />
          </a>
        </div>
        <div className="h-7 w-6 pb-1">
          <a href={emaillink} target="_blank noreferrer">
            <IoIosMail className="w-full h-full text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Staff;
