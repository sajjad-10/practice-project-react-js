import { useState } from "react";
import axios from "../../axios-orders";
import Input from "../../components/Ui/Input/Input";
import Button from "../../components/Ui/Button/Button";
import "./Account.css";
const Account = () => {
    const [form, setForm] = useState({
        name: {
            elementType: "input",
            elementConfig: { type: "text", placeholder: "Name..." },
            value: "",
            validation: {
                required: true,
                // min: 4,
                // max:10
            },
            valid: false,
            used: false,
        },
        email: {
            elementType: "input",
            elementConfig: { type: "text", placeholder: "Email..." },
            value: "",
            validation: {
                required: true,
            },
            valid: false,
            used: false,
        },
        password: {
            elementType: "password",
            elementConfig: { type: "password", placeholder: "Password..." },
            value: "",
            validation: {
                required: true,
            },
            valid: false,
            used: false,
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
        updatedEl.valid = checkValidation(
            updatedEl.value,
            updatedEl.validation
        );
        updatedEl.used = true
        updatedForm[targetEl] = updatedEl;
        setForm(updatedForm);
    };

    const checkValidation = (value, rules) => {
        let isValid = false;
        if (rules.required) {
            isValid = value.trim() !== "";
        }
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {};
        for (const item in form) {
            formData[item] = form[item].value;
        }
        axios
            .post("/account.json", formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="account">
            <h2>Account</h2>
            <form onSubmit={handleSubmit}>
                {elementsArray.map((item) => {
                    // console.log(item);
                    return (
                        <Input
                            key={item.id}
                            elementType={item.config.elementType}
                            type={item.config.elementConfig.type}
                            placeholder={item.config.elementConfig.placeholder}
                            value={item.config.value}
                            inValid={!item.config.valid}
                            used={item.config.used}
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
