import React from 'react'
import {render, screen} from '@testing-library/react';
import ErrorMsg from './ErrorMsg';

test('renders ErrorMsg component properly', () => {
  render(<ErrorMsg message="test error" />)
  expect(screen.getByText(/test error/)).toBeInTheDocument();
 })