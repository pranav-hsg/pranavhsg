import { Briefcase, GraduationCap, Code, Award, Download } from "lucide-react";

export default function Resume() {
    return (
        <section className="min-h-screen flex items-center justify-center py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h1 className="text-5xl font-extrabold text-primary text-center">
                    My Resume
                </h1>
                <p className="text-gray-600 text-center mt-2">A glimpse of my experience, skills, and achievements.</p>

                {/* Resume Preview & Download Section */}
                <div className="flex flex-col items-center mt-6 space-y-4">
                    <p className="text-gray-500 text-sm text-center">Take a quick look at my resume or download it for later.</p>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <iframe
                            src="/resume.pdf"
                            className="w-48 h-64 border rounded-lg shadow-md"
                            title="Resume Preview"
                        ></iframe>
                        <div className="flex flex-col space-y-3">
                            <a
                                href="/resume.pdf"
                                className="bg-white border border-primary text-primary px-6 py-3 rounded-lg shadow-md hover:bg-primary hover:text-white transition text-center"
                            >
                                View Resume
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="bg-primary text-white px-6 py-3 rounded-lg shadow-md flex items-center space-x-2 hover:bg-primary-dark transition justify-center"
                            >
                                <Download size={20} />
                                <span>Download</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Resume Sections */}
                <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                    {/* Experience Section - Timeline */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-3">
                            <Briefcase className="text-primary" size={28} />
                            <h2 className="text-2xl font-semibold text-primary">Experience</h2>
                        </div>
                        <div className="mt-4 border-l-4 border-primary pl-4 space-y-6">
                            <div>
                                <h3 className="text-lg font-medium">Full Stack Developer - Sensei Technologies</h3>
                                <p className="text-sm text-gray-600">Developed multiple CRUD screens and built innovative features using Spring Boot & Angular.</p>
                                <span className="text-xs text-gray-400">2023 - Present</span>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-3">
                            <GraduationCap className="text-primary" size={28} />
                            <h2 className="text-2xl font-semibold text-primary">Education</h2>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">BSc in Computer Science</h3>
                            <p className="text-sm text-gray-600">Government First Grade College Thirthahalli</p>
                            <span className="text-xs text-gray-400">2018 - 2021</span>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-3">
                            <Code className="text-primary" size={28} />
                            <h2 className="text-2xl font-semibold text-primary">Skills</h2>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">JavaScript, TypeScript, Angular, Spring Boot, React, SQL, TailwindCSS, Git</p>
                    </div>

                    {/* Achievements Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-3">
                            <Award className="text-primary" size={28} />
                            <h2 className="text-2xl font-semibold text-primary">Achievements</h2>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Published multiple libraries on npm & Maven, contributed to Spring Data JPA, built Kashvi (Kannada Voice Assistant).</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
