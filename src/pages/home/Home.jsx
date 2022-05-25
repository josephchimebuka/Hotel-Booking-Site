import React from 'react'
import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from '../../header/Header'
import Featured from '../../components/navbar/featured/Featured'
import Property from '../../components/Property/Property'
import FavouriteProp from '../../components/favouriteProperty/FavouriteProp'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'
function home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
    <Featured/>
    <h1 className="homeTitle">
          Browse by property type
        </h1>
        <Property/>
        <h1 className="homeTitle">
         Homes guests love
        </h1>
        <FavouriteProp/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default home