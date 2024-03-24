import React from 'react'
import airbnb from "../assets/img/airbnb.png"

function Navbar() {
  return (
    <nav>
        <img src={airbnb} alt="" className='logo--nav'/>
    </nav>
  )
}
 
export default Navbar