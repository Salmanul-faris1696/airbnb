import React from 'react'
import Group from "../assets/img/Group.png"

function Herosection() {
  return (
    <section className='hero'>

        <img src={Group} alt="" className='hero--img' />


        <h1 className='hero--heading'> Online Experiences</h1>

        <p className='hero--text'>Join unique interactive activities led by <br />one-of-a-kind hosts—all without leaving home.
        </p>

    </section>
  )
}

export default Herosection