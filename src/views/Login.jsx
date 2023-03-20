import '../styles/login.css'

const Login = () => {
    return(
        <div className="containerLogin">
            <form className='formRegister'>  
                <input type="text" placeholder="username" className='input'/>
                <input type="password" placeholder="pasword" className='input'/>
                <h1 className="buttonLogin">Login</h1>
            </form>
        </div>
    )
}

export default Login