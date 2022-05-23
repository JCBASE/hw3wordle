import React from 'react';
import '../css/board.css';
import Letter from './Letter';

const Board = (props) => {

    //<h1>{props.pressedKey}</h1>

    return (
        <div id = "board-container">
        <div id = "board" className = "">
            <div className = "row">
            <div className = {`square ${props.pressedKey}`}><Letter /></div>
            <div className = {`square ${props.pressedKey}`}><Letter /></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
         </div>
        <div className = "row">
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
        </div>
        <div className = "row">
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
        </div>
        <div className = "row">
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
        </div>
        <div className = "row">
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
        </div>
        <div className = "row">
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
            <div className = "square"></div>
        </div>
    </div>
    </div>

    )
}

export default Board;