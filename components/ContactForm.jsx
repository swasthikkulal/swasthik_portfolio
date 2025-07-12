"use client";
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const ContactForm = () => {
  const [data, setdata] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  async function handleClick() {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!result || !result.success) {
      console.log("No data received or request failed");
    } else {
      console.log("Data received successfully");
      setdata({ name: "", email: "", message: "" }); // ← reset form
    }
  }
  return (
    <div className="w-[100%]" id="contact">
      <h2 className="text-3xl font-bold mb-[7%] pt-[5rem] ">Contact</h2>
      <div className="flex justify-center mb-[5%]">
        <div className="  w-[150%]">
          <div className="text-black ">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-white w-[52%] h-8 p-1 rounded-md mb-[3%] outline-none"
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-white w-[52%] h-8 p-1 rounded-md mb-[3%] outline-none"
            />
            <input
              type="text"
              name="message"
              value={data.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-white w-[52%] h-20 p-1 rounded-md mb-[3%] outline-none"
            />
          </div>
          <button
            className="p-2 w-[15%] bg-emerald-300 text-black rounded-md"
            onClick={handleClick}
          >
            Send
          </button>
        </div>

        <div className="w-[50%] ">
          <div className="flex gap-[3%] mb-[3%]">
            <MapPin className="text-white w-5 h-5" />
            <p>Mangalore</p>
          </div>
          <div className="flex gap-[3%] mb-[3%]">
            <Phone className="w-5 h-5 text-white" />
            <p>9483369031</p>
          </div>
          <div className="flex gap-[3%]">
            <Mail className="w-5 h-5 text-white" />
            <p>swasthik126@gmail.com</p>
          </div>
          <div className="flex gap-10 mt-[15%]">
            <a
              href="https://www.linkedin.com/in/swasthik-kulal-77a1a8287/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" />
            </a>

            <a
              href="https://x.com/swasthik__kulal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-white text-2xl hover:text-gray-700" />
            </a>

            <a
              href="https://github.com/swasthikkulal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-2xl hover:text-gray-700" />
            </a>
            <a
              href="https://wa.me/919483369031"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-500 text-2xl hover:text-green-600" />
            </a>
          </div>
        </div>
        <div className="" id="dotted"></div>
      </div>
    </div>
  );
};

export default ContactForm;
