import React from "react";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar bg-neutral text-color-neutral px-4 mb-3 shadow-lg">
      <div className="container mx-auto">
        <FiGithub className="text-4xl ml-4" />
        <p className="text-ml ml-2 font-bold" title="Back To Home">
          Github React Project
        </p>
      </div>
      <div className="flex-1 px-2 mr-4">
        <div className="flex">
          <Link to="/" className="btn bg-sky-900 mr-3">
            Home
          </Link>
          <Link to="/about" className="btn bg-blue-900">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
