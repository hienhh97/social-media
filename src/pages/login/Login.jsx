import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login();
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Social Media</h1>
                    <p>
                        This website made by hienhh97!
                    </p>
                    <span>
                        Do not have an account? Creat and join with us!!
                    </span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>LOGIN</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
