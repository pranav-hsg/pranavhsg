import { FloatingCircles } from "@/utils/floating-circles";
import { div } from "framer-motion/client";

export default function Experience() {
    const experiences = [
        {
            company: "Sensei Technologies",
            role: "Full Stack Developer",
            duration: "April 2022 - Present",
            date: "Present",
            description: "Developed 10+ end-to-end CRUD screens using Spring Boot and Angular. Optimized API performance, engineered a WhatsApp notification system, and contributed to Spring Data JPA.",
            techStack: ["Java", "Spring Boot", "Angular", "MySQL", "Docker"],
        },
        {
            company: "Maven Central",
            role: "Open Source",
            duration: "January 2024",
            date: "Jan 2024",
            description: "Published a Java library to Maven Central, simplifying Excel row-to-Java bean conversion, streamlining sheet generation, eliminating manual index updates, and improving data processing efficiency, resulting in positive community recognition.",
            techStack: ["Java"]
        }
        ,
        {
            company: "Open Source",
            role: "Contributor - Spring Data JPA",
            duration: "June 2023",
            date: "Jun 2023",
            description: "Optimized count query generation logic, improving query execution speed by over 30% across the application, and earned formal recognition as an official contributor.",
            techStack: ["Java", "Spring Data", "Hibernate"],
        },
        {
            "company": "Open Source - NPM",
            "role": "AutoGapSlider - NPM Package",
            "duration": "March 2022",
            "date": "Mar 2022",
            "description": "Developed & Published to NPM, a zero-dependency, mobile-responsive React slider that automatically adjusts gaps between slides according to the viewport. Achieved a total of 300+ downloads.",
            "techStack": ["React", "JavaScript", "NPM"]
        }, {
            "company": "Personal Project",
            "role": "Web Developer",
            "duration": "May 2020",
            "date": "May 8, 2020",
            "description": "Built my very own first website and published it to GitHub using HTML and CSS, gaining hands-on experience in web development.",
            "techStack": ["HTML", "CSS", "GitHub"]
        }


    ];

    return (
        <div className="h-full">

            <section className="relative min-h-screen text-gray-800 py-16">


                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-primary">Experience</h1>
                    <p className="mt-4 text-lg text-gray-600">A glimpse into my professional journey.</p>
                </div>

                {/* Timeline Container */}
                <div className="container mx-auto px-6 mt-10 relative">
                    {/* Vertical Timeline for Larger Screens */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>

                    {experiences.map(({ company, role, duration, description, techStack, date }, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row items-center w-full mb-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                            {/* Timeline Dot with Date */}
                            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                                <span className="text-sm font-medium text-gray-700 bg-white px-2 py-1 rounded-md shadow-md">{date}</span>
                                <div className="w-5 h-5 bg-primary rounded-full border-4 border-white mt-1"></div>
                            </div>
                            {/* Experience Card */}
                            <div
                                className={`relative w-full md:w-5/12 border border-white/20 shadow-lg rounded-2xl hover:shadow-2xl transition-transform duration-300 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                                    }`}
                            >
                                <FloatingCircles n={1} />
                                <div className="relative p-6 bg-white/10 backdrop-blur-2xl inherit rounded-2xl">

                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-8 border-transparent ${index % 2 === 0 ? "md:-left-4 border-r-primary" : "md:-right-4 border-l-primary"}`}></div>

                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {role} - <span className="text-gray-600">{company}</span>
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">{duration}</p>
                                    <p className="mt-2 text-gray-600">{description}</p>

                                    {/* Tech Stack */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {techStack.map((tech, i) => (
                                            <span key={i} className="bg-primary text-white px-3 py-1 rounded-lg text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Hide Arrow in Mobile View */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
