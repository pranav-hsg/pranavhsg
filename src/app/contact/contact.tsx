"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const serviceId = "service_t5y689o";
        const templateId = "template_eiflgtk";
        const publicKey = "zQVVOCWEhxS593T_K";

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            title: 'Regarding Contact me'
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setSubmitted(true);
        } catch (error) {
            console.error("EmailJS error:", error);
            alert("Failed to send the message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center">
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
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
