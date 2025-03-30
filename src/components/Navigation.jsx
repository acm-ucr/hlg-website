"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { items } from "@/data/navigation";
import Icon from "src/components/Icon.jsx";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 md:h-[8vh] p-0 flex px-3 py-1 !bg-black/50 justify-between items-center backdrop-blur-md"
    >
      <Navbar.Brand>
        <Link className="p-0 no-underline flex items-center gap-2" href="/">
          <Icon />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className=" text-white text-xl" />
      </Navbar.Toggle>

      <Navbar.Collapse className="items-center md:justify-end justify-center ">
        <Nav className=" w-12/12 flex items-center ">
          {items.map(({ name, link }, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={link}
              className="hover:cursor-pointer -mb-1 px-4 !text-hlg-white whitespace-nowrap transform transition duration-500 ease-in-out hover:scale-105 "
            >
              <div className="flex-col items-center">
                <div>{name}</div>
                <div className="flex justify-center">
                  <div
                    className={
                      pathname === link
                        ? " bg-hlg-yellow p-1 rounded-full"
                        : "p-1"
                    }
                  ></div>
                </div>
              </div>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
