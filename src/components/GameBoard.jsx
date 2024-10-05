import { useState } from "react"

let initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard({onBoxClicked,actSymbol}) {

    const [currentGB, setNewGB]= useState(initialGameBoard);

    function  handleBoxClick(rowIndex,colIndex){
        
        setNewGB(prevGB =>{
            const updatedGB= [...initialGameBoard.map((row)=>[...row])]
            // console.log(initialGameBoard[rowIndex][colIndex]);
            if (!initialGameBoard[rowIndex][colIndex]){

                updatedGB[rowIndex][colIndex]=actSymbol
            }
            return updatedGB;
        })
        initialGameBoard = currentGB;
        if (!initialGameBoard[rowIndex][colIndex]){
        onBoxClicked();
        }
    }

    return (
        <ol id="game-board">
            {
                currentGB.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=>handleBoxClick(rowIndex,colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>

                </li>)


            }

        </ol>
    )
}