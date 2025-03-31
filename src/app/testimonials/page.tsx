import Testimonials from "./testimonials";

export const metadata = {
    title: "Testimonials | Pranav H S G",
    description: "See what others have to say about my work and contributions!",
    openGraph: {
        title: "Testimonials | Pranav H S G",
        description: "Explore testimonials from clients, colleagues, and the open-source community about my work as a Full-Stack Developer.",
        url: "https://pranavhsg.com/testimonials",
        siteName: "Pranav H S G | Full-Stack Developer",
        images: [
            {
                url: "https://pranavhsg.com/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S G Testimonials",
            },
        ],
        type: "website",
    },
};

export default function TestimonialsPage() {
    return <Testimonials></Testimonials>
}