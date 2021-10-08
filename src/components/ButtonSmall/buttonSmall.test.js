import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ButtonSmall from "./ButtonSmall";

afterEach(cleanup);

test("renders small button component properly", () => {
  const handleClick = jest.fn();
  render(<ButtonSmall clickHandler={handleClick}>click me</ButtonSmall>);
  fireEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(screen.getByText(/click me/)).toBeInTheDocument();
});
