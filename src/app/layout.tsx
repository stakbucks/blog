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
      <body>
        <header>
          <nav className=" pt-5 pb-2 px-5  h-15 flex justify-between border-solid border-b-2 ">
            <h1 className="font-bold text-xl">
              <Link href="/">태환's Blog</Link>
            </h1>
            <ul className="flex gap-10">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex flex-col items-center">{children}</div>
      </body>
    </html>
  );
}
