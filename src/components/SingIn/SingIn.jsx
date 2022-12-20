import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './singin.css'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import Swal from "sweetalert2";
import userActions from '../../redux/actions/userAction'
import alertActions from '../../redux/actions/alertaHotel'
function SignIn() {
let dispatch = useDispatch()
let navigate = useNavigate()
let {alerta} = alertActions
  const history = useNavigate()
  let {enter}=userActions
  let form = useRef()


  async function singIn(event) {
    event.preventDefault()
    let data = {}
    Array.from(form.current).forEach(input=>{
        if(input.name) {
            data[input.name] = input.value.trim()
            console.log(data);
        }
    })
    try {
        let res = await dispatch(enter(data))
        console.log(res)
        if (res.payload.success) {
            console.log(res);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Welcome" + " " + res.payload.response.user.name,
                showConfirmButton: false,
                timer: 1000
            })
            setTimeout(function(){
                window.location.reload();
             }, 1000); 
        
            
     
        }

        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Enter valid credentials or verify your emai',
                footer: 'Try Again'
            })
        }
    } catch(error) {
        console.log(error.message)
    }
}

    

  return (
    <div className='cute-input-container'>
        <div className='bg-next'>

        </div>
        <div className='container-input'>
        <h2 className='text-sign'>Welcome Again!</h2>
        <div className='img-circle'></div>
                <form onSubmit={singIn} ref={form}>
                    <div className='container-input-box'>
                        <label htmlFor="email">
                            <div className='input-space'>
                                <input className='input-signup' name='email' id='email' placeholder='Email' type='email'></input>
                            </div>
                        </label>
                        <hr />
                        <label htmlFor='password'>
                            <div className='input-space'>
                                <input className='input-signup' name='password' id='password' placeholder='Password' type='password'></input>
                            </div>
                        </label>
                        <hr />
                        <button type='submit'  className='button-signup'>Sign In</button>
                       
                    </div>
                </form>  
        </div>
    </div>

  )
}

export default SignIn