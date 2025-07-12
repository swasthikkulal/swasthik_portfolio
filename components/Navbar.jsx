"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ import useRouter

const Navbar = () => {
  const router = useRouter(); // ✅ use the hook

  function handleContact() {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
  function handleAbout() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function handleProject() {
    const projectSection = document.querySelector("#project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function handleHome() {
    const homeSection = document.querySelector("#home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold" style={{ fontFamily: "cursive" }}>
          .Portfolio
        </h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li onClick={handleHome} className="cursor-pointer">
            Home
          </li>
          <li onClick={handleAbout} className="cursor-pointer">
            About
          </li>
          <li onClick={handleProject} className="cursor-pointer">
            Projects
          </li>
          <li onClick={handleContact} className="cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
