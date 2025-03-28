import Link from "next/link";

const blogPosts = [
    {
        title: "Optimizing Performance in Next.js",
        description: "A deep dive into Next.js performance optimizations and best practices.",
        date: "June 10, 2024",
        slug: "nextjs-performance",
    },
    {
        title: "Spring Boot with Docker",
        description: "Learn how to dockerize a Spring Boot application for scalable deployments.",
        date: "May 15, 2024",
        slug: "spring-boot-docker",
    },
    {
        title: "Understanding TailwindCSS Customization",
        description: "Customize TailwindCSS effectively with a focus on efficiency and design.",
        date: "April 5, 2024",
        slug: "tailwindcss-customization",
    },
];

export default function Blog() {
    return (
        <section className="min-h-screen  text-gray-800 py-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-primary">Blog</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Stay updated with my latest articles on web development, programming, and tech.
                </p>
            </div>

            {/* Blog Post List */}
            <div className="container mx-auto px-6 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(({ title, description, date, slug }) => (
                    <Link key={slug} href={`/blog/${slug}`} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-primary">{title}</h3>
                        <p className="mt-2 text-gray-600">{description}</p>
                        <p className="mt-4 text-sm text-gray-500">{date}</p>
                        <p className="mt-4 text-sm text-blue-600 font-medium hover:underline">Read More →</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
