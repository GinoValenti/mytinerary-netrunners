import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../api/url'

const enter = createAsyncThunk('enter', async (datos) => { //datos son el objeto que viene del formulario
    let url = `${BASE_URL}/auth/signin`
    try {
        let user = await axios.post(url,datos)
       
     console.log(user)
     if(user.data.response.user._id){

         return {
             success: true,
             response: user.data.response
         }
     }else{
        
         return {
             success: false,
             response: user.response.data.message
         }
     }
    } catch (error) {
       
        return{

            success: false,
            response: 'lptm un error'
        }
    }
})
const enterAgain = createAsyncThunk('enterAgain', async (token) => {
    let url = `${BASE_URL}/auth/token`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        let user = await axios.post(url,null,headers)
        console.log(user.data.response.user.role)
        return {
            success: true,
            response: {
                user: user.data.response.user,
                token
            }
        }
    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
})
const getOneUser = createAsyncThunk("getOneUser", async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/auth/me/${id}`
        );
        

        return { id:id, user: res.data.user};
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    });



const userActions={
    enter,
    enterAgain,
    getOneUser
}

export default userActions