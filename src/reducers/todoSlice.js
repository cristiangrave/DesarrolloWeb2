import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    title: "Titulo de Tasks",
    description: "Realizar Ejercicio durante 6 Meses seguidos",
    dueDate: "3/12/2024",
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
