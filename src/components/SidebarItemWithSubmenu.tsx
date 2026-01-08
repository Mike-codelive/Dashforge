import { useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { ChevronDown } from "../icons/ChevronDown";
import { ICONS, type IconName } from "../icons/iconMap";
import { setActiveAccordion } from "../store/sidebarSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

type Props = {
  icon: IconName;
  id: string;
  title: string;
  items: {
    label: string;
    to: string;
  }[];
};

export const SidebarItemWithSubmenu = ({ id, icon, title, items }: Props) => {
  const Icon = ICONS[icon];
  const location = useLocation();
  const dispatch = useAppDispatch();

  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);
  const activeAccordionId = useAppSelector(
    (state) => state.sidebar.activeAccordionId,
  );

  const triggerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const isExpanded = activeAccordionId === id;

  const hasActiveRoute = items.some((item) =>
    item.to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(item.to),
  );

  useLayoutEffect(() => {
    if (!isSidebarOpen) return;
    if (hasActiveRoute) {
      dispatch(setActiveAccordion(id));
    }
  }, [isSidebarOpen, hasActiveRoute, id, dispatch]);

  useLayoutEffect(() => {
    if (isSidebarOpen || !open || !triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    setPosition({
      top: rect.top,
      left: rect.right,
    });
  }, [open, isSidebarOpen]);

  const submenuContent = (
    <>
      <li
        className={`text-md flex cursor-pointer items-center justify-between px-4 py-2 pl-2 font-semibold transition-colors ${
          hasActiveRoute
            ? "dark:text-DF-sb-item-active-dark"
            : "text-DF-sb-item-inactive group-hover:dark:text-DF-sb-item-active-dark"
        }`}
        onClick={() => {
          if (!isSidebarOpen) return;
          dispatch(setActiveAccordion(isExpanded ? null : id));
        }}
      >
        {title}
        <ChevronDown
          className={`transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </li>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
          isSidebarOpen ? (isExpanded ? "max-h-96" : "max-h-0") : "max-h-96"
        }`}
      >
        {items.map((item) => {
          const isIndexActive = item.to === "/" && location.pathname === "/";

          return (
            <li key={item.label} className="dark:text-DF-sb-item-inactive">
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  [
                    "block cursor-pointer px-4 py-2 transition-[color]",
                    "dark:hover:text-DF-sb-item-active-dark",
                    (isActive || isIndexActive) &&
                      "dark:text-DF-sb-item-active-dark font-medium",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </div>
    </>
  );

  const submenu = (
    <div
      className={`bg-DF-surface dark:bg-DF-bg-dark w-48 overflow-hidden ${
        isSidebarOpen ? "shadow-none" : "shadow-DF-sb-submenu-sw"
      }`}
      onMouseEnter={() => !isSidebarOpen && setOpen(true)}
      onMouseLeave={() => !isSidebarOpen && setOpen(false)}
    >
      <ul className="py-2 whitespace-nowrap">{submenuContent}</ul>
    </div>
  );

  return (
    <>
      <div
        ref={triggerRef}
        className="group relative flex justify-center"
        onMouseEnter={() => !isSidebarOpen && setOpen(true)}
        onMouseLeave={() => !isSidebarOpen && setOpen(false)}
      >
        <button
          type="button"
          className="flex h-[53px] w-[69px] cursor-pointer items-center justify-center rounded-md transition-colors"
        >
          <Icon
            className={`h-DF-sb-logo md:w-DF-sb-logo transition-colors ${
              hasActiveRoute
                ? "dark:text-DF-sb-item-active-dark"
                : "text-DF-sb-item-inactive group-hover:dark:text-DF-sb-item-active-dark"
            } ${!isSidebarOpen && "w-0"}`}
          />
        </button>

        {isSidebarOpen && <div className="static">{submenu}</div>}
      </div>

      {!isSidebarOpen &&
        open &&
        position &&
        createPortal(
          <div
            className="absolute"
            style={{
              top: position.top,
              left: position.left,
              zIndex: 1,
            }}
          >
            {submenu}
          </div>,
          document.body,
        )}
    </>
  );
};
