import { Construction } from "lucide-react";

export default function Layout() {
  return (
    <main className="grid place-items-center flex-grow">
      <div className="flex flex-col gap-4 m-8 items-center">
        <Construction size={256} />
        <h1 className="font-heading text-4xl text-center">
          Under Construction
        </h1>
      </div>
    </main>
  );
}
