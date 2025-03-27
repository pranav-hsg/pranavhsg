export default function Skills() {
    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "Angular", "HTML", "CSS", "TailwindCSS", "JavaScript", "TypeScript"] },
        { category: "Backend", items: ["Java", "Spring Boot", "Django", "Node.js", "Express.js"] },
        { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
        { category: "Tools & DevOps", items: ["Docker", "Git", "Jenkins", "Linux", "Shell Scripting"] },
    ];

    return (
        <section className="min-h-screen bg-gray-100 text-gray-800 py-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-primary">Skills</h1>
                <p className="mt-4 text-lg text-gray-600">
                    My expertise across various technologies.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="container mx-auto px-6 mt-10 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {skills.map(({ category, items }, index) => (
                    <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-primary">{category}</h3>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {items.map((skill, i) => (
                                <span key={i} className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}