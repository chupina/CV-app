import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Button } from "./Button";

afterEach(cleanup);

test("renders button component properly", () => {
  const handleClick = jest.fn();
  render(<Button text="click me" onClick={handleClick} />);
  fireEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(screen.getByText(/click me/)).toBeInTheDocument();
});
