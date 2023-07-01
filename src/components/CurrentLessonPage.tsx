"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessons } from "~/app/lessons/page";

export function CurrentLessonPage() {
  const pathName = usePathname();
  const currentTitle = lessons.find((l) => l.href === pathName)?.title;
  return <Link href={pathName}>{currentTitle}</Link>;
}
