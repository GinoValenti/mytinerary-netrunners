import { createReducer } from "@reduxjs/toolkit";
import commentAction from "../actions/commentAction"; 
    
    const { getAllComments,postComments ,editComment, deleteAction}= commentAction

    const initialState={
        comments: [],
        id:""
    }
    const commentReducer = createReducer(initialState,
        (builder)=>{
            builder
            .addCase(getAllComments.fulfilled,(state,action)=>{
                console.log(action.payload);
                return{
                    ...state,
                    
                  comments: action.payload.comments.reverse()
                }
            })
            .addCase(postComments.fulfilled,(state,action) =>{
                 if(action.payload.success){
            
                    state.comments.push(action.payload.response)
                } 
            })
            .addCase(deleteAction.fulfilled,(state,action)=>{
                return{
                    ...state,
                    id:action.payload.id
                }
            })
            .addCase(editComment.fulfilled,(state,action)=>{
                return{
                    ...state,
                    id:action.payload.id
                }
            })

        })

        export default commentReducer