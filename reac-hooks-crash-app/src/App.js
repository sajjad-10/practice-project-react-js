import React,{useContext} from "react";
import { AuthContext } from "./context/auth-context";
import Products from "./components/Products/Products";
import Auth from "./components/Auth";
import "./App.css";

function App() {
    const authContext = useContext(AuthContext)

    let content = <Auth/>
    if (authContext.isAuth) {
     content = <Products/>
    }
    return content;
}

export default App;
