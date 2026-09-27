import type { Metadata } from "next";
import "./globals.css";
import { sitePath } from "./paths";

export const metadata: Metadata = {
  title: "Betty Wen | Mechanical Engineer",
  description: "Mechanical engineering portfolio of Betty Wen — robotics, automotive systems, simulation, prototyping, and research.",
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
