import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Card from './components/Card'
import Usa from './assets/img/Usa.png'
import wedding from './assets/img/wedding.png'
import cycle from './assets/img/cycle.png'

const carddata = [
  {
    id:1,
    img:{Usa},
    imgprefix:"Usa",
    rating:"4",
    reviewCount:"6",
    country:"india",
    title:"Life lessons with Katie Zaferes",
    price:"$100",
    openSpots:"SOLD-OUT"
  },
  {
    id:2,
    img:{wedding},
    imgprefix:"wedding",
    rating:"5.0",
    reviewCount:"30",
    country:"USA",
    title:"Learn wedding photography",
    price:"$120",
    openSpots:"ONLINE"

  },
  { id:3,
    img:{cycle},
    imgprefix:"cycle",
    rating:"4.8",
    reviewCount:"2",
    country:"Argentina",
    title:"Group mountain biking",
    price:"$50",
    openSpots:"ONLINE"

    
  },
 
]

function App() {

  return (
    <>
     <Navbar/>
     <Herosection/>
     <section className='card-list'>


     {
    carddata.map((it) => (
      <div key={it.id}>

        <Card 
        img={it.img }
        imgprefix={it.imgprefix}
        rating={it.rating}
        reviewCount={it.reviewCount}
        country={it.country}
        title={it.title}
        price={it.price}
        openSpots={it.openSpots}
        />
   

      </div>

    ))
     }
  
     </section>
    
    </>
  )
}

export default App
