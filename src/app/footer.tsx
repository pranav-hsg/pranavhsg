import { Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="glassy-base py-3 px-4 border-t border-fuchsia-50 shadow-lg shadow-neutral-700">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                    {/* Logo & About */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-lg font-semibold">Pranav HS</h2>
                        <p className="mt-1 text-xs max-w-xs">
                            Building innovative solutions with technology.
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-medium">Follow Me</h3>
                        <div className="flex space-x-3 mt-2">
                            <a href="https://github.com/pranav-hsg" className="hover:text-white transition">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/pranav-hsg" className="hover:text-white transition">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs mt-4 border-t border-gray-600 pt-2">
                    © {new Date().getFullYear()} PranavHS. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
