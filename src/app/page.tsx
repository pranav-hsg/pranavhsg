import React from 'react';
import { Github, Linkedin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { FloatingCircles } from '@/utils/floating-circles';
import Link from 'next/link';
import { btnStyle } from '@/utils/style';

const sections = [
  { title: 'About Me', description: 'Passionate about software development and problem-solving, I specialize in building scalable and efficient applications.', link: '/about', linkText: 'Learn more →' },
  { title: 'Projects', description: 'A collection of projects showcasing my expertise in full-stack development.', link: '/projects', linkText: 'View projects →' },
  { title: 'Experience', description: 'Explore my professional journey and career milestones in software development.', link: '/experience', linkText: 'View experience timeline →' },
  { title: 'Skills', description: 'Proficient in modern web technologies, frameworks, and tools.', link: '/skills', linkText: 'Explore skills →' },
  { title: 'Contact', description: 'Let’s connect! Reach out for collaborations, job opportunities, or discussions.', link: '/contact', linkText: 'Get in touch →' }
];

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center p-6">
      <FloatingCircles />

      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl transition-transform duration-300">
        <Image height={260} width={200} src="/images/pranav.png" alt="Pranav HS" className="object-cover w-full h-full" />
      </div>

      {/* Name & Description */}
      <h1 className="text-5xl font-bold mt-8 text-black tracking-tight text-primary">Pranav HS</h1>
      <p className="mt-6 text-xl max-w-2xl text-gray-700 leading-relaxed">
        Self-taught Full Stack Web Developer with a passion for creating innovative and user-friendly web applications. I enjoy tackling new challenges and am always eager to expand my skillset.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-10 flex gap-6">
        <a href="https://linkedin.com/in/pranav-hsg" target="_blank" rel="noopener noreferrer" className={btnStyle}>
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
        <a href="https://github.com/pranav-hsg" target="_blank" rel="noopener noreferrer" className={btnStyle + ' '}>
          <Github className="w-5 h-5" /> GitHub
        </a>
      </div>

      {/* Additional Sections with Links */}
      <div className="mt-10 max-w-4xl mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="p-6  bg-white/10 backdrop-blur-2xl border  rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-white">
            <h2 className="text-2xl font-bold text-black">{section.title}</h2>
            <p className="mt-2 text-lg text-gray-700">{section.description}</p>
            <Link href={section.link} className="mt-2 inline-block text-primary font-semibold hover:underline">
              {section.linkText}
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;