import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-cyan-950 text-white px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

      {/* Contact Card */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md text-center border border-white/20">
        <h2 className="text-2xl font-semibold mb-4">Ved Chaudhary</h2>

        {/* Contact Details */}
        <p className="text-lg mb-2">
          📞 Phone: <span className="font-medium">+91 8429366583</span>
        </p>
        <p className="text-lg mb-2">
          📧 Email: <span className="font-medium">vedchaudhary162005@email.com</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          {/* GitHub */}
          <a
            href="https://github.com/vedchaudhary2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ved-chaudhary-179343352/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/i.vedchaudhary/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918429366583"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
