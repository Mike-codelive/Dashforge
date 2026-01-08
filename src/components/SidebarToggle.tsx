import { useAppDispatch, useAppSelector } from "../hooks";
import { RightArrow } from "../icons";
import { toggle } from "../store/sidebarSlice";

export const SidebarToggle = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <button
      className="cursor-pointer p-2 transition-opacity hover:opacity-80"
      onClick={() => dispatch(toggle())}
    >
      <RightArrow
        className={`h-DF-nav-icons w-DF-nav-icons transition-[rotate] duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};
