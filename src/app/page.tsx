import Image from "next/image";
import Intro from "~/components/markdown/Intro.mdx";

export default function Home() {
  return (
    <main>
      <section className="px-8 pb-16 pt-8 sm:px-16 sm:pb-32 sm:pt-24 bg-neutral-200 dark:bg-neutral-950">
        <div className="flex w-full justify-between items-center max-w-screen-2xl mx-auto">
          <h1 className="font-heading text-5xl break-all sm:text-8xl lg:text-9xl !leading-[0.9] sm:!leading-[0.8]">
            Rust
            <br />
            For
            <br />
            <span className="text-green-500 dark:text-green-400">Dev</span>
            elopers
          </h1>
          <div className="w-52 h-52 hidden lg:block relative">
            <Image
              src="/icon-512.png"
              alt=""
              className=""
              quality={100}
              fill={true}
            />
          </div>
        </div>
      </section>
      <section className="site-prose mx-auto px-8 sm:px-16 my-6 sm:my-12">
        <Intro />
      </section>
    </main>
  );
}
