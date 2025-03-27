export default function Home() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary min-h-screen flex flex-col justify-center items-center text-center text-white p-6">
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105">
        <img src="/images/pranav.png" alt="Pranav HS" className="object-cover w-full h-full" />
      </div>

      {/* Name & Description */}
      <h1 className="text-5xl font-bold mt-6 animate-fade-in">Pranav HS</h1>
      <p className="mt-4 text-xl max-w-lg text-gray-200 leading-relaxed animate-fade-in">
        Self-taught Full Stack Web Developer with a drive for innovation and a thirst for quick learning.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex gap-4">
        <a
          href="https://linkedin.com/in/pranav-hsg"
          target="_blank"
          className="px-6 py-2 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/pranav-hsg"
          target="_blank"
          className="px-6 py-2 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
