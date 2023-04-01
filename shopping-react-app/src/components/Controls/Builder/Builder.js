import "./Builder.css";
const Builder = (props) => {
    return (
        <div className="builder">
            <div>{props.title}</div>
            <button>Add</button>
            <button>Add</button>
        </div>
    );
};

export default Builder;
