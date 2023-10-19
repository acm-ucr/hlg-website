import Image from "next/image";
import photo from "public/colored-graph.svg";
const Heading = ({ text }) => {
  return (
    <div className="flex gap-10">
      <Image src={photo} />
      <div className="flex-col">
        <h2 className="top-2 left-4"> {text}</h2>
        <div className="flex">
          <div className="bg-hlg-orange p-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
