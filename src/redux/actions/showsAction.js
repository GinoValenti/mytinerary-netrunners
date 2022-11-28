import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from '../../api/url'

//la accion lo unico que hace es despachar o enviar los datos que se requieren reducir
//async thunk es como create action pero asyncrona
//para la peticion necesito que me llegue por parametro un objeto con toda la data q necesito 

  
const newShow = createAsyncThunk("newShow", async (data) =>{
  let url = `http://localhost:8000/api/shows`
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

  const getShowsByUserId = createAsyncThunk("getShowsByUserId", async ({userId}) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/shows?userId=${userId}`
        );
        
    
        return { userId:userId, shows: res.data.show};
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    });

    const deleteShow = createAsyncThunk("deleteShow", async ({id}) => {
      try {
        const res = await axios.delete(
          `http://localhost:8000/api/shows/${id}`
          );
          
         
          return { shows: res.data.show };
        } catch (error) {
          console.log(error);
          return {
            payload: "Error",
          };
        }
      });

      const editShow = createAsyncThunk("editShow", async  ({idEdit,data})=>{
        let url = `${BASE_URL}/shows/${idEdit}`
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
    const showsAction = {
    
        getShowsByUserId,
      deleteShow,
      editShow,
      newShow
    };
    
  export default showsAction