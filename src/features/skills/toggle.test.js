import reducer, { toggleEdit } from './skillsSlice';

test('should toggle state true', () => {
  const previousState = {edit:true};
  expect(reducer(previousState, toggleEdit())).toEqual({edit:false})
})

test('should toggle state false', () => {
    const previousState = {edit:false}
    expect(reducer(previousState, toggleEdit())).toEqual({edit:true})
  })
