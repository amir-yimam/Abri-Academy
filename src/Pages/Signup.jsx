import {Link, useNavigate} from 'react-router-dom'
import '../Styles/Signup.css'

function Signup(){

    const navigate = useNavigate();

    const handlesignup = (e) => {
        e.preventDefault();

        navigate('/home');
    };
    return(
        <div className='signup-box'>
            <div className='signup-header'>
                <p>Signup</p>
            </div>
            <form onSubmit={handlesignup}>
            <div className='signup-input'>
                <input type="text"  placeholder='Enter name' required/>
                <input type="email" placeholder='Enter your email'  required />
                <input type="password" placeholder='Enter password' required />
                <input type="password" placeholder='Confirm password' required />
            </div>
            <div className='signup-button'>
                <button type='submit'>Signup</button>
            </div>
            <div className='tologin'>
                <p>Already have an account <Link to='/login'>Login</Link></p>
            </div>
            </form>
        </div>
    );
}
export default Signup