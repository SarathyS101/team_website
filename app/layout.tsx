import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { project } from "@/content/project";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${site.courseNumber} ${site.teamName} · ${project.name}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s · ${site.courseNumber} ${site.teamName}`,
  },
  description: project.elevatorPitch,
  openGraph: {
    title,
    description: project.elevatorPitch,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-sans flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-contrast"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="mx-auto w-full max-w-5xl flex-1 px-5 sm:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
