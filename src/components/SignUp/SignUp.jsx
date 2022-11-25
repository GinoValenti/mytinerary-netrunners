import React, {useRef, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import usersActions from '../../redux/actions/usersActions'
import alertActions from '../../redux/actions/alertaCity';
import citiesActions from '../../redux/actions/citiesActions';
import Swal from 'sweetalert2'
import './sign.css'


function SignUp() {

    let { alerta } = alertActions

    const history = useNavigate()

    let {newUser } = usersActions

    let form = useRef()

    let dispatch = useDispatch()

    let role = 'user'

    async function createNewUser() {
        
        let data = {name, lastname, photo,  age, email, password, role}
        console.log(data)
        try {
            let res = await dispatch(newUser(data))
            console.log(res)
            if (res.payload.success){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User sign Up ! Next step is to verify your account ',
                    showConfirmButton: false,
                    timer: 2500
                  })
                  
                  setName('')
                  setLastName('')
                  setAge('')
                  setPhoto('')
                  setEmail('')
                  setPassword('')
                  
            } else {
                Swal.fire({
                    position: 'center',
                    title: res.payload.response,
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
        } catch(error){
            console.log(error.message)
        }
    }


    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [photo, setPhoto] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



  return (
    <div className='cute-input-container'>
        <div onSubmit={createNewUser} className='container-input' ref={form}>
            <h2 className='text-sign'>Sign up to adventure</h2>
            <div className='img-circle'></div>
                    <div className='container-input-box'>
                        <label htmlFor='name'>
                            <div className='input-space'>
                                <input className='input-signup' value={name} onChange={(e)=> setName(e.target.value)} name='name' id='name' placeholder='name' type='text'></input>
                            </div>
                        </label>
                        <hr />
                        <label htmlFor='lastname'>
                            <div className='input-space'>
                                <input className='input-signup' value={lastname} onChange={(e)=> setLastName(e.target.value)} name='lastname' id='lastname' placeholder='lastname' type='text'></input>
                            </div>
                        </label>
                        <hr />
                        <label htmlFor='age'>
                            <div className='input-space'>
                                <input className='input-signup' value={age} onChange={(e)=> setAge(e.target.value)} name='age' id='age' placeholder='age' type='number'></input>
                            </div>
                        </label>
                        <hr />
                        <label htmlFor='photo'>
                            <div className='input-space'>
                                <input className='input-signup' value={photo} onChange={(e)=> setPhoto(e.target.value)} name='lastname' id='lastname' placeholder='photo url' type='text'></input>
                            </div>
                        </label>
                        <hr />
                        <label htmlFor="email">
                            <div className='input-space'>
                                <input className='input-signup' value={email} onChange={(e)=> setEmail(e.target.value)} name='email' id='email' placeholder='email' type='email'></input>
                            </div>
                        </label>
                        <hr />
                        <label htmlFor='password'>
                            <div className='input-space'>
                                <input className='input-signup' value={password} onChange={(e)=> setPassword(e.target.value)} name='password' id='password' placeholder='password' type='password'></input>
                            </div>
                        </label>
                        <hr />
                        <button type='submit' onClick={createNewUser} className='button-signup'>Sign Up</button>
                        <button className='btn-google'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAepJREFUSEvlVu1NAkEUnAl7Cf/UCoQOsAK1AzoQK1A6gArUCsQKtAO1A+gAK5CfJLvkmbeHgWN37w7UEOL7B/d2533OLLEn455wcXjAkmUdrRatHe9StdoZizEXELkC2QVwXAATmYJ8gTEPnM+ndQKpBPaZidwBuKhzIURGWCz6BGZl/qXAkmW9JWgxw+oIZnCuXQaeBF6CPlZjRDzIa1o72jrjZXlfg17mN01AjqF9ze3Y913k1P+qAerdYlGJMW8AziPfhnRukDgzADmtyvT7bAAsjUYX5HNwOXm26+rEAg2Bs2zk12bdyD6tvd+p34lDIbAxugZHa/4TOufJ4jetACw6KMZ8bmT7RGt7ib5KzWCC2SgCKzsBOs0rKymzGHPgwJpmkAX596VeAheHS2TKxaKd6HHI32QLIkXGi5BKvXUCksSxGZAYo2t3U/jfuZNN3o6tUzhgORVWEkiCaqPruC1lDujcMFr2tJJd0jml4OKyJC5RDVbndSLJXXPRV4HILxNpea3W3ob2TueiOp6WxRRn12QMkB+wtpPS5PKHQE4oL9HMywNQ6eyViUr106fZbME5FfWYTIbw5BOsvf3R02f9Vv/YA1QyV6K/cpj4nhtz/2uPvVRFVVCqsirrRmWp687Stn7/D/gLxTzYH1closIAAAAASUVORK5CYII="/></button>
                    </div>
        </div>
        <div className='bg-next-up'>
{/*             <h2> Welcome ! </h2> */}
        </div>
    </div>
  )
}

export default SignUp