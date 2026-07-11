import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const trimEmail = email.trim();
    const trimPassword = password.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        if(!trimEmail || !trimPassword){
            setError("All fields are required");
            return;
        }
        if (!emailRegex.test(trimEmail)) {
            setError("Enter a valid email");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        console.log(users);
        const user = users.find(
            (user) => user.email === trimEmail.toLowerCase()
        );

        if (!user) {
            setError("Email is not registered");
            return;
        }

        if (user.password !== trimPassword) {
            setError("Incorrect password");
            return;
        }

        sessionStorage.setItem("currentUser", JSON.stringify( {
            id: user.id,
            name: user.name, 
            email: user.email
        } ));

        setEmail("");
        setPassword("")
        setError("");

        navigate("/home",)


    }
  
    return (
    <div>
        <form className="form" onSubmit={handleSubmit} >

            <h2>Welcome Back</h2>

            <div className='input-filed'>
                <label>Email:</label> <br />
                <input 
                    type="email" 
                    value={email}
                    onChange={ (e) => {
                        setEmail(e.target.value);
                       
                    } }  
                />
            </div>
            <div className='input-filed'>
                <label>Password:</label> <br />
                <input 
                    type="password" 
                    value={password}
                    onChange={ (e) => {
                        setPassword(e.target.value);
                        
                    } }
                />
            </div>

            <div className='register-btn'>
                <button 
                    type='submit'
                     disabled={
                       
                        !email.trim() ||
                        !password.trim()
                    }
                > 
                    Login 
                </button>
            </div>

            <div>
                {error && <p>{error}</p>}
            </div>

             <p>
                New User?
                <button 
                    type="button" 
                    onClick={() => navigate("/register")}
                >
                    Register
                </button>
            </p>
        </form>
    </div>
  )
}