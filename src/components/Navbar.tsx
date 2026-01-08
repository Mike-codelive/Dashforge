import { useEffect, useRef, useState } from "react";
import { SearchInput } from "./SearchInput";
import { SidebarToggle } from "./SidebarToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useAppSelector } from "../hooks";
import { Search } from "../icons";

export const Navbar = () => {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileSearchOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        searchRef.current?.contains(target) ||
        toggleButtonRef.current?.contains(target)
      ) {
        return;
      }

      setMobileSearchOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileSearchOpen]);

  useEffect(() => {
    if (!mobileSearchOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileSearchOpen]);

  return (
    <header data-testid="top-navbar">
      <div
        className={`bg-DF-surface dark:bg-DF-nav-surface-dark border-DF-outline dark:border-DF-outline-dark h-DF-nav-top dark:text-DF-nav-primary text-DF-nav-primary fixed right-0 left-0 z-10 border-b transition-[background,left,border,color] duration-300 ease-out ${isOpen ? "md:left-DF-nav-side-isopen" : "md:left-DF-sb-top"}`}
      >
        <div className="flex h-full w-full items-center justify-between px-2">
          <div className="flex items-center gap-1">
            <SidebarToggle />
            <SearchInput id="desk-search" className="hidden md:block" />
          </div>

          <div className="flex items-center gap-1">
            <button
              ref={toggleButtonRef}
              className="p-2 md:hidden"
              onClick={() => setMobileSearchOpen((v) => !v)}
              aria-label="Open search"
            >
              <Search className="h-DF-nav-icons w-DF-nav-icons" />
            </button>

            <ThemeToggle />
          </div>
        </div>

        <div
          ref={searchRef}
          className={`bg-DF-surface dark:bg-DF-nav-surface-dark p-4 transition-all duration-200 ease-out md:hidden ${
            mobileSearchOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          } `}
        >
          <SearchInput id="mobile-search" autoFocus={mobileSearchOpen} />
        </div>
      </div>
    </header>
  );
};
