import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import rootReducer from "./reducers/rootReducer.js";
=======
import rootReducer from "./reducers/rootReducer";
>>>>>>> 53270932bed350478ed469f239557668d45035a9

export const store= configureStore({
    reducer: rootReducer,
})