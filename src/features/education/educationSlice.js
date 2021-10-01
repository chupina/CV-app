import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

async function fetchEducationData (){
  const response = await fetch(`http://localhost:3000/api/reminders`)
  return response.json();
  }

export const fetchEducation = createAsyncThunk(
    'education/fetchEducation',
    async (thunkApi) => {
        const response = await fetchEducationData();
        return response
    },
    
)

export const educationSlice = createSlice(
    {
        name:'education',
        initialState:{entities: [], loading: false},
        reducers:{},
        extraReducers: (builder) => {
        builder.addCase(fetchEducation.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.loading = false;
            })
        builder.addCase(fetchEducation.pending, (state, action) => {
            state.loading = true;
               })
          },
    }
)
export default educationSlice.reducer;