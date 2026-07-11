import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        if(!trimmedName|| !trimmedEmail || !trimmedPassword){
            setError("All fields are required");
            return;
        }
        if (!nameRegex.test(trimmedName)) {
            setError("Name should contain only letters");
            return;
        }
        if (trimmedName.length < 3) {
            setError("Name must be at least 3 characters");
            return;
        }
        if (!emailRegex.test(trimmedEmail)) {
            setError("Enter a valid email");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(
            (user) => user.email.toLowerCase() === trimmedEmail.toLowerCase()
        );

        if(userExists){
            setError("User already Exist");
            return;
        }
        if (trimmedPassword.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }
        if (!passwordRegex.test(trimmedPassword)) {
            setError("Password must contain uppercase, lowercase and a number");
            return;
        }

        const newUser = {
            id: Date.now(),
            name: trimmedName,
            email: trimmedEmail.toLowerCase(),
            password: trimmedPassword,
            favorites: [],
            playlist: []
        } 
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        setName("");
        setEmail("");
        setPassword("");
        setError("");
        navigate("/login")
    }

    return (
    <div>
        <form className='form' onSubmit={handleSubmit}>

            <h2>Create Account</h2>

            <div className='input-filed'>
                <label>Name:</label> <br />
                <input 
                    type="text" 
                    value={name}
                    onChange={ (e) => {
                        setName(e.target.value);
                    } }
                />
            </div>
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
                        !name.trim() ||
                        !email.trim() ||
                        !password.trim()
                    }
                > Register </button>
            </div>

            <div>
                {error && <p>{error}</p>}
            </div>

            <p>
                Already have an account?
                <button 
                    type="button" 
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
            </p>
         </form>
    </div>
  )
}

