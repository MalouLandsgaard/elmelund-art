import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Gallery - Elmelund Art",
    description: "Gallery of Jeanette Elmelund's art",
  };

export default function GalleryLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main>
            {children}
        </main>
    );
}