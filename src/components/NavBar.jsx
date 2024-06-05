import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const Menu = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="fixed z-40 flex items-center justify-between w-full h-20 px-4 text-white bg-black md:px-6 lg:px-12">
      <div>
        <h1 className="ml-4 text-2xl font-signature">
          <span className="text-4xl text-orange-500 font-signature">MR</span>
          asel
        </h1>
      </div>
      <ul className="hidden md:flex">
        {Menu.map((data) => (
          <li
            key={data.id}
            className="px-4 font-medium text-gray-400 capitalize duration-150 cursor-pointer hover:scale-105 hover:text-orange-500"
          >
            <Link to={data.link} smooth duration={500}>{data.link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-gray-400 cursor-pointer md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen just bg-gradient-to-b from-black to-gray-800">
          {Menu.map((data) => (
            <li
              key={data.id}
              className="py-6 text-3xl text-gray-400 capitalize cursor-pointer hover:text-orange-500"
            >
              <Link onClick={()=> setNav(!nav)} to={data.link} smooth duration={500}>{data.link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
