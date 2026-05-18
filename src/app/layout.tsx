import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apex Exotics Cars",
  description:
    "Apex Exotics Cars is a premier exotic car dealership dedicated to providing an unparalleled selection of high-performance vehicles. With a commitment to excellence and customer satisfaction, we offer a curated collection of the world's most sought-after luxury and exotic cars. Our knowledgeable team is passionate about helping clients find their dream car, ensuring a seamless and personalized buying experience. At Apex Exotics Cars, we pride ourselves on building trust and delivering exceptional service to car enthusiasts and collectors alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex flex-1 flex-col">
            <div className="mx-auto w-full max-w-6xl">
              <Header />

              <main className="m-4 pt-20 min-w-0 max-w-full">{children}</main>
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
