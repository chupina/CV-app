import React from 'react'
import {render, screen} from '@testing-library/react';
import { Article } from './Article';



test('renders article component properly', () => {
  render(<Article title="test title" text="test text"/>)
  expect(screen.getByText(/test title/)).toBeInTheDocument();
   expect(screen.getByText(/test text/)).toBeInTheDocument();
  
})