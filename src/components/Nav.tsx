import Link from "next/link";

export default function Nav() {
  return (
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
  );
}
