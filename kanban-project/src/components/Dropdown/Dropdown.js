import React from 'react';
import { useEffect } from 'react';

export default function Dropdown(props) {
    const dropdownRef=useRef()

    const handleClick=(event)=>{
    if (dropdownRef && !dropdownRef.current.conatains(event.target)){
      if (props.onClose) props.onClose();
    }
    };

    useEffect(()=>{
        document.addEventListener('click',handleClick)
        return()=>{
            document.remove
        }
    })

  return (
    <div ref {dropdownRef} className="dropdown">
         style= {{position:"absolute",
         top:"100%",
         right;"0"
    }}
         
        {props.children}
    </div>
  )
}


