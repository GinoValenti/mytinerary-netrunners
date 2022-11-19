import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction"; 

const {getHotels}= hotelsAction

const initialState={
    hotels: [],
    valueSearch:'',
    valueSelect:'',
}

const hotelsReducer = createReducer(initialState,
    (builder)=>{
        builder

        .addCase(getHotels.fulfilled,(state,action)=>{
            console.log(action)
            return {
                ...state,
                valueSearch:action.payload.valueSearch,
                valueSelect:action.payload.valueSelect,
                hotels: action.payload.hotels
            }
            
        })
})

export default hotelsReducer;