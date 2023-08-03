import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import style1 from './signin.module.css'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  let navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {email, password}
    // console.log(data)
    axios.post('http://localhost:4000/login',data)
    .then((res)=>{
        if (res.data.status==200) {
          alert(res.data.message)
          navigate('/home')
        }else{
          alert(res.data.message)
        }
    })
    setEmail('');
    setPassword('');
  };

  return (
    <div id={style1.backimg1}>
      <div id={style1.signin}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder='Enter Email Address' value={email} onChange={handleEmailChange} required />
          <br /><br />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder='Enter Password' value={password} onChange={handlePasswordChange} required />
          <br /><br />

          <button type="submit">Sign In</button>
          <div id={style1.signup}>
            <h3>Don't have an account???...</h3>
            <Link to="/signup"><button>SIGN UP</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
