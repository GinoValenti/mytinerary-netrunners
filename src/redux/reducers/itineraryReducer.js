import { createReducer } from "@reduxjs/toolkit";
import itineraryAction from "../actions/itineraryAction";

const {getItinerariesUser, getAndDestroy , getAndEdit}= itineraryAction

const initialState={
    itineraryId : '',
    itineraryAdmin: []
}

const itineraryReducer = createReducer(initialState,
    (builder)=>{
        builder
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