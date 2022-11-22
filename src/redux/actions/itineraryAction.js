import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

  const getItinerariesUser = createAsyncThunk("getItinerariesUser", async ({userId}) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/itinerary/itinerary?userId=${userId}`
      );
  
      console.log(res.data.itinerary);
      return { itinerary: res.data.itinerary };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getAndDestroy = createAsyncThunk("getAndDestroy", async ({itineraryId})=> {
    try {
      const res = await axios.delete(
        `${BASE_URL}/itinerary/itineraryDelete/${itineraryId}`
      )
      return { itinerary: res.data.itinerary }
    } catch (error) {
      console.log(error)
      return {
        payload: "Error"
      }
    }
  })

  const getAndEdit = createAsyncThunk("getAndEdit", async ({data, go})=> {

    let url = `${BASE_URL}/itinerary/itineraryUpdate/${go}`
    
    try {
      let res = await axios.put(url,data)
  
      if (res.data.id){
        console.log(res.data.id)
        return {
          success: true,
          response: data,
          responseid: res.data.id
        }
      } else {
        return {
          success: false,
          response: res.data.message
        }
      }
    } catch(error) {
      return {
        success: false,
        response: 'lptm un error'
      }
    }
  })






const toDoActions = {
  getAndDestroy,
  getItinerariesUser,
  getAndEdit
};

export default toDoActions;