'use client'
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { siteConfig } from "../config/theme";
import ButtonUi from '../ui/button'







const NavBar = () => {  
  const navLinks = [  
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Services", href: "#Services" },
    { name: "Blog", href: "#Blog" },
  ];
  return (
    <NavbarComponent
      logo={siteConfig.logo}
      navLinks={navLinks}
      contactBtn={{ label: "Contact Us", href: "/contact" }}
    />
  );
};

export default NavBar;








export interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  logo: { src: string; alt: string };
  navLinks: NavLink[];
  contactBtn: { label: string; href: string };
}

export function NavbarComponent({ logo, navLinks, contactBtn }: NavbarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop/NavBar */}
      <nav
        className={`h-[80px] w-full flex items-center justify-between px-6 fixed top-0 left-0 z-50 transition-all duration-500
          ${scrolled
            ? "bg-blue-600 shadow-2xl translate-y-2"
            : "bg-white shadow-none translate-y-0"
          }
        `}
        style={{ borderRadius: scrolled ? "1rem" : "0" }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo.src} alt={logo.alt} className={`w-auto ${scrolled ? 'h-15 transition-all duration-500 ' :'h-25 '} `} />
        </div>
        {/* Links - hidden on mobile */}
        <ul className="hidden md:flex gap-8 mx-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`
                  relative px-4 py-2 rounded-2xl  transition-colors text-xl font-medium
                  ${scrolled
                    ? "text-white hover:text-blue-200"
                    : "text-blue-600 hover:text-blue-800"
                  }
                  group
                `}
              >
                {link.name}
                {/* Animated underline */}
                <span
                  className={`
                    absolute left-4 right-4 -bottom-1 h-[4px] rounded bg-current
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 origin-left
                  `}
                  style={{
                    backgroundColor: scrolled ? "#fff" : "#2563eb",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
        {/* Contact Us Button - hidden on mobile */}
          {ButtonUi(contactBtn.label, contactBtn.href)} 
        {/* Mobile Menu Icon */}
        <button
          className={`md:hidden text-2xl ${scrolled ? "text-white" : "text-blue-600"}`}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />  
        </button>
      </nav>

      {/* Sidebar for Mobile (appears from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
          {/* Close icon in sidebar header */}
          <button
            className="text-2xl text-blue-600"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-8 px-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-lg text-blue-600 hover:text-blue-800 font-medium transition"
                onClick={() => setSidebarOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contactBtn.href}
              className="block mt-4 px-5 py-2 rounded bg-blue-700 text-white font-semibold shadow hover:opacity-90 transition"
              onClick={() => setSidebarOpen(false)}
            >
              {contactBtn.label}
            </a>
          </li>
        </ul>
      </div>
      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-20" />
    </>
  );
}