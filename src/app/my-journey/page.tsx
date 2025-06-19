import { siteConfig } from "../config/config";
import MyJourney from "./my-journey";

export const metadata = {
    title: "My Journey | Pranav H S",
    description: "Explore my professional journey, work experience, and key accomplishments.",
    openGraph: {
        title: "My Journey | Pranav H S",
        description: "Discover my work experience, projects, and contributions as a Full-Stack Developer specializing in Angular, Spring Boot, and Next.js.",
        url: siteConfig.domainURL + "experience",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: siteConfig.domainURL + "images/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S My Journey",
            },
        ],
        type: "website",
    },
};

export default function MyJourneyPage() {
    return <MyJourney />
}