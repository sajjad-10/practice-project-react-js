import Product from "../Product/Product";
const ProductList = (props) => {
    return props.products.map((item, index) => {
        return (
            <Product
                title={item.title}
                price={item.price}
                change={(e) => props.change(e, item.id)}
                click={() => props.click(index)}
                key={item.id}
            />
        );
    });
};

export default ProductList;
