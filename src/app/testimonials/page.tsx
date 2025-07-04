import { siteConfig } from "../config/config";
import Testimonials from "./testimonials";

export const metadata = {
    title: "Testimonials | Pranav H S",
    description: "See what others have to say about my work and contributions!",
    openGraph: {
        title: "Testimonials | Pranav H S",
        description: "Explore testimonials from clients, colleagues, and the open-source community about my work as a Full-Stack Developer.",
        url: siteConfig.domainURL + "testimonials",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: siteConfig.domainURL + "images/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S Testimonials",
            },
        ],
        type: "website",
    },
};

export default function TestimonialsPage() {
    return <Testimonials></Testimonials>
}