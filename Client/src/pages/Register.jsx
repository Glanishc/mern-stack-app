import { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [dlno, setDLno] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const RegisterUser = async (e) => {
    e.preventDefault()
    if (dlno.length !== 16) {
      alert("Driver's License Number must be exactly 16 characters.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    const response = await axios.post('https://mern-backend-app.azurewebsites.net/user/', {
      dlno: dlno,
      email: email,
      password: password
    })
    console.log(response.data.data)
    navigate('/login')
  }

  return (
    <div className="regbox">
      <img src="register.png" alt="" className='avatar' />
      <form className="login-form">
        <span className="details">Driver's License Number</span>
        <input placeholder="Enter your DL" onChange={(e) => setDLno(e.target.value)} type="text" minLength={16} maxLength={16} required />
        <span className="details">Email</span> 
        <input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} type="email" name='Email' minLength={3} required />
        <span className="details">Password</span>
        <input onChange={(e) => setPassword(e.target.value)} type="password" name='Password' placeholder="Enter your password" minLength={3} required />
        <input type="submit" value='Register' onClick={RegisterUser} />
      </form>
    </div>

  )
}

export default Register
