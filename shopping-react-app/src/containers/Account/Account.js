import "./Account.css";
const Account = () => {
    return (
        <div className="account">
            <h2>Account</h2>
            <form>
                <input type="text" placeholder="Name..." />
                <input type="text" placeholder="Email..." />
                <input type="password" placeholder="Password..." />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Account;
