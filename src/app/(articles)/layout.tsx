import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <article className="site-prose mx-auto px-8 sm:px-16 my-6 sm:my-12">
        {children}
      </article>
    </main>
  );
}
