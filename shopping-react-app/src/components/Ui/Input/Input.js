import "./Input.css";
const Input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case "input":
            inputElement = (
                <input
                    className="input-element"
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            );
            break;
        case "password":
            inputElement = (
                <input
                    className="input-element"
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            );
            break;
        default:
            inputElement = <input className="input-element" {...props} />;
    }
    return <div className="input">{inputElement}</div>;
};

export default Input;
