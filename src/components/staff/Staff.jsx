// import {links} from 'src/data/links.js';
import Image from "next/image";
import photo from "/Users/shiqizhou/hlg-website/public/awesome-cat-placeholder.png";
// import { IconContext } from "react-icons";

// icons here
import { FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

// doesn't work: https://stackoverflow.com/questions/56636280/how-to-style-react-icons
// function discordIcon() {
//   return (
//     <IconContext.Provider value={{ color: "red" }}>
//       <FaDiscord className="w-full h-full" />
//     </IconContext.Provider>
//   );
// }

// displays a single staff element.
const Staff = ({
  posname,
  name,
  discordlink = "none",
  emaillink = "none",
  photo1,
}) => {
  return (
    <section className="mb-4 border-4 border-red-500">
      <div>
        <h3>{posname}</h3>
        <div className="pl-5 pb-1">
          <Image src={photo} />
        </div>
      </div>

      <div className="border-4 border-blue-500 flex flex-row justify-center">
        <h4 className="rounded-3xl p-1.5 bg-blue-500 break-words inline-block text-center border-4 border-green-500">
          {name}
        </h4>
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
