import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionAction";

const { newReaction } = reactionActions

const initialState={
    reactions: []
}

const reactionReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(newReaction.fulfilled, (state,action)=> {
            if (action.payload.success) {
                    state.reactions.push(action.payload.response)
            }
        })
    })

export default reactionReducer
