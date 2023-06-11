
import React,{useState} from 'react';
import './Card.css';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../Chip/Chip';
import Dropdown from '../Dropdown/Dropdown';

export default function Card() {
    const [showDropdown,setShowDropdown]=useState(false)
  return (
    <div className='card'>
        <div className='card_top'>
            <div className='card_top_labels'>
                <Chip text="Frontend" color="green"/>
                 <Chip close text="Frontend" color="green"/> 
            </div>
            <MoreHorizontal/>
            <div className="card_top_more" onClick={()=>
              setShowDropdown(true)}>
            
            
              {showDropdown && (
            <Dropdown 
            onClose={()=>setShowDropdown(false)} >
              <div className="board_dropdown">
              <p>Delete Card</p>
              </div>
            </Dropdown>
              )}
        </div> 
        </div>
        <div className='card_title'>
            kkkk
        </div>
        <div className='card_footer'>
            <p><Clock/>6 June</p>
            <p><CheckSquare/>1/4</p>
        </div>
    </div>
  )
}


