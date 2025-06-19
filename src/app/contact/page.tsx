import { siteConfig } from "../config/config";
import Contact from "./contact";
export const metadata = {
    title: "Contact | Pranav H S",
    description: "Get in touch with me for collaboration, projects, or just to say hi!",
    openGraph: {
        title: "Contact | Pranav H S",
        description: "Reach out to me for freelance projects, job opportunities, or technical discussions.",
        url: siteConfig.domainURL + "contact",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: siteConfig.domainURL + "images/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S Contact",
            },
        ],
        type: "website",
    },
};

export default function ContactPage() {
    return <Contact></Contact>
}