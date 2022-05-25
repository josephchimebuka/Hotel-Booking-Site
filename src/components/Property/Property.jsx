import React from 'react'
import "./property.css"

function Property() {
  return (
        <div className="pList">
            <div className="pListItems">
                <img src="https://artfasad.com/wp-content/uploads/2021/07/beautiful-house-architecture-8-930x620.jpg" alt="" className='propertyImg' />
                <div className="propertyTitle">
                    <h1>Resort</h1>
                    <h2>234 Properties</h2>
                </div>
            </div>
            <div className="pListItems">
                <img src="https://cdn.homedit.com/wp-content/uploads/2020/09/Art-Collectors-Infuse-Their-New-Home-With-Curated.jpg" alt="" className='propertyImg'/>
                <div className="propertyTitle">
                    <h1>Hotels</h1>
                    <h2>234 Properties</h2>
                </div>
            </div>
            <div className="pListItems">
                <img src=" https://cdn.homedit.com/wp-content/uploads/2020/09/A-Stunning-Bay-House-Nestled-In-A-Forest-Clearing.jpg" alt="" className='propertyImg' />
                <div className="propertyTitle">
                    <h1>Resort</h1>
                    <h2>234 Properties</h2>
                </div>
            </div>
           
            <div className="pListItems">
                <img src="https://artfasad.com/wp-content/uploads/2021/07/simple-and-beautiful-house-1-930x620.jpg" alt="" className='propertyImg' />
                <div className="propertyTitle">
                    <h1>Cabin</h1>
                    <h2>234 Properties</h2>
                </div>
            </div>
            <div className="pListItems">
                <img src="https://artfasad.com/wp-content/uploads/2021/07/small-pretty-houses-3-930x620.jpg" alt="" className='propertyImg'/>
                <div className="propertyTitle">
                    <h1>Villa</h1>
                    <h2>234 Properties</h2>
                </div>
            </div>
        </div>
  )
}

export default Property