import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <nav className='bg-slate-800 text-white'>
    <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

      <div className="logo font-bold text-xl sm:text-2xl text-white">
        <span className='text-green-600'>&lt;</span>
        Secura
        <span className='text-green-600'>/&gt;</span>
      </div>

      {/* Hamburger Menu Button - Visible on mobile */}
      <button 
        className='md:hidden flex flex-col gap-1 z-50'
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li className='flex gap-4 lg:gap-6'>
          <Link className='hover:font-bold transition-all' to="/">Home</Link>
          <Link className='hover:font-bold transition-all' to="/about">About</Link>
          <Link className='hover:font-bold transition-all' to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul className={`md:hidden fixed top-14 left-0 w-full bg-slate-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <li className='flex flex-col gap-4 px-4 py-6 items-center justify-center'>
          <Link 
            className='hover:font-bold hover:text-green-600 transition-all py-2 border-b border-slate-700' 
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            className='hover:font-bold hover:text-green-600 transition-all py-2 border-b border-slate-700' 
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            className='hover:font-bold hover:text-green-600 transition-all py-2 border-b border-slate-700' 
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

    </div>
   </nav>
  )
}

export default Navbar