import Experience from "./experience";
export const metadata = {
    title: "Experience | Pranav H S",
    description: "Explore my professional journey, work experience, and key accomplishments.",
    openGraph: {
        title: "Experience | Pranav H S",
        description: "Discover my work experience, projects, and contributions as a Full-Stack Developer specializing in Angular, Spring Boot, and Next.js.",
        url: "https://pranavhsg.com/experience",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: "https://pranavhsg.com/images/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S Experience",
            },
        ],
        type: "website",
    },
};

export default function ExperiencePage() {
    return <Experience />
}