import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ThemeToggle } from "./ThemeToggle";
import { renderWithProviders } from "../test-utils";

import type { SVGProps } from "react";

jest.mock("../icons", () => ({
  Sun: (props: SVGProps<SVGSVGElement>) => (
    <svg data-testid="sun-icon" {...props} />
  ),
  Moon: (props: SVGProps<SVGSVGElement>) => (
    <svg data-testid="moon-icon" {...props} />
  ),
}));

describe("ThemeToggle", () => {
  it("renders Sun icon when theme is dark", () => {
    renderWithProviders(<ThemeToggle />, {
      preloadedState: {
        themeToggle: { value: "dark" },
      },
    });

    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("moon-icon")).not.toBeInTheDocument();
  });

  it("renders Moon icon when theme is light", () => {
    renderWithProviders(<ThemeToggle />, {
      preloadedState: {
        themeToggle: { value: "light" },
      },
    });

    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("sun-icon")).not.toBeInTheDocument();
  });

  it("toggles theme when clicked", async () => {
    const user = userEvent.setup();

    const { store } = renderWithProviders(<ThemeToggle />, {
      preloadedState: {
        themeToggle: { value: "light" },
      },
    });

    expect(store.getState().themeToggle.value).toBe("light");

    await user.click(screen.getByRole("button"));

    expect(store.getState().themeToggle.value).toBe("dark");
  });
});
