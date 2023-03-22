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
    const {user, error} = useSelector(store => store.user)

    console.log(useSelector(store => store.user))
    const handleChange = (e) => {
        e.preventDefault()
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }
    const handleLogin = () => {
        dispatch(login(userLogin))
    }
    return(<>
        {
            user.id ? 
            // setTimeout added to delay rendering
            setTimeout(() => {
                navigate("/mangalist") 
            })
            :
            <div className="containerLogin">
                <form className='formRegister' method='POST'>  
                    <input type="text" placeholder="username" className='input' name='username' onChange={handleChange}/>
                    <input type="password" placeholder="pasword" className='input' name='password' onChange={handleChange}/>
                    <p className='loginError'>{error}</p>
                    <a className="buttonLogin" onClick={handleLogin}>Login</a>
                </form>
            </div>

        }
    </>
        
    )
}

export default Login