import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent, screen, cleanup } from "./utils/testUtils";
import "@testing-library/jest-dom";
import App from "./App";

afterEach(cleanup);

test("App rendering/navigating", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  // verify page content for expected route
  expect(screen.getByText(/Alena Chupina/)).toBeInTheDocument();
  expect(
    screen.getByText(/Programmer. Creative. Innovator/)
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  expect(screen.getByTestId("inner")).toBeInTheDocument();
  expect(screen.queryByTestId("hero")).not.toBeInTheDocument();
  fireEvent.click(screen.getByText(/Go back/));
  expect(screen.getByTestId("hero")).toBeInTheDocument();
});

test("redirect to home page", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByTestId("hero")).toBeInTheDocument();
});
