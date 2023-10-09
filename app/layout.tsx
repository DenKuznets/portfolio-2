import "./globals.css";
import type { Metadata } from "next";
import { raleway, merriweather, leagueSpartan } from "./fonts";

export const metadata: Metadata = {
    title: "Denis Kuznetsov | Frontend Developer",
    description: "I build sites with modern technics",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className={`scroll-pt-20 ${raleway.variable} ${merriweather.variable} ${leagueSpartan.variable}`}
            lang="ru"
        >
            <body
                className={` text-almostBlack text-lg first-letter:uppercase`}
            >
                {children}
            </body>
        </html>
    );
}
