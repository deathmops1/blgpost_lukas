import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/offenes-buch.png";

const Header: React.FC = () => {
  return (
    <header className=" bg-blue-600 shadow-sm py-8">
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex">
          <div className="flex justify-between">
            <img src={logo} className=" w-10 h-10" alt="Logo"/>
            <Link to="/" className="text-4xl font-bold text-black uppercase hover:text-white pl-2">
              Csaw Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;