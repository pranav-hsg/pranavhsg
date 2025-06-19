import { siteConfig } from "../config/config";
import Resume from "./resume";
export const metadata = {
    title: "Resume | Pranav H S",
    description: "View my resume, showcasing my experience, skills, and professional journey.",
    openGraph: {
        title: "Resume | Pranav H S",
        description: "Explore my professional experience, skills, and projects in my resume.",
        url: siteConfig.domainURL + "resume",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: siteConfig.domainURL + "images/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S Resume",
            },
        ],
        type: "website",
    },
};

export default function ResumePage() {
    return <Resume></Resume>
}