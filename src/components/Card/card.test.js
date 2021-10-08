import React from 'react'
import {render, screen} from '@testing-library/react';
import Card from './Card';

test('renders card component properly', () => {
  render(<Card type="test">test text</Card>)
  expect(screen.getByText(/test/)).toBeInTheDocument();
   expect(screen.getByText(/test text/)).toBeInTheDocument();
  })