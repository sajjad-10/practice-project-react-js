import React, { useState, useEffect } from "react";

import Card from "../UI/Card";

import "./Search.css";

const Search = React.memo((props) => {
    const { onLoadProducts } = props;
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        const query =
            searchItem.length === 0
                ? ""
                : `?orderBy="title"&equalTo="${searchItem}"`;
        fetch(
            `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/products.json${query}`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                const loadedProducts = [];
                for (const item in responseData) {
                    loadedProducts.push({
                        id: item,
                        title: responseData[item].title,
                        amount: responseData[item].amount,
                    });
                }
                // onLoadProducts(loadedProducts);
            });
    }, [searchItem, onLoadProducts]);
    return (
        <section className="search">
            <Card>
                <div className="search-input">
                    <label>جست و جو</label>
                    <input
                        type="text"
                        value={searchItem}
                        onChange={(event) => {
                            setSearchItem(event.target.value);
                        }}
                    />
                </div>
            </Card>
        </section>
    );
});

export default Search;
