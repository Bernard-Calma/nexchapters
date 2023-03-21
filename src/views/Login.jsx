import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice';
import { useState } from 'react';
import '../styles/login.css'

const Login = () => {
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }
    return(
        <div className="containerLogin">
            <form className='formRegister'>  
                <input type="text" placeholder="username" className='input' name='username' onChange={handleChange}/>
                <input type="password" placeholder="pasword" className='input' name='password' onChange={handleChange}/>
                <h1 className="buttonLogin" onClick={() => dispatch(login(userLogin))}>Login</h1>
            </form>
        </div>
    )
}

export default Login