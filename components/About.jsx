import React from "react";

const About = () => {
  return (
    <div id="about">
      <section
        className="px-6 py-16 text-center bg-gray-200 text-black bg-right w-full"
        style={{ backgroundImage: "url('/images/projects/right.png')" }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        {/* <div
          className="w-full h-[500px] bg-no-repeat bg-contain bg-right"
          style={{ backgroundImage: "url('/images/projects/right.png')" }}
        > */}
        <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
          I'm <span className="font-semibold">Swasthik</span>, a passionate and
          goal-driven Full-Stack Web Developer with hands-on experience in the
          MERN stack — MongoDB, Express.js, React.js, and Node.js. I specialize
          in building clean, responsive, and user-centric web applications.
          Currently, I’m deepening my frontend expertise with Next.js, focusing
          on server-side rendering, API integration, and optimized performance
          for production-ready applications. It has enhanced the way I approach
          web architecture and SEO best practices. During my internship at
          Codelab Systems, I built real-world projects like a Shoe E-commerce
          website and an Instagram Clone using the MERN stack. These experiences
          helped me apply concepts in a real-world environment, improve
          debugging skills, and understand full-stack workflows. I'm committed
          to continuous learning and clean code. My goal is to work with
          innovative teams, build scalable digital products, and grow as a
          modern web developer ready for industry challenges.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <span className="bg-black text-white px-4 py-2 rounded-lg">
            React
          </span>
          <span className="bg-black text-white px-4 py-2 rounded-lg">Next</span>
          <span className="bg-black text-white px-4 py-2 rounded-lg">
            Node.js
          </span>
          <span className="bg-black text-white px-4 py-2 rounded-lg">
            Express
          </span>
          <span className="bg-black text-white px-4 py-2 rounded-lg">
            MongoDB
          </span>
          <span className="bg-black text-white px-4 py-2 rounded-lg">JWT</span>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default About;
