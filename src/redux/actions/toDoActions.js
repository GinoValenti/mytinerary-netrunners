import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getCities = createAsyncThunk ('getCities', async (value)=>{
    try {
        
        const res = await axios.get(`${BASE_URL}/${value}`)

        console.log(res.data.allcities)
        return { value, cities : res.data.allcities }

    } catch (error) {
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})


const toDoActions={

    getCities
}


export default toDoActions;