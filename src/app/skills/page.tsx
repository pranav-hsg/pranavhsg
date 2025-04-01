import Skills from "./skills";
export const metadata = {
    title: "Skills | Pranav H S",
    description: "A showcase of my technical skills, tools, and technologies I specialize in.",
    openGraph: {
        title: "Skills | Pranav H S",
        description: "Explore my expertise in Angular, Spring Boot, Next.js, and other cutting-edge technologies.",
        url: "https://pranavhsg.com/skills",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: "https://pranavhsg.com/images/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S Skills",
            },
        ],
        type: "website",
    },
};

export default function SkillsPage() {
    return <Skills />
}