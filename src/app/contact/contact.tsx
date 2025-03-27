"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
            <div className="container mx-auto px-6 lg:w-1/2 bg-white shadow-md rounded-2xl p-8">
                <h1 className="text-4xl font-bold text-primary text-center">Contact Me</h1>
                <p className="text-gray-600 text-center mt-2">Feel free to reach out. I’ll get back to you as soon as possible.</p>

                {submitted ? (
                    <div className="mt-6 text-center">
                        <p className="text-green-600 font-semibold">✅ Your message has been sent!</p>
                        <p className="text-gray-500 mt-2">I will respond shortly.</p>
                    </div>
                ) : (
                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-gray-300 focus:border-primary focus:ring-primary p-3 rounded-lg"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-gray-300 focus:border-primary focus:ring-primary p-3 rounded-lg"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border-gray-300 focus:border-primary focus:ring-primary p-3 rounded-lg"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
