import { useState } from "react";
import { CircleX, Search } from "../icons";

type SearchInputProps = {
  id: string;
  autoFocus?: boolean;
  className?: string;
};

export const SearchInput = ({
  id,
  autoFocus,
  className = "",
}: SearchInputProps) => {
  const [value, setValue] = useState("");

  return (
    <div className={`relative w-full ${className}`}>
      <input
        autoFocus={autoFocus}
        id={id}
        className={`bg-DF-nav-search-bg-light dark:bg-DF-nav-search-bg-dark text-DF-nav-search-text-light dark:text-DF-nav-search-text-dark h-[38px] w-full appearance-none rounded-sm pr-11 transition-[padding] duration-300 focus-visible:ring-1 focus-visible:ring-blue-500/30 focus-visible:outline-none ${value ? "pl-11" : "pl-2.5"}`}
        data-testid="search-input"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {value.length > 0 && (
        <button
          type="button"
          onClick={() => setValue("")}
          className="absolute top-0 left-2.5 flex h-full items-center"
          aria-label="Clear search"
        >
          <CircleX className="animate-fadeIn animation-delay-200 cursor-pointer opacity-0" />
        </button>
      )}

      <div className="pointer-events-none absolute top-0 right-2.5 flex h-full items-center">
        <Search />
      </div>
    </div>
  );
};
