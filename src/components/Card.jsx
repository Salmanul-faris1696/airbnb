import React from 'react'
import Star from '../assets/img/Star.png'


function Card({img,imgprefix,rating,reviewCount,country,title,price,openSpots}) {
  console.log({img});
 



return (
    <div className='card'>
      <div className='card-badge'>
        {openSpots}
      </div>

        <img src={img[imgprefix]} alt={img}  className='card--img1'/>

        <div className='card--stats'>


            <img src={Star} alt=""  className='star'/>
            <span>{rating}</span>
            <span className='gray'> ({reviewCount}) • </span>
            <span className='gray'> {country}</span>
         </div>
                 
            <p className='card--title'>{title}  </p>
            
            <p> <span className='bold'>From {price}</span> / person </p>
        
            


        

    </div>
  )
}

export default Card