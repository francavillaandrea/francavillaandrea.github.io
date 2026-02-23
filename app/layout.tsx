import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Andrea Francavilla | Portfolio",
    description:
        "Portfolio professionale di Andrea Francavilla: progetti web, competenze tecniche, percorso formativo e contatti.",
};

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="it">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Portfolio professionale di Andrea Francavilla: progetti web, competenze tecniche, percorso formativo e contatti." />
            </head>
            <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
                {children}
            </body>
        </html>
    );
}
