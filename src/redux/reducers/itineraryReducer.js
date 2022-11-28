import { createReducer } from "@reduxjs/toolkit";
import itineraryAction from "../actions/itineraryAction";

const {getItinerariesUser, getAndDestroy , getAndEdit , newItinerary}= itineraryAction

const initialState={
    itineraryId : '',
    itineraryAdmin: [],
    itinerary : []
}

const itineraryReducer = createReducer(initialState,
    (builder)=>{
        builder
        .addCase(newItinerary.fulfilled,(state,action)=> {
            if (action.payload.success){
                state.itinerary.push(action.payload.response)
            }
        })
        .addCase(getItinerariesUser.fulfilled,(state,action)=>{
            console.log(action.payload)
            return {
                ...state,
                itineraryAdmin: action.payload.itinerary
            }
        })
        .addCase(getAndDestroy.fulfilled,(state,action)=>{
            return {
                ...state,
                itineraryId : action.payload.itinerary
            }
        })
        .addCase(getAndEdit.fulfilled,(state,action)=>{
            if (action.payload.success) {
                return {
                    ...state,
                    itineraryId : action.payload.itineraryId
                }
            }
        })

})

export default itineraryReducer;