import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import usersActions from '../../redux/actions/usersActions'
import './logoutbtn.css'
import Swal from 'sweetalert2'

function Logoutbtn() {

    
    let dispatch = useDispatch()
    let { logOut } = usersActions

    let { token } = useSelector(store => store.usuario)

    function logOutBtn(event) {
      event.preventDefault()
        Swal.fire({
            title: "You're logging out",
            text: "Are you sure ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log me out !'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Loged Out!',
                'success'
                )
                dispatch(logOut(token))
            }
          })

    }
  return (
    <button className='logOutbtn' onClick={logOutBtn}>Log Out</button>
  )
}

export default Logoutbtn