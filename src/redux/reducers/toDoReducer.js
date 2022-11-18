import { createReducer } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import toDoActions from "../actions/toDoActions";

const {getCities}= toDoActions

const initialState={
    value: "",
    cities: []
}

const toDoReducer = createReducer(initialState,
    (builder)=>{
        builder
        .addCase(getCities.fulfilled,(state,action)=>{
            console.log(action.payload)
                return action.payload;
        })
})

export default toDoReducer;