
import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from'./components/Player'
import Log from './components/Log';

import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function findActiveSymbol(turn){
  let currSymbol = 'X';
  if (turn.length >0 && turn[0].pSymbol =='X'){ currSymbol= 'O'}

  return currSymbol;
}

function App() {
  const [gameturns, setGameTurns]= useState([]);

  let activeSymbol =findActiveSymbol(gameturns);
  let gameBoard =[...initialGameBoard].map(arr =>[...arr]);
  let winner;
  let hasDraw= gameturns.length ===9 && !winner;

  for (const turn in gameturns){
    const {square, pSymbol} = gameturns[turn];
    const {row, col} = square;
    gameBoard[row][col]=pSymbol;
  }

  for (const item of WINNING_COMBINATIONS){
    if (gameturns.length>2){
      let fstSymbol = gameBoard[item[0].row][item[0].column];
      let secSymbol = gameBoard[item[1].row][item[1].column];
      let thirdSymbol = gameBoard[item[2].row][item[2].column];

      if (fstSymbol && (fstSymbol == secSymbol) && (fstSymbol ==thirdSymbol)){
        winner=fstSymbol;
      }
    }
  }

  function onCellClick(rowIndex,colIndex){
    activeSymbol = findActiveSymbol(gameturns);

    setGameTurns((turn) => {
      let currSymbol = findActiveSymbol(turn);
      const currentTurn = [ {square:{row:rowIndex ,col : colIndex}, pSymbol : currSymbol},
        ...turn ];gameturns
      return currentTurn;
    });

  }
    
  function handleRematch(){
    setGameTurns([]);
  }


   return (
    <main>
      <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player  name="Player 1" playSymbol="X" selectedSymbol={activeSymbol} ></Player>
        <Player name="Player 2" playSymbol="O" selectedSymbol={activeSymbol} ></Player>
       
      </ol>
    {(winner || hasDraw) && <GameOver winner={winner} onRematchButtonClick={handleRematch}/>}
      <GameBoard onBoxClicked={onCellClick} board={gameBoard}/>
      </div>

      <Log gTurns={gameturns}/>
      
    </main>
    
  )
}

export default App
