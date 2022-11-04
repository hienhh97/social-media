import { Link } from "react-router-dom";
import "./register.scss";

export const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Social Media</h1>
                    <p>
                        This website made by hienhh97!
                    </p>
                </div>
                <div className="right">
                    <h1>Đăng ký</h1>
                    <form>
                        <input type="text" placeholder="Tên đăng nhập" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Mật khẩu" />
                    </form>
                    <button id="btn__register">Đăng ký</button>

                    <span>
                        Bạn đã có tài khoản?
                    </span>
                    <Link to="/login">
                        <button id="btn__login">Tới trang đăng nhập</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Register;
