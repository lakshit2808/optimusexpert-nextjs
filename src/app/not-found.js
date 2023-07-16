import React from 'react'
import Image from 'next/image'
import "@/app/styles/notfound.css"
import Link from 'next/link'
const NotFound = () => {
    
  return (

<div className="bg-purple">
        

      <div className="central-body">
      <Image className="image-404" src="http://salehriaz.com/404Page/img/404.svg" height={0} width={0}/>
            <Link href="/" className="btn-go-home">GO BACK HOME</Link>
        
        </div>
         
        <div className="objects">
            <Image className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" height={0} width={0}/>
            <div className="earth-moon">
                <Image className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" height={1} width={0}/>
                <Image className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" height={0} width={0}/>
            </div>
            <div className="box_astronaut">
                <Image className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" height={0} width={0}/>
            </div>
        </div>
         
        <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>

        </div>

    </div>


  )
}

export default NotFound