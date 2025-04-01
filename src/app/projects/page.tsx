import Projects from "./projects";
export const metadata = {
    title: "Projects | Pranav H S",
    description: "A collection of my web apps, APIs, and open-source contributions.",
    openGraph: {
        title: "Projects | Pranav H S",
        description: "Explore my featured projects, including web apps, APIs, and open-source contributions in Angular, Spring Boot, and Next.js.",
        url: "https://pranavhsg.com/projects",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: "https://pranavhsg.com/images/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S Projects",
            },
        ],
        type: "website",
    },
};

export default function ProjectsPage() {
    return <><Projects /></>
}