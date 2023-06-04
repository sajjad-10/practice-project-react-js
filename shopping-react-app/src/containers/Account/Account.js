import Input from "../../components/Ui/Input/Input";
import Button from "../../components/Ui/Button/Button";
import "./Account.css";
const Account = () => {
    return (
        <div className="account">
            <h2>Account</h2>
            <form>
                <Input type="text" placeholder="Name..." />
                <Input type="text" placeholder="Email..." />
                <Input type="password" placeholder="Password..." />            
                <Button btnType="form">Submit</Button>
            </form>
        </div>
    );
};

export default Account;
