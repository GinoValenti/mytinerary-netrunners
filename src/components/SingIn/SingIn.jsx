import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './singin.css'

function SignIn() {

  const history = useNavigate()

  const [inpval, setInpval] = useState({
    email : "",
    password: ""
  })

  const [data, setData] = useState([])
  console.log(inpval)

  const getdata = (e) => {
    const {value, name} = e.target

    setInpval(()=>{
        return{
            ...inpval,
            [name] : value
        }
    })
  }

  const addData = (e) => {
    e.preventDefault()

    const getuserArr = localStorage.getItem("user")
    console.log(getuserArr)

    const {email , password} = inpval
    if (email === "") {
        alert('email field is required')
    } else if (!email.includes("@")) {
        alert('please enter valid email address')
    } else if (password === "") {
        alert('password field is required') 
    } else if (password.length < 5) {
        alert('password length must be greater than five digits')
    } else {

        if (getuserArr &&  getuserArr.length) {
            const userdata = JSON.parse(getuserArr)
            const userlogin = userdata.filter((el, k)=> {
                return el.email === email && el.password === password
            }) 

            if (userlogin.length === 0) {
                alert("invalid details")
            } else {
                localStorage.setItem("user_login", JSON.stringify(userlogin))
                
                history("/details")
            }
        }

    }
  }
    

  return (
    <div className='container-input'>
    <h2 className='text-sign'>Welcome Again!</h2>
    <div className='img-circle'></div>
            <form>
                <div className='container-input-box'>
                    <label htmlFor="email">
                        <div className='input-space'>
                            <input className='input-signup' onChange={getdata} name='email' id='email' placeholder='Email' type='email'></input>
                        </div>
                    </label>
                    <hr />
                    <label htmlFor='password'>
                        <div className='input-space'>
                            <input className='input-signup'onChange={getdata} name='password' id='password' placeholder='Password' type='password'></input>
                        </div>
                    </label>
                    <hr />
                    <button type='submit' onClick={addData} className='button-signup'>Sign In</button>
                    <p className='text-center'>Or</p>
                    <button className='btn-google'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAepJREFUSEvlVu1NAkEUnAl7Cf/UCoQOsAK1AzoQK1A6gArUCsQKtAO1A+gAK5CfJLvkmbeHgWN37w7UEOL7B/d2533OLLEn455wcXjAkmUdrRatHe9StdoZizEXELkC2QVwXAATmYJ8gTEPnM+ndQKpBPaZidwBuKhzIURGWCz6BGZl/qXAkmW9JWgxw+oIZnCuXQaeBF6CPlZjRDzIa1o72jrjZXlfg17mN01AjqF9ze3Y913k1P+qAerdYlGJMW8AziPfhnRukDgzADmtyvT7bAAsjUYX5HNwOXm26+rEAg2Bs2zk12bdyD6tvd+p34lDIbAxugZHa/4TOufJ4jetACw6KMZ8bmT7RGt7ib5KzWCC2SgCKzsBOs0rKymzGHPgwJpmkAX596VeAheHS2TKxaKd6HHI32QLIkXGi5BKvXUCksSxGZAYo2t3U/jfuZNN3o6tUzhgORVWEkiCaqPruC1lDujcMFr2tJJd0jml4OKyJC5RDVbndSLJXXPRV4HILxNpea3W3ob2TueiOp6WxRRn12QMkB+wtpPS5PKHQE4oL9HMywNQ6eyViUr106fZbME5FfWYTIbw5BOsvf3R02f9Vv/YA1QyV6K/cpj4nhtz/2uPvVRFVVCqsirrRmWp687Stn7/D/gLxTzYH1closIAAAAASUVORK5CYII="/></button>
                </div>
            </form>  
</div>
  )
}

export default SignIn