import React from 'react'
import "./SearchItem.css"

function SearchItem() {
  return (
    <div className='searchItem'>
        <div className="searchImg">
            <img src="https://i.pinimg.com/originals/be/da/52/beda52562ba4cf79a15917a34200710c.jpg" 
            alt=""
            className='sImg' />
        </div>
        <div className="SIdesc">
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className='siDistance'>500m from center</span>
            <span className='siTaxiOp'>Free airport land</span>
            <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
            <span className='siFeatures'>Entire studio. 1 bathroom. 21m full bed </span>
            <h4 className='siCancelOps'>Free cancellation</h4>
            <span className='siCancelSubtitles'>You can cancel later so look into this great price today</span>
        </div>
        <div className="SIdetails">
            <div className="siRating">
              <span>Excellent</span>
              <button> 8.9</button>
            </div>
            
            <div className="SIdetailsText">
            <span className='SIprice'>$123</span>
            <span className='SItax'>Include taxes and fees</span>
            <button className='SIbutton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem