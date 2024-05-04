import { createSlice } from "@reduxjs/toolkit";
/*este reducer es para poder  seleccionar si es una tarea o una meta el valor que esta por default es goals pero al momento de que el 
pulse en el boton tiene que cambiar de estado */
export const optionSlice = createSlice({
  name: "option",
  initialState: {
    value: "tasks",
  },
  reducers: {
    changeOption: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeOption } = optionSlice.actions;

export default optionSlice.reducer;
