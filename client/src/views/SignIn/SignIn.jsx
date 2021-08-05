import { useState } from 'react'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'
import './SignOn.css'

export default function SignIn() {
    const [logIn, setLogIn] = useState(false)
    const [input, setInput] = useState({ email: "", password: ""})
    const history = useHistory();

    const toggleSignIn = () => {
        setLogIn(!logIn);
    };

    if(logIn){
        document.body.classList.add("active-signin")
    } else {
        document.body.classList.remove("active-signin")
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = await signIn(input)
        console.log(user)
        history.push('/')
        document.location.href="/"
    }

    const handleInput = (e) => {
        const {id, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }))
    }

    return (
        <div className="sign-container">
        <div onClick={toggleSignIn} className="sign-in">Sign-In</div>
        {logIn && (
            <div className="modal-sign">
                <div onClick={toggleSignIn} className="overlay-signin"></div>
                <div className="signin-content">
            <br />
            Sign In
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <br />
                <input 
                    type="email"
                    id="email"
                    value={input.email}
                    onChange={handleInput}
                />
                <br />
                <label>Password</label>
                <br />
                <input 
                    type="password"
                    id="password"
                    value={input.password}
                    onChange={handleInput}
                />
                <br />
                <button>Sign In</button>
                <br />
            </form>
        <button className="close-signin" onClick={toggleSignIn}>X</button>
        </div>
        </div>
    )}
        </div>
    )
}