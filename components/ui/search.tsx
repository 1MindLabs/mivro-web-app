import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="relative ml-auto w-full max-w-[560px]">
      <input
        type="text"
        className="bg-white w-full rounded-full border border-gray-300 py-3 pl-12 pr-16 text-gray-700 shadow-sm transition focus:border-teal-500 focus:outline-none focus:ring-teal-500 dark:bg-zinc-800 dark:text-gray-700"
        placeholder="Search...."
      />
      <SearchIcon
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-500 dark:text-gray-500"
        size={24}
      />
    </div>
  );
}
