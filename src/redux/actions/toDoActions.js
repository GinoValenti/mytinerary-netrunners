import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";


const getCitiesFilter = createAsyncThunk("getCitiesFilter", async ({ cities, search ,check }) => {
  // getcitiesfilter recibe primero el nombre de la accion , el segundo argumento es una funcion callback asyncronico
  try {
    console.log(check);
    const res = await axios.get(
      `http://localhost:8000/api/${cities}?title=${search}${check.join('')}`
    );

    return { value: search, cities: res.data.allcities };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const getCities = createAsyncThunk("getCities", async (value) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/${value}`
      );
  
      return { value, cities: res.data.allcities };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });


const newCity = createAsyncThunk('newCity', async (data) => {
  let url = `${BASE_URL}/cities`
  try {
    let res = await axios.post(url,data)

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
  getCitiesFilter,
  getCities,
  newCity
};

export default toDoActions;