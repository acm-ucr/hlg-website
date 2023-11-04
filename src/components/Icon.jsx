import Image from "next/image";
import navbarLogo from "../../public/navbar-logo.svg";

const Icon = () => {
  return (
    <div className="flex items-center">
      <div>
        <Image src={navbarLogo} alt="Navbar-Logo" className="h-3/4 w-3/4" />
      </div>
      <div className="font-bold text-white text-3xl">HLG</div>
    </div>
  );
};

export default Icon;
