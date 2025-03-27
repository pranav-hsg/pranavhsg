import React from 'react';
import { Github, Linkedin } from 'lucide-react'; // Import icons

const Home = () => {

  return (
    <div className=" flex flex-col justify-center items-center text-center bg-white p-6">
      {/* Profile Image */}
      <div
        className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl transition-transform duration-300"
      >
        <img
          src="/images/pranav.png" // Ensure this path is correct
          alt="Pranav HS"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name & Description */}
      <h1
        className="text-5xl font-bold mt-8 text-gray-900 tracking-tight text-primary" // Changed text color
      >
        Pranav HS
      </h1>
      <p
        className="mt-6 text-xl max-w-2xl text-gray-700 leading-relaxed"  // Changed text color
      >
        Self-taught Full Stack Web Developer with a passion for creating innovative and user-friendly web applications.  I enjoy tackling new challenges and am always eager to expand my skillset.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-10 flex gap-6">
        <a
          href="https://linkedin.com/in/pranav-hsg"
          target="_blank"
          rel="noopener noreferrer"
          className=" px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2
    hover:bg-blue-600 hover:shadow-xl"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>
        <a
          href="https://github.com/pranav-hsg"
          target="_blank"
          rel="noopener noreferrer"
          className=" px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2
    hover:bg-blue-600 hover:shadow-xl"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
      </div>

    </div>
  );
};

export default Home;
