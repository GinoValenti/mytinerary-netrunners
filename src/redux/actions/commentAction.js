import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getAllComments = createAsyncThunk("getAllComments",async (idShow)=>{
  
  
    try {
        const res = await axios.get(
            ` http://localhost:8000/api/comments?showId=${idShow}`
        )
        console.log(res);
        return {comments:res.data.allcomments}
        
    } catch (error) {
        return {
            payload: "Error",
          }; 
          
    }
})

const postComments = createAsyncThunk("postComments", async ({data})=>{
    let url = `http://localhost:8000/api/comments`
    try {
        let res = await axios.post ( url,data)
        if(res.data.id){
            return{
                responseId: res.data.id,
      success: true,
       response:data
            }

        }else{
    return {
      success: false, 
      response:res.data.message
    }
  }
    } catch (error) {
        console.log(error);
        return {
          success: false, response:"error"
        }

    }

})

const commentAction={

    getAllComments,
    postComments

}

export default commentAction