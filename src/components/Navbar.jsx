import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

// React Icons
import {
  FaHome,
  FaInfo,
  FaNewspaper,
  FaPhoneAlt,
  FaSearch,
  FaSignInAlt,
} from "react-icons/fa";

const routes = [
  {
    path: "/",
    element: <FaHome size="22" />,
  },
  {
    path: "/about",
    element: <FaInfo size="22" />,
  },
  {
    path: "/feed",
    element: <FaNewspaper size="22" />,
  },
  {
    path: "/contact",
    element: <FaPhoneAlt size="22" />,
  },
  {
    path: "/search",
    element: <FaSearch size="22" />,
  },
  {
    path: "/sign-up",
    element: <FaSignInAlt size="22" />,
  },
];

const Navbar = () => {
  let logoSize = 72;

  return (
    <header className="bg-brown-100 py-4">
      <nav className="flex flex-col gap-2 sm:gap-0 sm:flex-row max-w-[1200px] items-center justify-between mx-5 lg:mx-auto">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              width={`${logoSize}px`}
              height={`${logoSize}px`}
              className="shadow-sm bg-brown-200 border-2 rounded-[50%] p-2"
              alt="logo"
            />
          </Link>
        </div>
        <ul role="list" className="flex flex-wrap sm:mt-0 mt-4 gap-4">
          {routes.map((route) => (
            <li
              key={route.element}
              className="p-3 opacity-[.6] hover:opacity-[1] transition-opacity border border-[#000] rounded-[50%] bg-brown-200 text-white"
            >
              <Link to={route.path}>{route.element}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
