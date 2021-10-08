import React from 'react'
import {render, screen} from '@testing-library/react';
import ExpertiseItem from './ExpertiseItem';

const mockChildComponent = jest.fn();
jest.mock("../Article/Article", () => (props) => {
  mockChildComponent(props);
  return <mock-childComponent />;
});

const testData = {
  id: "1",
  date: "2010-2018",
  info: {
    company: "BSESS",
    job: "Electronic Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
  },
};

test('renders ExpertiseItem component properly', () => {
render(<ExpertiseItem data={testData}/>);
  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      title: "Electronic Engineer",
     text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
    })
  )
 })