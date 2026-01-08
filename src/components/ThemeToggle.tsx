import { Button } from "./Button";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggle } from "../store/themeToggleSlice";
import { Moon, Sun } from "../icons";

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeToggle.value);

  return (
    <Button
      className="h-DF-nav-icons-shadow hover:bg-DF-bg-icon dark:hover:bg-DF-bg-icon-dark w-DF-nav-icons-shadow flex cursor-pointer items-center justify-center rounded-full transition-colors duration-500 ease-in"
      onClick={() => dispatch(toggle())}
    >
      {theme === "dark" ? (
        <Sun className="h-DF-nav-icons w-DF-nav-icons" />
      ) : (
        <Moon className="h-DF-nav-icons w-DF-nav-icons" />
      )}
    </Button>
  );
};
