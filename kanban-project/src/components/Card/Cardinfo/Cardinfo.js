import React from 'react'
import Modal from '../../Modal/Modal'
const Cardinfo = (props) => {
  return (
    <div>
      <Modal onClose={()=>props.onClose()}><h1>Hii there</h1></Modal>
    </div>
  )
}

export default Cardinfo
