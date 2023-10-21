import Image from "next/image";
import photo from "public/colored-graph.svg";
const Heading = ({ text }) => {
  return (
    // <div className="flex gap-10">
    //   <Image src={photo} />
    //   <div className="flex-col">
    //     <h1 className="font-weight:500 top-2 left-4"> {text}</h1>
    //     <div className="flex">
    //       <div className="bg-hlg-orange p-1"></div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="" style={{ paddingRight: "10px" }}>
          <Image src={photo} />
        </div>
        <h2 className="">{text}</h2>
      </div>

      <div className="flex">
        <div className="px-10"></div>
        <div className="px-4"></div>
        <div className="bg-orange-500 px-4 py-1"> </div>
      </div>
    </div>
  );
};

export default Heading;
