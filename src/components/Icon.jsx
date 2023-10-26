import Image from "next/image";
import navbarLogo from "../../public/navbar-logo.svg";

const Icon = () => {
  return (
    <div className="flex items-center">
      <Image src={navbarLogo} alt="Navbar-Logo" />
      <div className="font-extrabold text-white text-4xl ml-2">HLG</div>
    </div>
  );
};

export default Icon;
