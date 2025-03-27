export default function Resume() {
    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-primary text-center">My Resume</h1>
                <p className="text-gray-600 text-center mt-2">A quick glance at my experience, skills, and achievements.</p>

                {/* Download Resume Button */}
                <div className="flex justify-center mt-6">
                    <a
                        href="/resume.pdf" // Change to your actual resume link
                        download
                        className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Resume Sections */}
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {/* Experience Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-primary">Experience</h2>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <h3 className="text-lg font-medium">Full Stack Developer - Sensei Technologies</h3>
                                <p className="text-sm text-gray-600">Developed multiple CRUD screens and built innovative features using Spring Boot & Angular.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Education Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-primary">Education</h2>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <h3 className="text-lg font-medium">BSc in Computer Science</h3>
                                <p className="text-sm text-gray-600">Government First Grade College Thirthahalli</p>
                            </li>
                        </ul>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-primary">Skills</h2>
                        <p className="text-sm text-gray-600 mt-2">JavaScript, TypeScript, Angular, Spring Boot, React, SQL, TailwindCSS, Git</p>
                    </div>

                    {/* Achievements Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-primary">Achievements</h2>
                        <p className="text-sm text-gray-600 mt-2">Published multiple libraries on npm & Maven, contributed to Spring Data JPA, built Kashvi (Kannada Voice Assistant).</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
