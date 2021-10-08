import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { render, fireEvent, screen, cleanup } from "./utils/testUtils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import App from "./App";

const testData = [
  { 
    id:"1",
    date: 1,
    title: "Test1",
    text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolorLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
  },
  {
    id:"2",
    date: 2,
    title: "Test2",
    text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolorLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
  },
  {
    id:"3",
    date: 3,
    title: "Test3",
    text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.",
  },
];
//mock get request
export const handlers = [
  rest.get("http://localhost/api/educations", (req, res, ctx) => {
    return res(ctx.json(testData), ctx.delay(0));
  }),
  rest.get("http://localhost/api/skills", (req, res, ctx) => {
    return res(ctx.json({}), ctx.delay(0));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


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
