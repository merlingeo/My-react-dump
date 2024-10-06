export default function GameOver({winner,onRematchButtonClick}){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} Won!</p>}
            {!winner && <p>It's a Draw</p>}
            <p>  <button onClick={onRematchButtonClick}>Rematch</button></p>
        </div>
    )
}