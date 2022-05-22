import { useState } from "react";
import Board from "./Board";
import Keypad from "./Keypad";
import '../css/game.css';


const WordleContainer = () => {
    
    const [key, setKey] = useState("")

    let handleKeyPress = (text) => {
        console.log(text)
        alert(`Container received: ${text}`)
        setKey(text)
    }

return(
    <div className="game">
        <Board pressedKey = {key}/>
        <Keypad onKeyPressed = {handleKeyPress}/>
    </div>
)
}

export default WordleContainer;