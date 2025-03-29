export default function Projects() {
    const projects = [
        {
            title: "Poimapper Java Library",
            description: "A Java library for mapping and exporting Excel files with ease.",
            techStack: "Java, Apache POI, Maven",
            link: "https://github.com/pranavhs/poimapper",
        },
        {
            title: "Auto Gap Slider",
            description: "A React package for creating an automatic image slider with minimal configuration.",
            techStack: "React, TypeScript, TailwindCSS",
            link: "https://www.npmjs.com/package/auto-gap-slider",
        },
        {
            title: "WhatsApp Notification System",
            description: "A system for sending automated WhatsApp notifications with file attachments.",
            techStack: "Spring Boot, Angular, Twilio API",
            link: "#",
        },
    ];

    return (
        <section className="min-h-screen py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-primary text-center">My Projects</h1>
                <p className="text-gray-600 text-center mt-2">A showcase of my open-source contributions and innovative work.</p>

                {/* Project Cards */}
                <div className=" mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="card"
                        >
                            <h2 className="text-2xl font-semibold text-primary">{project.title}</h2>
                            <p className="text-gray-700 mt-2">{project.description}</p>
                            <p className="text-sm text-gray-500 mt-2">Tech Stack: {project.techStack}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-primary hover:underline"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
