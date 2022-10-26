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
                    <span>
                        You already have an account? Login now!
                    </span>
                    <Link to= "/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>REGISTER</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;
