import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Box from "./Box";
afterEach(cleanup);

test("renders box component properly", () => {
  render(<Box title="test title">Test text</Box>);
  expect(screen.getByText(/test title/)).toBeInTheDocument();
  expect(screen.getByText(/Test text/)).toBeInTheDocument();
});
