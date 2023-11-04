import Image from "next/image";
import photo from "public/colored-graph.svg";
const Heading = ({ text }) => {
  return (
    <div className="flex justify-center gap-3">
      <Image className="h-10" src={photo} />

      <div className="flex-col gap-3">
        <h2 className="font-normal">{text}</h2>
        <div className="flex justify-center">
          <div className="bg-hlg-yellow px-4 py-1 rounded-md"> </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
