import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";
const getHotelFilter = createAsyncThunk("getHotelFilter", async ({ hotels, search }) => {
    // getcitiesfilter recibe primero el nombre de la accion , el segundo argumento es una funcion callback asyncronico
    try {

      const res = await axios.get(
        `http://localhost:8000/api/?name=${search}`
      );
  
      console.log(res.data.allhotels);
      return { value: search, hotels: res.data.allhotels };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const hotelAction = {
    getHotelFilter
  };
  
  export default hotelAction;