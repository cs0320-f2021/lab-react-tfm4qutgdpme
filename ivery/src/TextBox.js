import './App.css';

function TextBox(props) {
    const change = (event) => {
    props.change(event.target.value)
}
    return (
        <div className="TextBox">
                <label>{props.label}
                    <input type = "Text" onChange = {change}></input>
                </label>
        </div>
    );
}

export default TextBox;
