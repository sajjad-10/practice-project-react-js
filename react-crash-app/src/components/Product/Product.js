import './Product.css'
const Product = (props) => {
    return (
        <div className='product'>
            {props.isAuth ? <p>Logged in!</p> : <p>Please Login!</p>}
            <p onClick={props.click}>Product Name: {props.title}</p>
            <p >Product Name: {props.price}</p>
            <p>{props.children}</p>
            <input type="text" value={props.title} onChange={props.change}></input>
        </div>
    );
};

export default Product;
