import { useDispatch } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import { register } from "../features/user/userSlice";

const Register = () => {
    const [user, userLogin, error, handleChange] = useOutletContext();
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const handleRegister = (event) => {
        event.preventDefault()
        dispatch(register(userLogin))
    }
    return(<>
        {
            user.id 
            ? 
                setTimeout(() => {
                    navigate("/mangalist") 
                })
            : 
                <div className="containerLogin"  onSubmit={handleRegister}>
                    <form className='formRegister' method="POST" action="">  
                        <input type="text" placeholder="username" className='input' name='username' onChange={handleChange} required/>
                        <input type="email" placeholder="email" className='input' name='email' onChange={handleChange} required/>
                        <input type="password" placeholder="pasword" className='input' name='password' onChange={handleChange} required/>
                        <input type="password" placeholder="re-enter password" className='input' name='verifyPassword' onChange={handleChange} required/>
                        <p className='loginError'>{error}</p>
                        <input type="submit" value="Register" className="buttonLogin"/>
                    </form>
                </div>
        }
    </>)
}

export default Register