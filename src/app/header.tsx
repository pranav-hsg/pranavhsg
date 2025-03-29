"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icon library for menu and close icons
import { useActivePath } from "@/utils/user-active-path";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const isPathActive = useActivePath()
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" },
        { name: "Skills", path: "/skills" },
        // { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
        // { name: "Testimonials", path: "/testimonials" },
        // { name: "Resume", path: "/resume" },
    ];

    return (<>
        <div className="mt-10">&nbsp;</div>
        <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-primary">
                    Pranav HS
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6">
                    {links.map(({ name, path }) => (
                        <li key={path}>
                            <Link href={path} className={` hover:text-blue-500 font-medium ${isPathActive(path) ? 'text-blue-500 ' : 'text-gray-700'}`}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu - Scrollable Fix */}
            <div
                className={`fixed inset-0 bg-white/90 backdrop-blur-4xl z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-y-full"
                    } md:hidden flex flex-col items-center py-4`}
                style={{ height: "100vh" }} // Ensures full-screen height for scrolling
            >
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-6 bg-transparent">
                    <X size={28} />
                </button>

                <ul className="mt-10 w-full max-h-[80vh] overflow-y-auto space-y-4 text-center px-4 box-border">
                    {links.map(({ name, path }) => (
                        <li key={path}>
                            <Link
                                href={path}
                                className={`block  hover:text-blue-500 font-medium py-2 ${isPathActive(path) ? 'text-blue-500 ' : 'text-gray-700'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>

    </>
    );
}
