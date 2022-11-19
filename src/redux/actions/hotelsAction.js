import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

  const hotelsAction = {
    getHotels
  };

  export default hotelsAction