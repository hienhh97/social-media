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
                </div>
                <div className="right">
                    <h1>Đăng nhập</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                    </form>
                    <button onClick={handleLogin} id="btn__login">Đăng nhập</button>
                    <span>
                        Chưa có tài khoản?
                    </span>
                    <Link to="/register">
                        <button id="btn__register">Tạo tài khoản mới</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
