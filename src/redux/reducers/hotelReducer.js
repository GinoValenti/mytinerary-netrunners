import { createReducer } from "@reduxjs/toolkit";
import hotelAction from "../actions/hotelAction";

const {getHotelsFilter}= hotelAction
const initialState={
    value: "",
    hotels: [],
}
const hotelReducer = createReducer(initialState,
    (builder)=>{
        builder
        .addCase(getHotelsFilter.fulfilled,(state,action)=>{
            console.log(action.payload)
                return {
                    ...state,
                    ...action.payload
                }
        })
    
})

export default hotelReducer;