import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

async function fetchSkillsData (){
  const response = await fetch(`http://localhost:3000/api/skills`)
  return response.json();
  }

async function postSkillsData(item) {
    const response = await fetch(`http://localhost:3000/api/skills`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }),
    });
    return response.json();
  }


export const addSkills = createAsyncThunk(
  "skills/addSkills",
  async (payload, thunkApi) => {
    const response = await postSkillsData(payload);
    return response;
  }
);

export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
    async (thunkApi) => {
        const response = await fetchSkillsData();
        console.log("server response", response)
        return response;
  }
);

const skillsSlice = createSlice({
  name: "skills",
  initialState: { entities: [], 
  loading: false,
  edit: false,
 },
  reducers: {toggleEdit(state, action){
    state.edit = !state.edit;
}},
  extraReducers: (builder) => {
    builder.addCase(addSkills.fulfilled, (state, action) => {
      state.entities.push(action.payload.skill)
      state.loading = false;
    });
    builder.addCase(addSkills.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addSkills.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(fetchSkills.fulfilled, (state, action) => {
      state.entities = action.payload.skills
      state.loading = false;
    });
    builder.addCase(fetchSkills.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSkills.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export const {toggleEdit} = skillsSlice.actions
export default skillsSlice.reducer;
