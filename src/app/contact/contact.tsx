"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { useNotify } from "@/context/notification-context";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { notify } = useNotify();
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
            notify("Sending message...", "info");
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            notify("Message sent.")
            setSubmitted(true);
        } catch (error) {
            console.error("EmailJS error:", error);
            notify("Failed to send the message. Please try again later.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="card">
                <h1 className="text-4xl font-bold text-primary text-center">Contact Me</h1>
                <p className="text-gray-600 text-center mt-2">Feel free to reach out. I’ll get back to you as soon as possible.</p>

                {submitted ? (
                    <div className="mt-6 text-center">
                        <p className="text-green-600 font-semibold"></p>
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
                            className="glassy-input"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="glassy-input"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="glassy-input"
                        ></textarea>
                        <button
                            type="submit"
                            className="ml-auto glassy-btn"
                            disabled={loading}
                        >
                            <Mail className="w-5 h-5" /> {loading ? "Sending..." : "Send Message "}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
