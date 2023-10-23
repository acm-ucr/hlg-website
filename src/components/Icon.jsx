import Image from "next/image";
import navbarLogo from "../../public/navbar-logo.svg";

const Icon = () => {
  return (
    <div className="flex">
      <Image src={navbarLogo} alt="Navbar-Logo" />
      <div
        className="font-extrabold text-white text-4xl -mb-4"
        style={{ fontWeight: 2000, marginTop: "10px", marginLeft: "10px" }}
      >
        <div> HLG</div>
      </div>
    </div>
  );
};

export default Icon;
