'use client'
import { CustomMetadataType } from '@/types/custom-metadata-types';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

export default function CustomMetadata({ title, description, image }: CustomMetadataType) {
    const pathName = usePathname();
    const fullUrl = `https://pranavhsg.com${pathName}`;
    const ogImage = image || "images/default-og-image.png";

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content="website" />
        </Head>
    );
}
