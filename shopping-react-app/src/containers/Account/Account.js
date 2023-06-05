import { useState } from "react";
import Input from "../../components/Ui/Input/Input";
import Button from "../../components/Ui/Button/Button";
import "./Account.css";
const Account = () => {
    // 1-
    // const [userName, setUserName] = useState("");
    // const [userEmail, setUserEmail] = useState("");
    // const [userPassword, setUserPassword] = useState("");

    // const handleUserNameChange = (event) => {
    //     setUserName(event.target.value);
    // };

    // const handleUserEmailChange = (event) => {
    //     setUserEmail(event.target.value);
    // };

    // const handleUserPasswordChange = (event) => {
    //     setUserPassword(event.target.value);
    // };
    
    // 2-
    const [form, setForm] = useState({
        name: {
            elementType: "input",
            elementConfig: { type: "text", placeholder: "Name..." },
            value: "",
        },
        email: {
            elementType: "input",
            elementConfig: { type: "text", placeholder: "Email..." },
            value: "",
        },
        password: {
            elementType: "password",
            elementConfig: { type: "password", placeholder: "Password..." },
            value: "",
        },
    });
    const elementsArray = [];
    for (let item in form) {
        elementsArray.push({ id: item, config: form[item] });
    }

    const handleInputChange = (e, targetEl) => {
        const updatedForm = { ...form };
        const updatedEl = { ...updatedForm[targetEl] };
        updatedEl.value = e.target.value;
        updatedForm[targetEl] = updatedEl;
        setForm(updatedForm);
    };

    return (
        <div className="account">
            <h2>Account</h2>
            <form>
                {elementsArray.map((item) => {
                    // console.log(item);
                    return (
                        <Input
                            key={item.id}
                            elementType={item.config.elementType}
                            type={item.config.elementConfig.type}
                            placeholder={item.config.elementConfig.placeholder}
                            value={item.config.value}
                            onChange={(e) => handleInputChange(e, item.id)}
                        />
                    );
                })}
                <Button btnType="form">Submit</Button>
            </form>
        </div>
    );
};

export default Account;
