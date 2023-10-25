import { FaDiscord } from "react-icons/fa";

const Social = () => {
  return (
    <div className="rounded-2xl bg-hlg-white p-5 text-center w-40 h-40">
      <div className="flex flex-col items-center">
        <FaDiscord size={50} className="text-hlg-blue-300 mt-[-25px] mb-2" />{" "}
        {/* Replace with other social icon */}
        <div className="w-8 h-1.5 bg-hlg-yellow rounded-md mb-1.5" />
        <div className="text-hlg-blue-300 text-lg"> Discord </div>
      </div>
    </div>
  );
};

export default Social;
