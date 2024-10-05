export default function Log({playerName,selSymbol}){
    console.log(playerName);
    return(
        <>
        {
            playerName && <ol id="log"> 
            <h1>{playerName} selected {selSymbol}</h1>
        </ol>
        }
        </>
        
    )
}