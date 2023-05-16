import "./Backdrop.css";
const Backdrop = (props) => {
    return props.show ? (
        <div onClick={props.click} className="backdrop"></div>
    ) : null;
};

export default Backdrop;
