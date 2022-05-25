import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../header/Header'
import {faCircleArrowLeft,faCircleArrowRight,faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import "./hotel.css"


const Hotel=()=> {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos =[
    {
      src:'https://media.istockphoto.com/photos/interior-modern-empty-house-beautiful-living-room-without-furniture-picture-id1178089191?k=20&m=1178089191&s=170667a&w=0&h=XXLKC6czSiXER5Cbso_YUYlDVf_HAEwjeZjQvTCJl_Q='
    },
    {
      src:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
      src:'https://stylesatlife.com/wp-content/uploads/2020/01/contemporary-bedroom-interior-design.jpg.webp'
    },
    {
      src:'https://1.bp.blogspot.com/-kuc3iMTmIiA/UBZOBLOR0zI/AAAAAAAACxs/9pHYt-Wpc0s/w1200-h630-p-k-no-nu/Modern+home+interior+Brazil+1.jpg'
    },
    {
      src:'https://architecturebeast.com/wp-content/uploads/2014/08/Top_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_44.jpg'
    },
    {
      src:'https://www.idesignarch.com/wp-content/uploads/Sai-Kung-House_2.jpg'
    }
  ]

   const handleOpen =(i) =>{
    setSlideNumber(i);
    setOpen(true); 
    }

    const handleMove=(direction)=>{
      let newSlideNumber;
      if(direction=== "l"){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1
      }else{
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber +1
      }
      setSlideNumber(newSlideNumber)
    }
  return (
   
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="homeContainer">
       {open &&  
          <div className="slider">
         <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
         <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=> handleMove("l")}/>
         <div className="sliderWrapper">
           <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
         </div>
         <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=> handleMove("l")} />
          </div>
       }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
         <div className="hotelAddress">
         <FontAwesomeIcon icon={faLocationDot}/>
         <span>Elton St 125 New york</span>
         </div>
          <span className="hoteldistance">Excellent location - 500m from  center</span>
          <span className="hotelbooking">Book a stay over $114 at this property and get a free airport taxi</span> 
          <div className="hotelImages">
          {photos.map((photo,i)=>(
              <div className="hotelImageWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt=""  className='hotelImg'/>
              </div>
            ))}
         </div>
           
         
        <div className="hotelDetails">
        <div className="hotelDescription">
            <h1 className="hotelTitle">
              Stay in the heart of Krakow</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab perspiciatis porro fugit amet accusantium maxime neque dignissimos repudiandae sed, perferendis accusamus atque alias, sit quam molestias
                 asperiores maiores debitis! Neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas, voluptates placeat voluptate quos veniam dolorum magnam eligendi, nesciunt quod rem aperiam quia perferendis vel aliquam?
                  Ducimus reiciendis earum natus?</p>
          </div>
          <div className="hotelPricing">
            <h2 className="pricingTxt">Perfect for a 9-night stay</h2>
            <span>located in the real heart of krakow, this property has an excellent location of 9.8!</span>
            <span className="hotelfprice"></span> <h2> <b>$945</b> (9 per night)</h2>
            <button className="bookingbtn">Reserve or Book Now!</button>
          </div>
        </div>
        <MailList/>
        <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Hotel