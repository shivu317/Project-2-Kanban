
import './App.css'
// import Board from './components/Board/Board'
import Board from './Components/Board/Board';


function App() {
  return (
    <>
      <div className="app">
        <div className="app_navbar">
          <h2>Kanban</h2>
        </div>
        <div className="app_outer">
          <div className="app_boards">
            <Board/>
            <Board/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
