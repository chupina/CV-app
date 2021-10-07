import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import { render, fireEvent, screen} from '../../utils/testUtils'
import '@testing-library/jest-dom'
import { Panel } from './Panel';

test('rendering sidebar properly', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Panel/>
    </Router>,
  )
  // verify page content for expected route
     
  const sectionAbout = screen.getAllByText(/About/);
  const sectionEducation = screen.getAllByText(/Education/);
  const sectionExperience = screen.getAllByText(/Experience/);
  const sectionFeedbacks = screen.getAllByText(/Feedbacks/);
  const sectionSkills = screen.getAllByText(/Skills/);
  const sectionContacts = screen.getAllByText(/Contacts/);
  expect(sectionAbout.length).toBe(1);
  expect(sectionEducation.length).toBe(1);
  expect(sectionExperience.length).toBe(1);
  expect(sectionFeedbacks.length).toBe(1);
  expect(sectionSkills.length).toBe(1);
  expect(sectionContacts.length).toBe(1);
 })
