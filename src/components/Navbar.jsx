import React from "react";
import logo from "../assets/logo_rey.png";
import "./Nav.css";
import { FaLine, FaLinkedin, FaTelegram, FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="image flex flex-wrap mx-2 w-32 h-32"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex space-x-4 text-xl">
          <li>
            <a href="#home" className="nav hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#tec" className="nav hover:text-blue-500">
              Technologies
            </a>

          </li>
          <li>
            <a href="#p" className="nav hover:text-blue-500">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="nav hover:text-blue-500">
              get in touch
            </a>
          </li>
        </ul>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          
          <a href="https://www.tiktok.com/@opayalv?_t=8qPrKBfM488&_r=1"><FaTiktok className="Logo" /></a>
          <a href="https://www.facebook.com/profile.php?id=100086146076608&mibextid=LQQJ4d"><FaFacebook className="Logo" /></a>
          <a href="https://t.me/nvapay"><FaTelegram className="Logo" /></a>
          <a href="https://www.instagram.com/opaynva/profilecard/?igsh=MWxlbnRrN3NpZDRkYg=="><FaInstagram className="Logo" /></a>
          

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
