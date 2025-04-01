import Resume from "./resume";
export const metadata = {
    title: "Resume | Pranav H S",
    description: "View my resume, showcasing my experience, skills, and professional journey.",
    openGraph: {
        title: "Resume | Pranav H S",
        description: "Explore my professional experience, skills, and projects in my resume.",
        url: "https://pranavhsg.com/resume",
        siteName: "Pranav H S | Full-Stack Developer",
        images: [
            {
                url: "https://pranavhsg.com/images/default-og-image.png",
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