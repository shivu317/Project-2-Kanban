import { useState } from 'react';
import './App.css'
import Board from './Components/Board/Board';
import Editable from './Components/Editable/Editable';

function App() {
  const [boards,setboards]=useState([
    {
      id:Date.now() + Math.random()*2,
      title:"To Do",
      cards:[
        {
          id:Date.now()+Math.random(),
          title:"Card 1",
          tasks:[],
          labels:[{
            text:"frontend",
            color:"blue"
          }],
          desc:"dfhdh ghj",
          date:"",
        },
        {
          id:Date.now()+Math.random(),
          title:"Card 2",
          tasks:[],
          labels:[{
            text:"backend",
            color:"brown"
          }],
          desc:"dfhdh ghj",
          date:"",
        },
      ],
    },
  ]);
    
  return (
    <>
      <div className="app">
        <div className="app_navbar">
          <h2>Kanban</h2>
        </div>
        <div className="app_outer">
          <div className="app_boards">
            {
              boards.map((item)=>(
              <Board key={item.id} board={item} /> 
              ))}
            
            <div className="app_boards_board">
            <Editable 
            displayClass="app_boards_board_add"
            text="Add Board"
            placeholder="Enter board title"
            />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
