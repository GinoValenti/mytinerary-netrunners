import React from 'react'
import './testprofile.css'
import Swal from 'sweetalert2'
import usersActions from '../../redux/actions/usersActions'
import { useDispatch, useSelector } from 'react-redux'

function TestProfile() {

    let dispatch = useDispatch()
    let { logOut } = usersActions

    let { token } = useSelector(store => store.usuario)
    console.log(token)

    async function logOutBtn(event) {
        event.preventDefault()
        let res = await dispatch(logOut(token))
        console.log(res)
    }

  return (
    <div className='test-profile-main'>

       <button onClick={logOutBtn} className='logout-btn'>LogOut</button>     

    </div>
  )
}

export default TestProfile

/* 
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  }) */