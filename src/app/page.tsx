import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-blue-500 to-cyan-500 py-16 overflow-hidden">
        {/* Optional overlay for depth */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative container mx-auto px-4 text-center">
          {/* Profile Image */}
          <div className="mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
            <Image
              src="/images/pranav.png"
              alt="Profile Image"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          <h1 className="text-5xl font-bold text-white drop-shadow-md">Pranav HS</h1>

          <p className="mt-4 text-xl text-white drop-shadow-md">
            Self-taught Full Stack Web Developer with a drive for innovation and a thirst for quick learning
          </p>

          {/* <p className="mt-2 text-white drop-shadow-md"></p> */}

          <div className="mt-8 space-x-6">
            <a
              href="https://linkedin.com/in/pranav-hsg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white text-blue-500 font-semibold rounded-full shadow hover:bg-gray-100 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pranav-hsg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white text-blue-500 font-semibold rounded-full shadow hover:bg-gray-100 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Key Projects Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2">
            Key Projects and Contributions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">
                Contributor to Spring Data JPA
              </h3>
              <p className="text-lg text-gray-600">
                Enhanced count query efficiency by refining generation logic, achieving a notable increase of 30%+ faster query execution across the application and receiving formal acknowledgment as an official contributor.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Auto gap slider : React NPM
              </h3>
              <p className="text-lg text-gray-600">
                Published a zero dependency NPM package. Achieved no partial card display for a given viewport by utilizing a custom hook to track page resize and automatically calculating margins for cards. Achieved 150+ downloads and received positive feedback.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Poimapper : Java Maven Central
              </h3>
              <p className="text-lg text-gray-600">
                Published a Java library to Maven Central. Successfully simplified the process of converting Excel rows to Java beans, eliminating the need for manual index updates and improving data processing efficiency. Streamlined Excel sheet generation, saving significant time and effort in mapping headers, and received positive feedback from the community.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2">
            Skills
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold">Tech Skills</h3>
              <p>
                Angular | JavaScript | TypeScript | HTML | CSS | Java | Spring Boot | SQL | React Basics
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Tools/Software</h3>
              <p>
                GIT | Shell script | TailwindCSS | VS Code | IntelliJ | Postman | MySQL Workbench
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Languages</h3>
              <p>English | Hindi | Kannada</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Soft Skills</h3>
              <p>Quick Learning | Team Collaboration</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2">
            Education
          </h2>
          <div className="mt-4">
            <div>
              <h3 className="text-2xl font-semibold">
                BSc (Computer Science)
              </h3>
              <p className="text-lg text-gray-600">
                Government First Grade College, Thirthahalli | 80.2% (2021)
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-white">
          &copy; {new Date().getFullYear()} Pranav HS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
