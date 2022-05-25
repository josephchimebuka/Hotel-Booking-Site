import React from 'react'
import "./mailList.css"

function MailList() {
  return (
    <div className='MailList'>
        <h1 className="mailHeader">
            Save time, save money!
        </h1>
        <span>sign up and we'll send the best deeds to you</span>
        <div className="mailInput">
            <input type="text" placeholder="Your Email"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList