import { findFaIcon } from "@/utils/icon-util";



export default function Skills() {
    const skills = [
        { category: "Frontend", items: ["Angular", "HTML", "CSS", "TailwindCSS", "JavaScript", "TypeScript", "React", "Next JS"] },
        { category: "Backend", items: ["Java", "Spring Boot", "Python", "Django", "Next JS"] },
        { category: "Databases", items: ["SQL", "MySQL", "PostgreSQL"] },
        { category: "Tools & DevOps", items: ["Git", "Jenkins", "Linux", "Shell Scripting"] },
        { category: "IDEs & Software", items: ["Visual Studio Code", "IntelliJ IDEA", "Pycharm", "MySQL Workbench", "Sourcetree", "Postman", "Figma"] },
        { category: "Soft Skills", items: ["Team Collaboration", "Effective Communication"] },
    ];


    return (
        <section className="min-h-screen text-gray-800 py-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-primary">Skills</h1>
                <p className="mt-4 text-lg text-gray-600">
                    My expertise across various technologies.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="container mx-auto px-6 mt-10 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {skills.map(({ category, items }, index) => (
                    <div key={index} className="card">
                        <h3 className="text-xl font-semibold">{category}</h3>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {items.map((skill, i) => {
                                const Icon = findFaIcon(skill); // Get the icon component
                                return (
                                    <span key={i} className='glassy-chip flex items-center gap-2'>
                                        {Icon}
                                        {skill}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
