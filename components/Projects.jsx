"use client";

import { useEffect, useRef, useState } from "react";
import "./TextWriter.css"; // 👈 Make sure to create and import this CSS file
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      className="bg-red-200 text-center  text-black bg-right w-full"
      style={{ backgroundImage: "url('/images/projects/right.png')" }}
      id="project"
    >
      <h2 className="text-3xl font-bold mb-4 pt-[5rem]">Projects</h2>
      <div
        className="flex gap-[10%] p-10 g-right w-full bg-red-200"
        style={{ backgroundImage: "url('/images/projects/right.png')" }}
      >
        <div className="max-w-xl flex  p-4">
          <video
            src="/videos/insta.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ boxShadow: "5px 5px 10px red" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2
            ref={ref}
            className={`typewriter-text ${
              isVisible ? "animate" : ""
            } underline font-bold`}
          >
            Instagram clone
          </h2>
          <div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold">Tech Stack:</span> React.js,
              Node.js, Express.js, MongoDB, JWT, Tailwind CSS
            </p>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
              A simple Instagram-like app with secure JWT login, profile
              editing, and image post uploads. Users can update their name, bio,
              and display picture, and share image posts. The app features a
              responsive UI and a shared feed for all posts.
            </p>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed mt-[2%]">
              <span className="font-semibold">Key Features: </span> JWT-based
              login/signup, Edit profile (name, bio, DP), Upload image posts,
              Responsive design
            </p>
            {/* <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
              Github:{" "}
            </p> */}
            <a
              href="https://github.com/swasthikkulal/instagramclone"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-2xl mx-auto text-lg text-red-700 leading-relaxed flex text-center gap-2"
            >
              <FaGithub className="text-red-700 text-2xl hover:text-gray-700" />
              Github link
            </a>
          </div>
        </div>
      </div>

      {/* project 2 */}
      <div
        className="flex gap-[10%] p-10 g-right w-full bg-emerald-200"
        style={{ backgroundImage: "url('/images/projects/right.png')" }}
      >
        <div>
          <h2
            ref={ref}
            className={`typewriter-text ${
              isVisible ? "animate" : ""
            } underline font-bold`}
          >
            Shoe E-commerce Website
          </h2>
          <div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold">Tech Stack:</span>React.js,
              Node.js, Express.js, MongoDB, JWT, Tailwind CSS
            </p>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
              A MERN stack e-commerce app for selling shoes. Features include
              JWT-based login, product listing, user-specific cart system, and
              profile management. Built with a responsive UI for a smooth
              shopping experience.
            </p>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed mt-[2%]">
              <span className="font-semibold">Key Features: </span> User
              authentication (JWT), View & add shoes to cart, Edit user profile,
              Responsive design with Tailwind
            </p>
            <a
              href="https://github.com/swasthikkulal/shoe_react"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-2xl mx-auto text-lg text-emerald-900 leading-relaxed flex  gap-2"
            >
              <FaGithub className="text-emerald-900 text-2xl hover:text-gray-700" />
              Github link
            </a>
          </div>
        </div>
        <div className="max-w-xl   p-4">
          <video
            src="/videos/shoes.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ boxShadow: "-5px -5px 10px green" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* project 3 */}
      <div
        className="flex gap-[10%] p-10 g-right w-full bg-blue-200"
        style={{ backgroundImage: "url('/images/projects/right.png')" }}
      >
        <div className="max-w-xl flex  p-4">
          <video
            src="/videos/pintrest.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ boxShadow: "5px 5px 10px blue" }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2
            ref={ref}
            className={`typewriter-text ${
              isVisible ? "animate" : ""
            } underline font-bold`}
          >
            Pinterest Clone Web App
          </h2>
          <div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold">Tech Stack:</span> Express.js,
              EJS, MongoDB, JWT, Multer, Tailwind CSS
            </p>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
              A server-rendered Pinterest-style app where users can log in,
              upload photos, edit their profile picture, and browse a shared
              image feed. Built using Express.js and EJS with JWT authentication
              and Multer for image uploads.
            </p>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed mt-[2%]">
              <span className="font-semibold">Key Features: </span> JWT-based
              login, Edit display picture, Upload and view images, Responsive
              feed layout
            </p>
            <a
              href="https://github.com/swasthikkulal/pinterest"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-2xl mx-auto text-lg text-blue-900 leading-relaxed flex text-center gap-2"
            >
              <FaGithub className="text-blue-700 text-2xl hover:text-gray-700" />
              Github link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
