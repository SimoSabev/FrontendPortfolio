import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import og from "@/public/og-image.png"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Simeon Sabev | Professional Front End Developer",
    description:
        "Explore the professional portfolio of Simeon Sabev, a Front End Developer with 2+ years of experience in crafting modern, responsive, and user-focused web applications using cutting-edge technologies.",
    keywords: [
        "Simeon Sabev",
        "Front End Developer",
        "Web Developer",
        "Portfolio",
        "Responsive Web Design",
        "Modern Web Applications",
        "JavaScript Developer",
        "React.js",
        "Next.js",
    ],
    openGraph: {
        title: "Simeon Sabev | Professional Front End Developer",
        description:
            "Welcome to the portfolio of Simeon Sabev. Discover exceptional expertise in modern web applications and interfaces for enhanced user experience.",
        url: "https://frontend-portfolio-six-kappa.vercel.app",
        siteName: "Simeon Sabev Portfolio",
        images: [
            {
                url: og.src,
                width: 1200,
                height: 630,
                alt: "Simeon Sabev - Professional Front End Developer",
                type: "image/jpeg",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    authors: [
        { name: "Simeon Sabev", url: "https://frontend-portfolio-six-kappa.vercel.app" }, // Your portfolio URL
    ],
    alternates: {
        canonical: "https://frontend-portfolio-six-kappa.vercel.app", // Ensure canonical URL
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
            <LanguageProvider defaultLanguage="en">{children}</LanguageProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
