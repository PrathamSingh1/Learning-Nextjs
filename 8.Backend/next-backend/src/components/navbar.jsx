import { SunIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="max-w-xl mx-auto w-full bg-neutral-800 text-neutral-100 px-6 py-3 font-bold text-lg rounded-xl text-shadow-xl shadow-xl">
      <div className="flex items-center justify-between">
        Todo App
        <SunIcon />
      </div>
    </div>
  );
}
