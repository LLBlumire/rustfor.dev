import Link from "next/link";
import Lessons from "~/components/markdown/Lessons.mdx";

const lessons = [
  { href: "/lessons/01-installing-rust", title: "Installing Rust" },
  { href: "/lessons/02-move-and-copy", title: "Move and Copy" },
  { href: "/lessons/03-types-references-and-traits", title: "Types, References, and Traits" },
];

export default function Page() {
  return (
    <main>
      <section>
        <article className="site-prose mx-auto px-8 sm:px-16 my-6 sm:my-12">
          <Lessons />
        </article>
      </section>
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:text-2xl max-w-screen-2xl px-8 sm:px-16 gap-4 sm:gap-6 md:gap-8 mx-auto font-heading text-xl">
          {lessons.map(({ href, title }, i) => (
            <li key={href} className="bg-neutral-100 dark:bg-neutral-600 shadow dark:shadow-none">
              <Link href={href} className="flex p-4">
                <span className="w-8">{(i + 1).toString()}.</span>
                <span>{title}</span>
              </Link>
            </li>
          ))}
          <li className="border border-dashed border-neutral-950 dark:border-0 dark:bg-neutral-950 ">
            <div className="flex p-4">
              <span className="w-8">{(lessons.length + 1).toString()}.</span>
              <span>Coming Soon</span>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
