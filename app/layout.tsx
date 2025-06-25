import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

// Font Imports
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Catering Website",
  description: "Semi-minimalist, semi-luxurious catering experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        poppins.variable,
        playfair.variable,
      )}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}