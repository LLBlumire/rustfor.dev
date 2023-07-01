"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessons } from "~/lessons";

export function NextLessonPage() {
  const pathName = usePathname();
  const currentIndex = lessons.findIndex((l) => l.href === pathName);
  if (currentIndex === -1) {
    throw new Error("NextLessonPage used on non page");
  }
  const nextIndex = currentIndex + 1;
  const nextLesson = lessons.at(nextIndex);
  if (nextLesson) {
    return (
      <Link href={nextLesson.href} className="flex gap-2 items-center">
        <span>Next Lesson: {nextLesson.title}</span>
        <MoveRight />
      </Link>
    );
  } else {
    return <></>;
  }
}
