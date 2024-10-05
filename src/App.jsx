
import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from'./components/Player'
import Log from './components/Log';
function App() {
  const [activeSymbol,setActiveSymbol]= useState('X');
  const [activePlayer, setActivePlayer]= useState()
  function onCellClick(){
    setActiveSymbol(prevSymbol => (prevSymbol =='X'? 'O':'X'))
    console.log(activeSymbol);


  }
  let logComponent ='';
  function clickedplayerName(pname){
    console.log('1');
    console.log(pname);
    setActivePlayer(pname => pname)
    logComponent = <Log playerName={activePlayer} selSymbol={activeSymbol}/>


  }
  return (
    <main>
      {logComponent=''}
      <div id="game-container">

      <ol id="players" className='highlight-player'>
        <Player  name="Player 1" playSymbol="X" selectedSymbol={activeSymbol} handlePlayerName={clickedplayerName}></Player>
        <Player name="Player 2" playSymbol="O" selectedSymbol={activeSymbol} handlePlayerName={clickedplayerName} ></Player>
       
      </ol>
      <GameBoard onBoxClicked={onCellClick} actSymbol={activeSymbol}/>
      
      </div>
    </main>
    
  )
}

export default App
