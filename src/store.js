import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./reducers/goalsSlice"; /* este se llama goals reducer pero dentro de su reduces se llama goalsSlice */
import optionReducer from "./reducers/optionSlice";
import todoReducer from "./reducers/todoSlice";
/**tiene que haber un todo reducer  */

export default configureStore({
  reducer: {
    todo: todoReducer,
    goals: goalReducer,
    option: optionReducer,
  },
});
