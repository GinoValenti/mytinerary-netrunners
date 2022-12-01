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

const getReactionItinerary = createAsyncThunk("getReactionItinerary", async (itineraryId) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/reactions?itineraryId=${itineraryId}`);
        return res.data
    } catch (error) {

        return {
            payload: error.response.data,
        }
    }
  });

  const feedbackReaction = createAsyncThunk('feedbackReaction', async ({token, name, itineraryId})=> {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        const res = await axios.put(`${BASE_URL}/reactions?name=${name}&itineraryId=${itineraryId}`, null, headers)
        return res.data
    } catch(error) {
        return {
            payload: error.response.data
        }
    }
})
const reactionActions = {
    newReaction,
    getReactionItinerary,
    feedbackReaction
}

export default reactionActions