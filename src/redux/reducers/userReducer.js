import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userAction";
import usersActions from "../actions/usersActions";
const { newUser } = usersActions
const {enter,enterAgain,getOneUser} = userActions
const initialState ={
    profiles : [],
    name:"",
    photo:"",
    logged:false,
    token:"",
    role:"",
id:"",
profile: []
}


const userReducer = createReducer (initialState,
    (builder)=>{
     
      
        builder   
        .addCase(newUser.fulfilled, (state, action)=> {
            if (action.payload.success) {
                state.profiles.push(action.payload.response)
            }
        })
   
        .addCase(enter.fulfilled, (state, action) => {
            //console.log(action.payload.response)
            const { success,response } = action.payload
            console.log(action.payload);
            if (success) {
                let { user,token } = response //este token es el codigo que viene del backend
                localStorage.setItem('token',JSON.stringify({token: {user: token}})) //este objeto token va a guardar
                //la propiedad con el nombre del tipo de token y el token que guarda
                let newState = {
                    ...state,
                    name: user.name,
                    photo: user.photo,
                    logged: true,
                    token: token,
                    
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    message: response
                }
                return newState
            }
        })
  
    .addCase(enterAgain.fulfilled, (state, action) => {
        //console.log(action.payload.response)
        const { success,response } = action.payload
        console.log(action.payload);
        if (success) {
            let { user,token } = response 

            let newState = {
                ...state,
                name: user.name,
                photo: user.photo,
                logged: true,
                token: token,
                role:user.role,
                id:user.id
            }
            return newState
        } else {
            let newState = {
                ...state,
                message: response
            }
            return newState
        }
    })
.addCase(getOneUser.fulfilled,(state,action)=>{
console.log(action.payload);
return{
    ...state,
profile: action.payload.user
}

})
})
    



export default userReducer
