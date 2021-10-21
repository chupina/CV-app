import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import ErrorMsg from "./ErrorMsg";

afterEach(cleanup);

test("renders ErrorMsg component properly", () => {
  render(<ErrorMsg message="test error" />);
  expect(screen.getByText(/test error/)).toBeInTheDocument();
});
