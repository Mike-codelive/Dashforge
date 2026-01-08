import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useAppSelector } from "../../hooks";
import { Footer } from "../../components/Footer";

export const RootLayout = () => {
  const theme = useAppSelector((state) => state.themeToggle.value);
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isOpen);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");

      if (html.classList.length === 0) {
        html.removeAttribute("class");
      }
    }
  }, [theme]);

  return (
    <main className="bg-DF-surface dark:bg-DF-surface-dark relative h-full transition-[background] duration-300 ease-out">
      <Navbar />
      <Sidebar />
      <div
        className={`pt-DF-sb-top transition-[margin-left] duration-300 ease-out ${isSidebarOpen ? "md:ml-(--DF-nav-side-offset)" : "md:ml-DF-sb-top"}`}
      >
        <div className="bg-DF-bg-light dark:text-DF-heading dark:bg-DF-main-bg-dark h-full p-6">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};
