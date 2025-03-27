export default function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Tech Corp",
            feedback: "Pranav's work is outstanding! His expertise in web development helped us scale our business seamlessly.",
            image: "/images/john.jpg",
        },
        {
            name: "Sarah Lee",
            role: "Product Manager, StartupX",
            feedback: "A pleasure to work with! His attention to detail and problem-solving skills are exceptional.",
            image: "/images/sarah.jpg",
        },
        {
            name: "Michael Smith",
            role: "CTO, Innovate Inc.",
            feedback: "Highly skilled developer! His ability to handle complex projects with ease is commendable.",
            image: "/images/michael.jpg",
        },
    ];

    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-primary text-center">What People Say</h1>
                <p className="text-gray-600 text-center mt-2">Here’s what my clients and colleagues have to say.</p>

                <div className="mt-10 flex flex-wrap justify-center gap-6">
                    {testimonials.map(({ name, role, feedback, image }, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 max-w-md flex flex-col items-center text-center"
                        >
                            <img
                                src={image}
                                alt={name}
                                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary"
                            />
                            <h2 className="text-xl font-semibold">{name}</h2>
                            <p className="text-sm text-gray-500">{role}</p>
                            <p className="mt-4 text-gray-700">{feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
