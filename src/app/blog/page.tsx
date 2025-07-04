import { siteConfig } from "../config/config";
import Blog from "./blog";
export const metadata = {
    title: "Blog | Pranav H S",
    description: "Read my latest articles on web development, programming, and tech insights.",
    openGraph: {
        title: "Blog | Pranav H S",
        description: "Explore my thoughts on coding, best practices, and industry trends in web development, JavaScript, and backend technologies.",
        url: siteConfig.domainURL + "blog",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: siteConfig.domainURL + "images/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S Blog",
            },
        ],
        type: "website",
    },
};

export default function BlogPage() {
    return <Blog></Blog>
}