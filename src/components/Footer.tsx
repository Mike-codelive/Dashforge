import { useAppSelector } from "../hooks";

export const Footer = () => {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <footer>
      <div
        className={`bg-DF-surface dark:bg-DF-bg-dark text-DF-secondary flex h-[60px] items-center justify-between px-4 py-5 text-[13px] transition-[margin-left] duration-300 ease-out ${isOpen ? "md:ml-(--DF-nav-side-offset)" : "md:ml-DF-sb-top"}`}
      >
        <div> {new Date().getFullYear()} © DashForge</div>
        <div>Design & Develop by Mikecodelive</div>
      </div>
    </footer>
  );
};
