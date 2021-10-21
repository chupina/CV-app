import {configureStore} from '@reduxjs/toolkit';
import educationReducer from '../features/education/educationSlice';
import skillsSliceReducer from '../features/skills/skillsSlice';


const reducer = {
    education: educationReducer,
    skills:skillsSliceReducer
    }

export const store = configureStore({
    reducer
})