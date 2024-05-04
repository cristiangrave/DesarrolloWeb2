import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
  /*el name es el nombre de la accion  */
  name: "goals",
  initialState: {
    value: [
      {
        title: "Graduarme del TDS",
        description: "Ganar todos los cursos",
        dueDate: "01-12-24",
      },
    ],
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
