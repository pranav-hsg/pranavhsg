import Contact from "./contact";
export const metadata = {
    title: "Contact | Pranav H S G",
    description: "Get in touch with me for collaboration, projects, or just to say hi!",
    openGraph: {
        title: "Contact | Pranav H S G",
        description: "Reach out to me for freelance projects, job opportunities, or technical discussions.",
        url: "https://pranavhsg.com/contact",
        siteName: "Pranav H S G | Full-Stack Developer",
        images: [
            {
                url: "https://pranavhsg.com/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S G Contact",
            },
        ],
        type: "website",
    },
};

export default function ContactPage() {
    return <Contact></Contact>
}