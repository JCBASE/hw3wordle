import '../css/keypad.css';

const Key = (props) => {
    return(
        <div className="key" id = "big"
        onClick={() => {
            props.onKeyPressed(props.text)
            alert(props.text)
        }}
        >

        <div className="bigKey"
        onClick={() => {
            props.onKeyPressed(props.text)
            alert(props.text)
        }}
></div>
{props.text}
        </div>
    )
}

export default Key;