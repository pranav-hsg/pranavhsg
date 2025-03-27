export default function Experience() {
    const experiences = [
        {
            company: "Sensei Technologies",
            role: "Full Stack Developer",
            duration: "April 2022 - Present",
            date: "Apr 2022",
            description: "Developed 10+ end-to-end CRUD screens using Spring Boot and Angular. Optimized API performance, engineered a WhatsApp notification system, and contributed to Spring Data JPA.",
            techStack: ["Java", "Spring Boot", "Angular", "MySQL", "Docker"],
        },
        {
            company: "Open Source",
            role: "Contributor - Spring Data JPA",
            duration: "June 2023",
            date: "Jun 2023",
            description: "Investigated query optimization, fixed count query generation issues, and contributed code to the Spring Data JPA repository.",
            techStack: ["Java", "Spring Data", "Hibernate"],
        },
    ];

    return (
        <section className="min-h-screen bg-gray-100 text-gray-800 py-16">
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
                        <div className={`relative w-full md:w-5/12 bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>

                            {/* Hide Arrow in Mobile View */}
                            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-8 border-transparent ${index % 2 === 0 ? "md:-left-4 border-r-primary" : "md:-right-4 border-l-primary"}`}></div>

                            <h3 className="text-xl font-semibold text-gray-800">
                                {role} - <span className="text-primary">{company}</span>
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
                    </div>
                ))}
            </div>
        </section>
    );
}
