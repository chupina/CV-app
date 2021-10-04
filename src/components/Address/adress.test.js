import React from 'react'
import {render, screen} from '@testing-library/react';
import Address from './Address';



test('renders address component properly', () => {
  render(<Address/>)
  expect(screen.getByText(/chupina.elen@gmail.com/)).toBeInTheDocument();
   expect(screen.getByText(/Skype/)).toBeInTheDocument();
  expect(screen.getByText(/Twitter/)).toBeInTheDocument();
  expect(screen.getByText(/Facebook/)).toBeInTheDocument();
})
