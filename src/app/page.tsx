import Intro from "~/components/markdown/Intro.mdx";

export default function Home() {
  return (
    <main>
      <section className="px-8 pb-16 pt-8 sm:px-16 sm:pb-32 sm:pt-24 bg-neutral-200 dark:bg-neutral-950">
        <h1 className="font-heading text-5xl break-all sm:text-8xl lg:text-9xl !leading-[0.9] sm:!leading-[0.8] max-w-screen-2xl mx-auto">
          Rust
          <br />
          For
          <br />
          <span className="text-green-500 dark:text-green-400">Dev</span>elopers
        </h1>
      </section>
      <section className="site-prose mx-auto px-8 sm:px-16 my-12">
        <Intro />
      </section>
    </main>
  );
}
