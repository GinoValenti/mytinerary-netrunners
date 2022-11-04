import React, {useRef, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import './sign.css'


function SignUp() {

    const history = useNavigate()

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password:""
    })

    const [data, setData] = useState([])
    console.log(inpval)

    const getdata = (e) => {
        const {value, name} = e.target

        setInpval(() => {
            return {
                ...inpval,
                [name]:value
            }
        })
    }


    const addData = (e)=>{
        e.preventDefault()

        const { name, email,password} = inpval 

        if (name == "") {
            alert('Name field is required')
        } else if (email === "") {
            alert('Email field is required')
        } else if (!email.includes("@")) {
            alert('Please enter valid email address')
        } else if (password === "" ) {
            alert('password field is required') 
        } else if (password.length < 5) {
            alert('password must have more than 5 digits')
        } else {
            history("/signin")
            localStorage.setItem("user", JSON.stringify([...data, inpval]))
        }
    }


  return (
    <div className='container-input'>
        <h2 className='text-sign'>Welcome!</h2>
        <div className='img-circle'></div>
                <form>
                    <div className='container-input-box'>
                        <label htmlFor='name'>
                            <div className='input-space'>
                                <input className='input-signup' onChange={getdata} name='name' id='name' placeholder='name' type='text'></input>
                            </div>
                        </label>

                        <hr />
                        <label htmlFor="email">
                            <div className='input-space'>
                                <input className='input-signup' onChange={getdata} name='email' id='email' placeholder='email' type='email'></input>
                            </div>
                        </label>
                        <hr />
                        <label htmlFor='password'>
                            <div className='input-space'>
                                <input className='input-signup'onChange={getdata} name='password' id='password' placeholder='password' type='password'></input>
                            </div>
                        </label>
                        <hr />
                        <button type='submit' onClick={addData} className='button-signup'>Sign Up</button>
                        <p className='text-center'>Or</p>
                        <button className='btn-google'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAepJREFUSEvlVu1NAkEUnAl7Cf/UCoQOsAK1AzoQK1A6gArUCsQKtAO1A+gAK5CfJLvkmbeHgWN37w7UEOL7B/d2533OLLEn455wcXjAkmUdrRatHe9StdoZizEXELkC2QVwXAATmYJ8gTEPnM+ndQKpBPaZidwBuKhzIURGWCz6BGZl/qXAkmW9JWgxw+oIZnCuXQaeBF6CPlZjRDzIa1o72jrjZXlfg17mN01AjqF9ze3Y913k1P+qAerdYlGJMW8AziPfhnRukDgzADmtyvT7bAAsjUYX5HNwOXm26+rEAg2Bs2zk12bdyD6tvd+p34lDIbAxugZHa/4TOufJ4jetACw6KMZ8bmT7RGt7ib5KzWCC2SgCKzsBOs0rKymzGHPgwJpmkAX596VeAheHS2TKxaKd6HHI32QLIkXGi5BKvXUCksSxGZAYo2t3U/jfuZNN3o6tUzhgORVWEkiCaqPruC1lDujcMFr2tJJd0jml4OKyJC5RDVbndSLJXXPRV4HILxNpea3W3ob2TueiOp6WxRRn12QMkB+wtpPS5PKHQE4oL9HMywNQ6eyViUr106fZbME5FfWYTIbw5BOsvf3R02f9Vv/YA1QyV6K/cpj4nhtz/2uPvVRFVVCqsirrRmWp687Stn7/D/gLxTzYH1closIAAAAASUVORK5CYII="/></button>
                    </div>
                </form>  
    </div>
  )
}

export default SignUp