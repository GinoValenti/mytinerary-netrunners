import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction"; 

const {getHotels, newHotel}= hotelsAction

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
        .addCase(newHotel.fulfilled,(state,action) =>{
            if(action.payload.success){
                state.hotels.push(action.payload.response)
            }
        })
})

export default hotelsReducer;