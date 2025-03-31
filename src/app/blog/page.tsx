import Blog from "./blog";
export const metadata = {
    title: "Blog | Pranav H S G",
    description: "Read my latest articles on web development, programming, and tech insights.",
    openGraph: {
        title: "Blog | Pranav H S G",
        description: "Explore my thoughts on coding, best practices, and industry trends in web development, JavaScript, and backend technologies.",
        url: "https://pranavhsg.com/blog",
        siteName: "Pranav H S G | Full-Stack Developer",
        images: [
            {
                url: "https://pranavhsg.com/default-og-image.png",
                width: 1200,
                height: 630,
                alt: "Pranav H S G Blog",
            },
        ],
        type: "website",
    },
};

export default function BlogPage() {
    return <Blog></Blog>
}