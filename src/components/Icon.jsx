import React from "react";
import Image from "next/image";

const Icon = () => {
  return (
    <div className="container">
      <div className="image">
        <Image src="navbar-logo.svg" alt="Navbar-Logo" width={57} height={64} />
      </div>
    </div>
  );
};

export default Icon;
