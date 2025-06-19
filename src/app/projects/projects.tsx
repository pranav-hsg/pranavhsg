// 'use client'
// import React, { useState } from 'react';

import { Project } from "@/types/my-journey-types";
import { findFaIcon } from "@/utils/icon-util";

const Projects = () => {
    const projects: Project[] = [
        {
            title: "Poimapper Java Library",
            description: "A lightweight Java library to streamline Excel file processing by mapping rows to Java objects, reducing manual work.",
            keyFeatures: [
                "Supports automatic row-to-object mapping",
                "Eliminates manual index tracking",
                "Simplifies sheet generation",
            ],
            impact: "Open-source and trusted by developers.",
            techStack: ["Java", "Apache POI", "Maven"],
            link: "https://mvnrepository.com/artifact/io.github.pranav-hsg/poimapper",
        },
        {
            title: "AutoGapSlider - NPM Package",
            description: "A zero-dependency, mobile-responsive React slider that automatically adjusts gaps between slides.",
            keyFeatures: [
                "Auto-adjusting slide gaps",
                "Works across all screen sizes",
                "Zero external dependencies",
                "Smooth animations",
            ],
            impact: "Downloaded 300+ times on NPM.",
            techStack: ["React", "JavaScript", "NPM"],
            link: "https://www.npmjs.com/package/autogapslider",
        },
        {
            title: "Kashvi - Kannada Voice Assistant",
            description: "An intelligent voice assistant that understands and responds to commands in Kannada, designed to perform various tasks using speech recognition and natural language processing.",
            keyFeatures: [
                "Understands local language voice commands",
                "Performs tasks like opening apps and answering queries",
                "Text-to-speech and speech-to-text integration",
                "Modular and extensible architecture",
            ],
            impact: "Presented in college demo & got appreciated for promoting regional language tech adoption.",
            techStack: ["Python", "Speech Recognition", "gTTS", "Web Scraping"],
            link: "https://github.com/pranav-kirsur/kashvi-voice-assistant" // change this if your repo link is different
        }

    ];

    // const [expandedFeatures, setExpandedFeatures] = useState<{ [key: string]: boolean }>({});

    // const toggleFeatures = (index: number) => {
    //     setExpandedFeatures(prev => ({
    //         ...prev,
    //         [index]: !prev[index]
    //     }));
    // };

    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-primary">Projects</h2>
                <p className="mt-4 text-lg text-gray-600">Some of my featured works.</p>
            </div>

            <div className="container mx-auto px-6 mt-10 flex flex-wrap justify-center gap-6">
                {projects.map(({ title, description, keyFeatures, impact, techStack, link }, index) => (
                    <div key={index} className="card w-[450px] group">
                        {/* Floating Icon on Hover */}
                        {/* <div className="absolute -top-4 -right-4 card text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
                            🚀
                        </div> */}

                        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                        <p className="mt-2 ">{description}</p>

                        {/* Key Features */}
                        <ul className="mt-4 list-disc list-inside">
                            {keyFeatures.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        {/* .slice(0, expandedFeatures[index] ? keyFeatures.length : 3) {keyFeatures.length > 3 && (
                            <button
                                className="text-blue-500 hover:text-blue-700 mt-2 text-sm"
                                onClick={() => toggleFeatures(index)}
                            >
                                {expandedFeatures[index] ? 'Show Less' : 'View More'}
                            </button>
                        )} */}

                        {/* Impact */}
                        <p className="mt-4 text-sm font-medium text-primary">{impact}</p>

                        {/* Tech Stack */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {techStack.map((tech, i) => (
                                <span key={i} className="glassy-chip">
                                    {findFaIcon(tech)} {tech}
                                </span>
                            ))}
                        </div>

                        {/* GitHub/NPM Link */}
                        <a href={link} target="_blank" rel="noopener noreferrer" className="link">
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
