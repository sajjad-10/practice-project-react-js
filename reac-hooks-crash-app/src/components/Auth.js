import React from "react";

import Card from "./UI/Card";

import "./Auth.css";

const Auth = (props) => {
    const loginHandler = () => {};

    return (
        <div className="auth">
            <Card>
                <p>لطفا برای ادامه وارد شوید.</p>
                <button onClick={loginHandler}>ورورد</button>
            </Card>
        </div>
    );
};

export default Auth;
