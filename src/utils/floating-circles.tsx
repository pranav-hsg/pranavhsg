"use client";
import { useEffect, useState } from "react";
type Circle = {
  size: string;
  top: string;
  left: string;
  gradient: string;
  opacity: number;
  blur: string;
  animation: string;
  duration: string;
};
export const FloatingCircles = ({ n = 10 }) => {
  const [circles, setCircles] = useState<Circle[]>([]);

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
  return (


    < div className="absolute absolute inset-0 -z-50 flex items-center justify-center overflow-hidden" >

      {
        circles.map((circle, index) => (
          <div
            key={index}
            className={`absolute bg-gradient-to-r ${circle.gradient} opacity-${circle.opacity} ${circle.blur} rounded-full ${circle.animation} blur-lg`}
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
