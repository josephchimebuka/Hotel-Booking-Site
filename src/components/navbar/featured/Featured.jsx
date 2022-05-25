import React from 'react'
import "./featured.css"

function Featured() {
  return (
    <div className='featured'>
     <div className="featuredItems">
         <img src="https://artfasad.com/wp-content/uploads/2022/02/krasivyye-monolitno-betonnyye-chastnyye-doma-930x620.jpg" alt="house" className='featuredImag'/>
         <div className="featuredTitles">
      <h1>Dublin</h1>
      <h2>123 properties</h2>
     </div>
     </div>


     <div className="featuredItems">
         <img src="https://netstorage-legit.akamaized.net/images/8b3c8e4b22844907.jpg?imwidth=900" alt="house" className='featuredImag' />
         <div className="featuredTitles">
      <h1>Westross</h1>
      <h2>476 properties</h2>
     </div>
     </div>


     <div className="featuredItems">
         <img src="https://artfasad.com/wp-content/uploads/2022/03/Krasivyy-Malenkiy-Dom-v-Stile-Sovremennogo-Barnkhausa-930x620.jpg" alt="house" className='featuredImag' />
         <div className="featuredTitles">
      <h1>North Cardrage</h1>
      <h2>568 properties</h2>
     </div>
     </div>
    
    </div>
  )
}

export default Featured
