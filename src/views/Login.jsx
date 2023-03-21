import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/user/userSlice';
import { useState } from 'react';
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    })
    const {user} = useSelector(store => store.user)


    const handleChange = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }

    const handleLogin = () => {
        dispatch(login(userLogin))
    }
    return(<>
        {
            user.id ? 
                setTimeout(() => {
                    navigate("/mangalist") 
                })
            :
            <div className="containerLogin">
                <form className='formRegister'>  
                    <input type="text" placeholder="username" className='input' name='username' onChange={handleChange}/>
                    <input type="password" placeholder="pasword" className='input' name='password' onChange={handleChange}/>
                    <h1 className="buttonLogin" onClick={handleLogin}>Login</h1>
                </form>
            </div>

        }
    </>
        
    )
}

export default Login