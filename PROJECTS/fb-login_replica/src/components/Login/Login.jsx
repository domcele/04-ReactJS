import "./Login.css";
import Button from "../Button/Button";

const Login = () => {
  return (
    <div className="loginContainer">
      <form>
        <div className="inputEmailOrNumber">
          <input
            type="text"
            name="userEmailOrNumber"
            id="userEmailOrNumber"
            placeholder="Mobile number or email address"
          />
        </div>
        <div className="inputPassword">
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="Password"
          />
        </div>
        <div className="loginButton">
          <Button text="Log in" />
        </div>
        <div className="forgotpwButton">
          <Button text="Forgotten password?" />
        </div>
        <div className="orContainer">
          <span> </span>
          <p></p>
          <span> </span>
        </div>
        <div className="createAccButton">
          <Button text="Create new account" />
        </div>
      </form>
    </div>
  );
};

export default Login;
