import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Chart from "./Chart";

afterEach(cleanup);

const testData = [
  {
    item: {
      title: "Test1",
      level: "10",
    },
    id: 1,
  },
  {
    item: {
      title: "Test2",
      level: "20",
    },
    id: 2,
  },
];

test("renders chart correctly", () => {
  render(<Chart data={testData} />);
  expect(screen.queryAllByTestId("bar").length).toBe(2);
});
