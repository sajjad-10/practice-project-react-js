import { createContext, useReducer } from "react";
// import Cookies from "js-cookie";
import { setCookie, hasCookie, getCookie } from 'cookies-next';

export const CartContext = createContext();

const initialState = { cart: getCookie("cart") ? JSON.parse(getCookie("cart")) : { cartItems: [] } };

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const newItem = action.payload;
            const existingItem = state.cart.cartItems.find((item) => {
                return item.slug === newItem.slug;
            });
            const cartItems = existingItem
                ? state.cart.cartItems.map((item) =>
                      item.title === existingItem.title ? newItem : item
                  )
                : [...state.cart.cartItems, newItem];
                setCookie('cart', JSON.stringify({...state.cart, cartItems}))
            return { ...state, cart: { ...state.cart, cartItems } };
        }
        case "REMOVE_ITEM": {
            const cartItems = state.cart.cartItems.filter((item) => {
                return item.slug !== action.payload.slug;
            });
            setCookie('cart', JSON.stringify({...state.cart, cartItems}))
            return { ...state, cart: { ...state.cart, cartItems } };
        }
        default:
            return state;
    }
};

export default function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = { state, dispatch };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}
