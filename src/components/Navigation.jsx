"use client";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { items } from "@/data/navigation";
import Icon from "src/components/Icon.jsx";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 md:h-[8vh] p-0 flex px-3 py-0 !bg-black/50 justify-between items-center backdrop-blur-md"
    >
      <Navbar.Brand>
        <Link
          onClick={() => setSelected("")}
          eventkey="1"
          className="p-0 no-underline flex items-center gap-2"
          href="/"
        >
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
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              onClick={() => setSelected(item.name)}
              className="hover:cursor-pointer -mb-1 px-4 !text-hlg-white whitespace-nowrap "
            >
              <div className="flex-col items-center">
                <div>{item.name}</div>
                <div className="flex justify-center">
                  <div
                    className={
                      selected === item.name
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
