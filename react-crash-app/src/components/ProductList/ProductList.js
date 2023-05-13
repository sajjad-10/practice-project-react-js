import Product from "../Product/Product";
const ProductList = (props) => {
    return props.products.map((item, index) => {
        return (
            <Product
                click={() => props.click(item)}
                key={item.id}
                title={item.title}
                price={item.price}
                change={(event) => props.change(event, item.id)}
                isAuth={props.isAuth}
            >
                {item.discount}%
            </Product>
        );
    });
};

export default ProductList;
