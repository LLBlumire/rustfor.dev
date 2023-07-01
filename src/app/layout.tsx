import "~/globals.css";
import "katex/dist/katex.min.css";
import { Fira_Sans, Fira_Code, Atkinson_Hyperlegible } from "next/font/google";
import { Navbar } from "~/components/Navbar";

const sans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});
const code = Fira_Code({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-code",
});
const heading = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-heading",
});

export const metadata = {
  title: "Rust For Developers",
  description:
    "A Rust (programming language) course, not for beginners, but for mid and senior level engineers who already know a handful of languages. If your company is adopting Rust, and you want to be able to help fix bugs and do code reviews, this is the guide for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${code.variable} ${heading.variable}`}
    >
      <body className="font-sans bg-neutral-200 dark:bg-neutral-800 flex flex-col min-h-[100dvh]">
        <header className="bg-neutral-100 dark:bg-neutral-950">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
