import Link from "next/link";
import { ReactNode } from "react";
import { ChevronsRight } from "lucide-react";
import { CurrentLessonPage } from "~/components/CurrentLessonPage";
import { NextLessonPage } from "~/components/NextLessonPage";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="not-prose flex gap-2 items-center my-4 lg:my-8 underline">
        <Link href="/lessons">Lessons</Link>
        <ChevronsRight />
        <CurrentLessonPage />
      </div>
      {children}
      <div className="not-prose underline float-right my-4 lg:my-8">
        <NextLessonPage />
      </div>
    </main>
  );
}
