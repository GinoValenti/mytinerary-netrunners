import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";
const getHotelFilter = createAsyncThunk("getHotelFilter", async ({ hotels, search }) => {
    // getcitiesfilter recibe primero el nombre de la accion , el segundo argumento es una funcion callback asyncronico
    try {

      const res = await axios.get(
        `http://localhost:8000/api/${hotels}?title=${search}${check.join('')}`
      );
  
      console.log(res.data.allcities);
      return {value2:check, value: search, cities: res.data.allcities };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });