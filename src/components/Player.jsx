import { useState } from "react"

export default function Player({...props}){
    const [isEditing, setIsEditing]= useState(false);
    const [playerName , setPlayerName]= useState(props.name);
    function handleClick(){
        setIsEditing(isEditing => !isEditing);
        
    }
    function handleNameChange(event){
        setPlayerName(event.target.value)
        // console.log('initaialName',playerName);
    }



    return(
        <li className={ props.selectedSymbol == props.playSymbol  ? "active": null}>
        <span id="player">
          {!isEditing && <span className="player-name">{playerName}</span>}
          {isEditing && <input type="text"  onChange={handleNameChange} value={playerName} required/>}
          <span className="player-symbol">{props.playSymbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    )
}