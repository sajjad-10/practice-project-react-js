import "./Input.css";
const Input = (props) => {
    let inputElement = null;
    const inputClass = ["input-element"];

    if(props.inValid && props.used){
        inputClass.push('invalid')
    }

    switch (props.elementType) {
        case "input":
            inputElement = (
                <input
                    className={inputClass.join(" ")}
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
                    className={inputClass.join(" ")}
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
