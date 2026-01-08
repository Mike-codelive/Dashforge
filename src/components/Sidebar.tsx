import { useLocation } from "react-router-dom";
import { SIDEBAR_ITEMS } from "../config/sidebar.config";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Redux } from "../icons";
import { toggle } from "../store/sidebarSlice";
import { SidebarItemWithSubmenu } from "./SidebarItemWithSubmenu";

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  const location = useLocation();

  return (
    <>
      <nav
        className={`bg-DF-surface dark:bg-DF-bg-dark shadow-DF-sb-right pt-DF-sb-top absolute z-20 h-full w-0 transition-[width,background] duration-300 ease-out ${
          isOpen ? "w-DF-nav-side-isopen" : "md:w-DF-sb-left"
        }`}
      >
        <div
          className={`h-DF-sb-top bg-DF-surface dark:bg-DF-bg-dark fixed top-0 z-20 flex w-0 items-center justify-center transition-[width,background] duration-300 ease-out ${
            isOpen ? "w-DF-nav-side-isopen" : "md:w-DF-sb-left"
          }`}
        >
          <Redux
            key={location.pathname}
            className="h-DF-sb-logo w-DF-sb-logo animate-pop"
          />
        </div>

        {SIDEBAR_ITEMS.map(({ id, icon, title, items }) => (
          <SidebarItemWithSubmenu
            key={id}
            id={id}
            icon={icon}
            title={title}
            items={items}
          />
        ))}
      </nav>

      {isOpen && (
        <div
          onClick={() => dispatch(toggle())}
          className="bg-DF-nav-overlay fixed z-10 h-screen w-screen md:hidden"
        />
      )}
    </>
  );
};
