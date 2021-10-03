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
        initialState:{entities: [], loading: false, error:false},
        reducers:{},
        extraReducers: (builder) => {
        builder.addCase(fetchEducation.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.loading = false;
            state.error = false;
            })
        builder.addCase(fetchEducation.pending, (state, action) => {
            state.loading = true;
            state.error = false;
               })
        builder.addCase(fetchEducation.rejected, (state, action) => {
            state.loading = false;
            state.error= true
                })
          },
    }
)
export default educationSlice.reducer;