import React, {useState} from 'react'
import { Type, List, Calendar, Tag, CheckSquare, Trash } from "react-feather"
import Modal from '../../Modal/Modal'
import Editable from "../../Editable/Editable"
import Chip from '../../Chip/Chip'
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
  const {title, labels, desc, date, tasks} = props.card
  const [values, setValues] = useState({...props.card})

  const calculatePercent=()=>{
    if(tasks?.length==0) return "0"

    const completed=tasks?.filter((item)=>item.completed)?.length

    return (completed/tasks?.length)*100 + ""
  }

  return (
  
      <Modal onClose={()=>props.onClose()}>
      <div className='cardinfo'>
      <div className='cardinfo_box'>
      <div className='cardinfo_box_title'>
      <Type/>
      Title no 1
      </div>
      <div className='cardinfo_box_body'>
      <Editable text={title}
      default={title} 
      placeholder="Enter Title"
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
      text={desc}
      default={desc}
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
      <input type = "date" 
        defaultValue={date ? new Date(date).toISOString().substring(0,10):""}
      />
      </div>
      </div>

      <div className='cardinfo_box'>
      <div className='cardinfo_box_title'>
      <Tag/>
      Lables
      </div>

      <div className='cardinfo_box_labels'>

        {
          labels?.map((item, index)=><Chip close onClose={()=>console.log("close chip")}
            key={item.text+index}
            color={item.color}
            text={item.text}
          />)
        }
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
      text="Add label"
      placeholder="Enter label"
      buttonText="Add "
      />
      </div>
      </div>
      <div className='cardinfo_box'>
      <div className='cardinfo_box_title'>
      <CheckSquare/>
      Tasks
      </div>

      <div className='cardinfo_box_progress-bar'>
      <div className='cardinfo_box_progress' style={{width: calculatePercent()+"%"}}/>
      </div>

      <div className='cardinfo_box_list'>
      {
        tasks?.map((item)=>
        <div key ={item.id} className='cardinfo_task'>
          <input type='checkbox' defaultValue={item.completed} />
          <p>{item.text}</p>
          <Trash/>
      </div>
        )
      }
      </div>

      <div className='cardinfo_box_body'>
      <Editable 
      text="Add new Task"
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
