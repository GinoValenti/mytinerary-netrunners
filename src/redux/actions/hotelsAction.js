import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from '../../api/url'
const getHotels = createAsyncThunk("getHotels", async ({string,valueSearch,valueSelect}) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/${string}?name=${valueSearch}${valueSelect}`
      );
  
      console.log(res.data.allhotels);
      return { string,valueSearch:valueSearch,valueSelect:valueSelect, hotels: res.data.allhotels };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getOnlyHotels = createAsyncThunk("getOnlyHotels", async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/hotels`
      );
  
      console.log(res.data.allhotels);
      return { hotels: res.data.allhotels };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });


  const newHotel = createAsyncThunk("newHotel", async (data) =>{
let url = `${BASE_URL}/hotels`
try{
  let res = await axios.post(url,data)
    console.log(res.data);
  if(res.data.id){

    return {
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
}catch(error){
  console.log(error);
  return {
    success: false, response:"error"
  }
}
  })
  const getHotelsByUserId = createAsyncThunk("getHotelsByUserId", async ({userId}) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/hotels?userId=${userId}`
        );
        
        console.log(res.data.allhotels);
        return { userId:userId, hotels: res.data.allhotels};
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    });

    const deleteHotel = createAsyncThunk("deleteHotel", async ({id}) => {
      try {
        const res = await axios.delete(
          `http://localhost:8000/api/hotels/${id}`
          );
          
          console.log(res.data.allhotels);
          return { hotels: res.data.allhotels };
        } catch (error) {
          console.log(error);
          return {
            payload: "Error",
          };
        }
      });

      const editHotel = createAsyncThunk("editHotel", async  ({idEdit,data})=>{
        let url = `${BASE_URL}/hotels/${idEdit}`
        try {
          let res = await axios.patch(url,data)
          if(res.data.id)  {
          return {
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
      }catch(error){
        console.log(error);
        return {
          success: false, response:"error"
        }
      }
        })
    const hotelsAction = {
      getHotels
      ,newHotel,
      getHotelsByUserId,
      deleteHotel,
      editHotel,
      getOnlyHotels
    };
    
  export default hotelsAction