import Image from "next/image";
import profileImg from "../../public/images/taehwan.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-10 grid grid-cols-2 gap-12">
      <Image
        className="place-self-end"
        alt="프로필사진"
        src={profileImg}
        width={220}
        height={220}
        priority
      />
      <div className="py-3 flex flex-col justify-between">
        <p>
          <h1 className="text-5xl font-medium">{"황태환"}</h1>
          <h2 className="text-lg">{"Frontend Developer"}</h2>
          <h3 className="text-sm font-light">
            {"안녕하세요. 문제해결형 개발자 황태환입니다."}
          </h3>
        </p>
        <Link href="/contact">
          <button className="bg-yellow-500 rounded-full py-1 px-3 ">
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}
