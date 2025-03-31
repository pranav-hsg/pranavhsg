import Experience from "./experience";
export const metadata = {
    title: "Experience | Pranav H S G",
    description: "Explore my professional journey, work experience, and key accomplishments.",
    openGraph: {
        title: "Experience | Pranav H S G",
        description: "Discover my work experience, projects, and contributions as a Full-Stack Developer specializing in Angular, Spring Boot, and Next.js.",
        url: "https://pranavhsg.com/experience",
        siteName: "Pranav H S G | Full-Stack Developer",
        images: [
            {
                url: "https://pranavhsg.com/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S G Experience",
            },
        ],
        type: "website",
    },
};

export default function ExperiencePage() {
    return <Experience />
}