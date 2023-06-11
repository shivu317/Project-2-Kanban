import React, {useState} from 'react'
import { Type, List, Calendar, Tag, CheckSquare, Trash } from "react-feather"
import Modal from '../../Modal/Modal'
import Editable from "../../Editable/Editable"
import './Cardinfo.css'
const Cardinfo = (props) => {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959"
  ];
  const [activeColor,setactiveColor] = useState("");
  return (
  
      <Modal onClose={()=>props.onClose()}>
      <div className='cardinfo'>
      <div className='cardinfo_box'>
      <div className='cardinfo_box_title'>
      <Type/>
      Title no 1
      </div>
      <div className='cardinfo_box_body'>
      <Editable text={"Hello there"} placeholder="Enter Title"
      buttonText="Set Title"
      />
      </div>
      </div>

      <div className='cardinfo_box'>
      <div className='cardinfo_box_title'>
      <List/>
      Description
      </div>
      <div className='cardinfo_box_body'>
      <Editable 
      text={"Your Description here"}
      placeholder="Enter Description"
      buttonText="Set Desciption"
      />
      </div>
      </div>
      <div className='cardinfo_box'>
      <div className='cardinfo_box_title'>
      <Calendar/>
      Date
      </div>
      <div className='cardinfo_box_body'>
      <input type = "date"/>
      </div>
      </div>

      <div className='cardinfo_box'>
      <div className='cardinfo_box_title'>
      <Tag/>
      Lables
      </div>
      <div className='cardinfo_box_colors'>
      {
        colors.map((item,index)=> (
        <li key={index} style={{backgroundColor:item}} 
        className={item === activeColor ? "active" : ""}
      onClick={()=>setactiveColor(item)}
        />
        ))}
      </div>
      <div className='cardinfo_box_body'>
      <Editable 
      text={"Your Description here"}
      placeholder="Enter label"
      buttonText="Add Label"
      />
      </div>
      </div>
      <div className='cardinfo_box'>
      <div className='cardinfo_box_title'>
      <CheckSquare/>
      Tasks
      </div>

      <div className='cardinfo_box_progress-bar'>
      <div className='cardinfo_box_progress' style={{width:"30%"}}/>
      </div>

      <div className='cardinfo_box_list'>
      <div className='cardinfo_task'>
          <input type='checkbox' />
          <p> Task 1</p>
          <Trash/>
      </div>
      <div className='cardinfo_task'>
      <input type="checkbox"/>
      <p> Task 2</p>
      <Trash/>
      </div>
      </div>
      <div className='cardinfo_box_body'>
      <Editable 
      text={"Your Description here"}
      placeholder="Enter Task"
      buttonText="Add Task"
      />
      </div>
      </div>
      </div>
      </Modal>

  )
}

export default Cardinfo
