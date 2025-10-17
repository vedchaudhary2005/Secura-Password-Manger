import React from "react";
import { FaShieldAlt } from "react-icons/fa"; // ✅ Stable icon from Font Awesome

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-cyan-950 text-white px-6">
      {/* Icon */}
      <FaShieldAlt size={60} className="text-blue-500 mb-4" />

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-3 text-center">About Secura</h1>

      {/* Description */}
      <p className="max-w-2xl text-center text-gray-300 leading-relaxed text-lg">
        Welcome to <span className="font-semibold text-blue-400">Secura</span> — your
        trusted modern password manager built with React and Tailwind CSS.  
        We help you securely store, manage, and access your passwords with ease.  
        With a simple, intuitive interface and strong encryption, Secura ensures your
        online identity remains protected every second.
      </p>

      {/* Tagline */}
      <p className="mt-6 text-gray-400 italic text-center">
        “Your security, simplified.”
      </p>
    </div>
  );
};

export default About;
