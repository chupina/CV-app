import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import CardInfo from "./CardInfo";

afterEach(cleanup);

test("renders cardInfo component properly", () => {
  render(<CardInfo title="title" text="text" url="https://www.test.com" />);
  expect(screen.getByText(/title/)).toBeInTheDocument();
  expect(screen.getByText(/text/)).toBeInTheDocument();
  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "https://www.test.com");
  expect(link).toHaveTextContent("View resource");
});
