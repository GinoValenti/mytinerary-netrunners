import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const newReaction = createAsyncThunk('newReaction', async({data, token})=>{
    
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    let url = `${BASE_URL}/reactions`

    try {
        let res = await axios.post(url,data,headers)

        if(res.data.success){
            return{
                success: true,
                response: data,
            }
        } else{
            return {
                success: false,
                response: res.data.message
            }
        }
    } catch(error) {
        return {
            success: false,
            response: 'ocurrio un error y es' + error
        }
    }
})

const reactionActions = {
    newReaction
}

export default reactionActions