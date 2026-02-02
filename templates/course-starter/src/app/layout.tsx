import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Master Modern Product Design | Online Course",
  description: "Transform from beginner to professional product designer in 12 weeks. Join 5,000+ students with our comprehensive, hands-on approach.",
  keywords: ["product design", "UX design", "UI design", "online course", "design course"],
  openGraph: {
    title: "Master Modern Product Design",
    description: "Transform from beginner to professional product designer in 12 weeks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
