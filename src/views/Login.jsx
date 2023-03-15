const Login = () => {
    return(
        <div className="containerLogin">
            <h1 className="title">Login</h1>
            <form>  
                <input type="text" placeholder="username" />
                <input type="text" placeholder="pasword" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login