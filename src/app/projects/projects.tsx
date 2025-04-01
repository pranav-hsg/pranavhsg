export default function Projects() {
    const projects = [
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
            link: "https://github.com/pranavhs/poimapper",
        },
        {
            title: "AutoGapSlider - NPM Package",
            description: "A zero-dependency, mobile-responsive React slider that automatically adjusts gaps between slides.",
            keyFeatures: [
                "Auto-adjusting slide gaps",
                "Works across all screen sizes",
                "Zero external dependencies",
            ],
            impact: "Downloaded 300+ times on NPM.",
            techStack: ["React", "JavaScript", "NPM"],
            link: "https://www.npmjs.com/package/autogapslider",
        }
    ];

    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-primary">Projects</h2>
                <p className="mt-4 text-lg text-gray-600">Some of my featured works.</p>
            </div>

            <div className="container mx-auto px-6 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(({ title, description, keyFeatures, impact, techStack, link }, index) => (
                    <div key={index} className="relative card transition duration-300 group">
                        {/* Floating Icon on Hover */}
                        <div className="absolute -top-4 -right-4 card text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
                            🚀
                        </div>

                        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                        <p className="mt-2 ">{description}</p>

                        {/* Key Features */}
                        <ul className="mt-4 text-sm  list-disc list-inside">
                            {keyFeatures.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>

                        {/* Impact */}
                        <p className="mt-4 text-sm font-medium text-primary">{impact}</p>

                        {/* Tech Stack */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {techStack.map((tech, i) => (
                                <span key={i} className="glassy-chip">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* GitHub/NPM Link */}
                        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-primary hover:underline">
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
