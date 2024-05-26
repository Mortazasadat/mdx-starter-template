import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "MDX Blog App",
  description: "a mdx starter template for your portfolio and blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` font-sans bg-white dark:bg-black min-h-dvh`}>
        <ThemeProvider attribute="class">
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
