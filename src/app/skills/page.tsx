import { siteConfig } from "../config/config";
import Skills from "./skills";
export const metadata = {
    title: "Skills | Pranav H S",
    description: "A showcase of my technical skills, tools, and technologies I specialize in.",
    openGraph: {
        title: "Skills | Pranav H S",
        description: "Explore my expertise in Angular, Spring Boot, Next.js, and other cutting-edge technologies.",
        url: siteConfig.domainURL + "skills",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: siteConfig.domainURL + "images/default-og-image.png",
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