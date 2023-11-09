import Image from "next/image";
import photo from "public/colored-graph.svg";
const Heading = ({ text }) => {
  return (
    <div className="flex justify-center gap-3">
      <Image className="h-9" src={photo} />

      <div className="flex-col">
        <div className="text-3xl font-medium">{text}</div>
        <div className="py-1" />

        <div className="flex justify-center">
          <div className="bg-hlg-yellow px-4 py-1 rounded-md"> </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
