import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react';
import CardInfo from './CardInfo';

test('renders cardInfo component properly', () => {
  render(<CardInfo title="title" text="text" url="https://www.test.com"/>)
  expect(screen.getByText(/title/)).toBeInTheDocument();
   expect(screen.getByText(/text/)).toBeInTheDocument();
   const link = screen.getByRole('link');
   expect(link).toHaveAttribute('href', 'https://www.test.com');
   expect(link).toHaveTextContent('View resource');
    })