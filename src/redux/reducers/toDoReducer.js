import { createReducer } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import toDoActions from "../actions/toDoActions";

const {getCitiesFilter,getCities,newCity}= toDoActions

const initialState={
    value: "",
    cities: [],
    categories: []
}

const toDoReducer = createReducer(initialState,
    (builder)=>{
        builder
        .addCase(getCitiesFilter.fulfilled,(state,action)=>{
            console.log(action.payload)
                return {
                    ...state,
                    ...action.payload
                }
        })
        .addCase(getCities.fulfilled,(state,action)=>{
            let categories = Array.from(new Set(action.payload.cities.map(city=>city.continent)))
            return {
                ...state,
                value:action.payload.value,
                categories,
                cities: action.payload.cities
            }
        })
        .addCase(newCity.fulfilled, (state,action)=> {
            if (action.payload.success) {
                state.cities.push(action.payload.response)
            }
        })
})

export default toDoReducer;