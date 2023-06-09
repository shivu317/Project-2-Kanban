import { useState } from 'react';
import './App.css'
import Board from './components/Board/Board';
import Editable from './components/Editable/Editable';

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


  

  const addCard=(title, bid)=>{
    const card={
      id:Date.now()+Math.random(),
      title,
      labels:[],
      tasks:[],
      date:"",
      desc:"",
    };

    const index=boards.findIndex((item)=>item.id===bid)
    if(index<0) return 

    const tempBoards=[...boards]
    tempBoards[index].cards.push(card)
    setboards(tempBoards)

  }


  const removeCard = (bid, cid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    const cIndex=boards[bIndex].cards.findIndex((item)=>item.id===bid)
    if(cIndex<0) return 

    const tempBoards=[...boards]
    tempBoards[bIndex].cards.splice(cIndex, 1)
    setboards(tempBoards)
  };


  const addBoard=(title)=>{
    setboards([...boards,{
      id:Date.now()+Math.random(),
      title,
      cards:[],
    },
  ]);
  };

  const removeBoard=(bid)=>{
    const tempBoards=boards.filter((item)=>item.id !==bid)
    setboards(tempBoards)

  }
  
    
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
              <Board key={item.id} board={item}
              removeBoard={removeBoard}
              addCard={addCard}
              removeCard={removeCard}
               /> 
              ))}
            
            <div className="app_boards_board">
            <Editable 
            displayClass="app_boards_board_add"
            text="Add Board"
            placeholder="Enter board title"
            onSubmit={(value)=>addBoard(value)}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
