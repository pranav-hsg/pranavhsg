"use client";
import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

export const FloatingCircles = ({ n = 10 }) => {
  const [circles, setCircles] = useState<any[]>([]);

  useEffect(() => {
    const generateCircles = () =>
      Array.from({ length: n }, () => {
        const size = Math.floor(Math.random() * 80) + 20; // Random size between 20px - 60px
        return {
          size: `${size}px`,
          top: `${Math.random() * (100 - (size / window.innerHeight) * 100)}%`, // Adjusted top position
          left: `${Math.random() * (100 - (size / window.innerWidth) * 100)}%`, // Adjusted left position
          gradient: getRandomGradient(),
          opacity: Math.random() * 0.5 + 0.2, // Random opacity (0.2 - 0.7)
          blur: `blur-${["md", "lg", "xl", "2xl"][Math.floor(Math.random() * 4)]}`,
          animation: getRandomAnimation(),
          duration: `${Math.random() * 5 + 5}s`, // Random slow animation duration (5s - 10s)
        };
      });

    setCircles(generateCircles());
  }, [n]);

  function getRandomGradient() {
    const gradients = [
      "from-pink-500 to-yellow-500",
      "from-green-400 to-blue-500",
      "from-purple-500 to-red-400",
      "from-yellow-500 to-orange-400",
      "from-blue-500 to-indigo-500",
      "from-red-500 to-pink-600",
      "from-teal-400 to-cyan-500",
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  }

  function getRandomAnimation() {
    const animations = ["animate-pulse", "animate-bounce", "animate-spin"];
    return animations[Math.floor(Math.random() * animations.length)];
  }
  const circles2 = [
    { size: "w-16 h-16", gradient: "from-pink-500 to-yellow-500", opacity: "opacity-40", blur: "blur-lg", position: "top-1/3 left-1/3" },
    { size: "w-20 h-20", gradient: "from-green-400 to-blue-500", opacity: "opacity-30", blur: "blur-xl", position: "top-1/2 left-1/4" },
    { size: "w-12 h-12", gradient: "from-purple-500 to-red-400", opacity: "opacity-50", blur: "blur-md", position: "bottom-1/3 right-1/3" },
    { size: "w-24 h-24", gradient: "from-yellow-500 to-orange-400", opacity: "opacity-25", blur: "blur-2xl", position: "bottom-1/2 left-1/2" },
    { size: "w-14 h-14", gradient: "from-blue-500 to-indigo-500", opacity: "opacity-30", blur: "blur-lg", position: "top-1/2 right-1/3" },
    { size: "w-18 h-18", gradient: "from-red-500 to-pink-600", opacity: "opacity-40", blur: "blur-md", position: "bottom-1/4 right-1/4" },
    { size: "w-22 h-22", gradient: "from-teal-400 to-cyan-500", opacity: "opacity-35", blur: "blur-xl", position: "top-1/3 left-1/2" },
    { size: "w-10 h-10", gradient: "from-yellow-400 to-red-400", opacity: "opacity-45", blur: "blur-md", position: "top-2/5 right-1/2" },
  ];

  return (


    < div className="absolute absolute inset-0 -z-50 flex items-center justify-center overflow-hidden" >

      {
        circles.map((circle, index) => (
          <div
            key={index}
            className={`absolute bg-gradient-to-r ${circle.gradient} opacity-${circle.opacity} ${circle.blur} rounded-full ${circle.animation}`}
            style={{
              width: circle.size,
              height: circle.size,
              top: circle.top,
              left: circle.left,
              animationDuration: circle.duration, // Set slower animation duration
            }}
          ></div >
        ))
      }

    </div >

  );
};
