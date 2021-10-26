import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render,screen, cleanup} from "../../utils/testUtils";
import { BrowserRouter } from "react-router-dom";
import TimeLine from "./TimeLine";

afterEach(cleanup);

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
// export const handlers = [
//   rest.get("http://localhost/api/educations", (req, res, ctx) => {
//     return res(ctx.json(testData), ctx.delay(0));
//   }),
// ];

// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

test("properly show timeline section initially", async () => {
  render(
    <BrowserRouter>
      <TimeLine data={testData} />
     </BrowserRouter>
  );
  expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
});

test("should render data timeline", async () => {
  render(
    <BrowserRouter>
      <TimeLine data={testData} />
    </BrowserRouter>
  );
  expect(await screen.findByText("Test1")).toBeInTheDocument();
  expect(await screen.findByText("Test2")).toBeInTheDocument();
  expect(await screen.findByText("Test3")).toBeInTheDocument();
  });
