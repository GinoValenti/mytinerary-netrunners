import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionAction";

const { newReaction, getReactionItinerary,feedbackReaction} = reactionActions

const initialState={
    reactions: [],
    feedback: [
        {
            name: "like",
            feedbacked: false
        },
        {
            name: "love",
            feedbacked: false
        },
        {
            name: "not-like",
            feedbacked: false
        },
        {
            name: "surprise",
            feedbacked: false
        }
    ]
}

const reactionReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(newReaction.fulfilled, (state,action)=> {
            if (action.payload.success) {
                    state.reactions.push(action.payload.response)
            }
        })
        .addCase(getReactionItinerary.fulfilled,(state,action)=>{
            console.log(action.payload.reactions)
                return { 
                    ...state,
                    reactions: action.payload.reactions
                } 
        })
        .addCase(feedbackReaction.fulfilled, (state,action)=>{
            state.feedback.forEach(reaction =>{
                if (reaction.name === action.payload.name){
                    reaction.feedbacked = !reaction.feedbacked
                }
            })
        })
    })

export default reactionReducer
