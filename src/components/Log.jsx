export default function Log({gTurns}){
    const gameTurns = gTurns;
    console.log(gTurns);
    
    return(
            <ol id="log">
               { gameTurns.map((turn) => (
                    
                   <li key={`${turn.square.row}${turn.square.col}`}>
                        {turn.square.row}, {turn.square.col}  is selected by {turn.pSymbol}
                    </li>
               ))
            }
        </ol>
    )
}