import React from 'react'
import {render, screen} from '@testing-library/react';
import Address from './Address';

const TestData = [
    {
    id: "1",
    address: "mailto:chupina>elen@gmail.com",
    title: "chupina.elen@gmail.com",
    icon: "faEnvelope",
  },
  {
    id: "2",
    address: "https://www.twitter.com",
    title: "Twitter",
    subtitle: "https://www.twitter.com",
    icon: "faTwitter",
  }
]

test('renders address component properly', () => {
  render(<Address contactData={TestData}/>)
  expect(screen.getByText(/chupina.elen@gmail.com/)).toBeInTheDocument();
     expect(screen.getByText(/Twitter/)).toBeInTheDocument();
  })
