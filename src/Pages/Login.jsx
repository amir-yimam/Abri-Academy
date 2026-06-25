import {Link, useNavigate} from 'react-router-dom'
import '../Styles/Login.css'

function Login(){

    const navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault();

        navigate('/home');
    };
        return(
            <div>
                <div className="Login box">
                    <div className="login-title">
                        <p>Login</p>
                    </div>
                    <form onSubmit={handlelogin}>
                    <div className="login-input">
                        <input type="text" placeholder="Enter name" required/>
                        <input type="password" placeholder="Enter password" required/>
                    </div>
                    <section>
                        <div className="remember">
                             <input type="checkbox" id="checkbox"/>
                             <label for="checkbox">Remember Me</label>
                        </div>
                        <div className="forgot">
                             <a href="">Forgot Password</a>
                        </div>
                    </section>
                    <div className="login-button">
                        <button type="submit">Login</button>
                    </div>
                    <div className="tosignup">
                        <p>Don't have account?<Link to='/signup'>Signup</Link></p>
                    </div>
                    </form>
                </div>
            </div>
        );

}

export default Login