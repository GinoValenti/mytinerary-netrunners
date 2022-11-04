import React from 'react'
import { NavLink } from 'react-router-dom'
import './user.css'

function Userbtn() {
  return (
    <>

            <ul class='btn-user'>
              <li className='btn-user-li'><a href="#" aria-haspopup="true"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhRJREFUSEvlVtFx2zAUA+gBkg3aTpBkgrYbpBukE9SZIMkEdSboCPUGtSeoM0E7gj2AidyjqViSReop17t8lD++k+QHPjwQIPFGi2+Ei1cBS/oE4CJvekNyPbWBScCSriH9AHDeA9qC/Epy6d2AG1j7/QLkt2ph8pbkwgPuAk7USr9ywTUOxVckt5mFOYCP6T35meRqDNwHHOMmz/SJIVwOFVWMfwG8A7BhCFf/Cli5myKV2u/vQd6lpkMYbWj0gw7NFRq93zVMeIDfQ/qTO/5SUq6km6x4m/MHkkZ9cY0C2z8V4xbAGaRHzmYmpJPVUv2OIfSP28n3PuD2URqgu0NzZXNtdB+wdA7JjkjjVitIpnQzjmsAjdKLqu+37AJOdEs2a3OmBrxfy873zdhs3eLqV5c0h1nnscsNyKXXsV4NPGYM3vcuqiXZDC8Q4yXIQedKMw/B5v5E0n6rqwqsg6gsjYzaKWuZ08qO4eAqAhcicGdeXKhlTJy13lWjchA4USv9fikiPSKExZhik/JjnHfik7waon4Y+JhGOzunnphrs5DZ+pmfDabVCXA7ZTAh2AvH7nt6Lj1wNruvOpdiNIeyUHe7UElAOjK3Zgh2T3tZpx3HeMjegV1OkXUqUcnoDnBHVGQxAr0b6My6J7I+8PFu5bw71TZRuxz0gS1HG2ey+3LRADxdJwMq1HNZpgdk6jf/H/AzROMLLgrQ540AAAAASUVORK5CYII="/></a>
                <ul class="dropdown" aria-label="submenu">
                  <li class='dropdown-li'><NavLink to='/signin'>Sign In</NavLink></li>
                  <li class='dropdown-li'><NavLink to='/signup'>Sign Up</NavLink></li>
                </ul>
              </li>
            </ul>
    </>
  )
}

export default Userbtn