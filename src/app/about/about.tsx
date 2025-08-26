import Image from "next/image";
export default function About() {
    return (
        <section className="min-h-screen text-gray-800 h-full">
            {/* Hero Section */}
            <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="md:w-1/3" >
                    <Image
                        height={312}

                        width={310}
                        src="/images/pranav.jpg"
                        alt="Pranav HS"
                        className="w-full rounded-2xl shadow-lg"
                        placeholder="blur"
                        blurDataURL='/images/pranavlqip.webp'
                    />
                </div>

                {/* Text */}
                <div className="md:w-2/3 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-primary">About Me</h1>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        I’m <span className="font-semibold text-primary">Pranav HS</span>, a passionate
                        <span className="text-primary font-medium"> Full Stack Developer</span> with expertise in
                        building scalable applications. I specialize in <span className="font-semibold">JavaScript, TypeScript, React, Angular, and Spring Boot.</span>
                        Always eager to explore new technologies and push innovation forward.
                    </p>
                </div>
            </div>

            {/* Experience & Skills */}
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-semibold text-center text-primary">Experience & Skills</h2>

                <div className="mt-8 grid md:grid-cols-2 gap-8">
                    {/* Experience */}
                    <div className="card">
                        <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
                        <ul className="mt-4 space-y-3 text-gray-600">
                            <li>💼 <span className="font-medium text-primary">Full Stack Developer</span> at Sensei Technologies</li>
                            <li>🛠 Engineered <span className="text-primary font-medium">WhatsApp Notification Systems</span></li>
                            <li>🚀 Published libraries to <span className="font-medium">npm & Maven</span></li>
                        </ul>
                    </div>

                    {/* Skills */}
                    <div className="card">
                        <h3 className="text-xl font-semibold text-gray-800">Technical Skills</h3>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {["JavaScript", "TypeScript", "React", "Angular", "Spring Boot", "TailwindCSS", "SQL"].map(skill => (
                                <span
                                    key={skill}
                                    className="glassy-chip"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center py-12 bg-secondary-light">
                <h2 className="text-2xl font-semibold text-gray-800">Want to work together?</h2>
                <p className="mt-2 text-gray-600">Feel free to reach out!</p>
                <a
                    href="/contact"
                    className="glassy-btn inline-block"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}
