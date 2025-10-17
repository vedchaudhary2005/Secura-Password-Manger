import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-1 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Brand Name */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-white">
        <span className='text-green-600'>&lt;</span>
            
            Secura
        <span className='text-green-600'>/&gt;</span>

            <span className="text-blue-500">.</span>
          </h2>
          <p className="text-sm text-gray-400">
            Protect your passwords with confidence.
          </p>
        </div>

       

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/vedchaudhary2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ved-chaudhary-179343352/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/i.vedchaudhary/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Secura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
