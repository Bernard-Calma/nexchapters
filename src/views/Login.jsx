import '../styles/login.css'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice';
import { useNavigate, useOutletContext } from 'react-router-dom';



const Login = () => {
    const [user, userLogin, error, handleChange] = useOutletContext();
    const dispatch = useDispatch();
    let navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        dispatch(login(userLogin))
    }
    return(<>
        {
            user.id 
            ? 
                setTimeout(() => {
                    navigate("/mangalist") 
                })
            : 
                <div className="containerLogin">
                    <form className='formRegister' onSubmit={handleLogin}>  
                        <input type="text" placeholder="username" className='input' name='username' onChange={handleChange} required />
                        <input type="password" placeholder="pasword" className='input' name='password' onChange={handleChange} required />
                        <p className='loginError'>{error}</p>
                        <input type="submit" className="buttonLogin"  value="Login"/>
                    </form>
                </div>
        }
    </>)
}

export default Login