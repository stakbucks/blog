import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import Pretendard from "next/font/local";
import Link from "next/link";

const pretendard = Pretendard({
  src: "./fonts/PretendardVariable.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "황태환",
  description: "황태환이 누구일까",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pretendard.className}>
      <body className="mx-auto max-w-screen-xl flex flex-col  justify-center">
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
