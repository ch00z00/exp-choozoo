import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exp-choozoo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 overflow-hidden">{children}</body>
    </html>
  );
}
