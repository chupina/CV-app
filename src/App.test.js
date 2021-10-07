import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import { render, fireEvent, screen} from './utils/testUtils'
import '@testing-library/jest-dom'
import App from './App'


test('App rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
  // verify page content for expected route
   expect(screen.getByText(/Alena Chupina/)).toBeInTheDocument()
   expect(screen.getByText(/Programmer. Creative. Innovator/)).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button'))
  const sectionAbout = screen.getAllByText(/About/);
  const sectionEducation = screen.getAllByText(/Education/);
  const sectionExperience = screen.getAllByText(/Experience/);
  const sectionFeedbacks = screen.getAllByText(/Feedbacks/);
  const sectionSkills = screen.getAllByText(/Skills/);
  const sectionContacts = screen.getAllByText(/Contacts/);
  expect(sectionAbout.length).toBe(2);
  expect(sectionEducation.length).toBe(2);
  expect(sectionExperience.length).toBe(2);
  expect(sectionFeedbacks.length).toBe(2);
  expect(sectionSkills.length).toBe(2);
  expect(sectionContacts.length).toBe(2);
   expect(screen.queryByText(/Programmer. Creative. Innovator/)).not.toBeInTheDocument()

  fireEvent.click(screen.getByText(/Go back/))
  // check that the content changed to the home page
  expect(screen.getByText(/Alena Chupina/)).toBeInTheDocument()
  expect(screen.getByText(/Programmer. Creative. Innovator/)).toBeInTheDocument()
  expect(screen.queryByText(/About/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Education/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Skills/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Contacts/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Experience/)).not.toBeInTheDocument();
})

test('redirect to home page', () => {
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
  expect(screen.getByText(/Programmer. Creative. Innovator/)).toBeInTheDocument()
  expect(screen.getByText(/Alena Chupina/)).toBeInTheDocument()
})