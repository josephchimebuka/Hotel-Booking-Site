import './list.css'
import Navbar from "../../components/navbar/Navbar";
import Header from '../../header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {format} from "date-fns"
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState(location.state.date)
  return (

    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
    <div className="listTitle">
      <h1>Search</h1>
    </div>
    <div className="listItems">
      <label>Description</label>
      
      <input type="text"
      placeholder={destination} />
    </div>
    <div className="listItems">
      <label>Check in date</label>
     <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to 
     ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
    { openDate &&
       <DateRange
       onChange={items=> setDate([items.selection])}
       minDate={new Date()}
       ranges={date}
       />
    }
    </div>
    <div className="lsOption">
    <div className="listItem">
      <label>Options</label>
      <div className="lsOptionItem">
        <span>Min price <small>per night</small></span>
        <input type="number" className='lsOptionInput'/>
      </div>
      <div className="lsOptionItem">
        <span>Max price <small>per night</small></span>
        <input type="number" className='lsOptionInput'/>
      </div>
      <div className="lsOptionItem">
        <span>Adult</span>
        <input type="number" min={1} className='lsOptionInput'/>
      </div>
      <div className="lsOptionItem">
        <span>Children</span>
        <input type="number" min={0} className='lsOptionInput'/>
      </div>
      <div className="lsOptionItem">
        <span>Room</span>
        <input type="number" min={1} className='lsOptionInput'/>
      </div>
      <button>Search</button>
    </div>
    </div>
    </div>
    <div className="listResults">
    <SearchItem/>
    <SearchItem/>
    <SearchItem/> 
    </div>
         
        </div>

      </div>
    </div>

  )
}

export default List