import { useDispatch } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import { register } from "../features/user/userSlice";

const Register = () => {
    const [user, userLogin, error, handleChange] = useOutletContext();
    let navigate = useNavigate()
    const dispatch = useDispatch()
    return(<>
        {
            user.id 
            ? 
                setTimeout(() => {
                    navigate("/mangalist") 
                })
            : 
                <div className="containerLogin">
                    <form className='formRegister' method='POST'>  
                        <input type="text" placeholder="username" className='input' name='username' onChange={handleChange}/>
                        <input type="password" placeholder="pasword" className='input' name='password' onChange={handleChange}/>
                        <p className='loginError'>{error}</p>
                        <a className="buttonLogin" onClick={() => dispatch(register(userLogin))}>Register</a>
                    </form>
                </div>
        }
    </>)
}

export default Register