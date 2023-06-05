import React from "react";

import Card from "../UI/Card";

import "./ProductForm.css";

const ProductForm = React.memo((props) => {
    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <section className="product-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">عنوان</label>
                        <input type="text" id="title" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">تعداد</label>
                        <input type="number" id="amount" />
                    </div>
                    <div className="product-form__actions">
                        <button type="submit">افزودن</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default ProductForm;
