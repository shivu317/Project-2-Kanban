import React from 'react'
import { X } from 'react-feather'

export default function Editable(props) {
  return (
    <div className='editable'>
        <p>{props.text || "Add item"}</p>
        <form className='editable_edit'
        onSubmit={(e)=>{
            e.preventDefault()
            if(props.onSubmit)props.onSubmit()
        }}
        >
            <input type='text' placeholder={props.placeholder} defaultValue={props.text}/>
            <div className='editable_edit_footer'>
                <button type='submit'>
                    {props.buttonText || "Add"}
                </button>
                <X />
            </div>
        </form>
    </div>
  )
}
