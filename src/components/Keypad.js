import '../css/keypad.css';
import Key from './Key';

const Keypad = (props) => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"]
    return(
            <div id = "keypad">
            <div className="k1">
            {keys1.map((key, index) => {
                    return <Key key = {index} onKeyPressed = {props.onKeyPressed} text = {key} />
                })}
            </div>


            </div>
    )
}

export default Keypad;