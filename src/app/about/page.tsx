import About from "./about";
export const metadata = {
    title: "About | Pranav H S",
    description: "Learn more about me, my journey, and my passion for web development.",
    openGraph: {
        title: "About | Pranav H S",
        description: "I'm a Full-Stack Developer passionate about building fast, scalable web applications using Angular, Spring Boot, Next.js, and more!",
        url: "https://pranavhsg.com/about",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: "https://pranavhsg.com/images/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S About Page",
            },
        ],
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <>
            <About />
        </>
    )
}