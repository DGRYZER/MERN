import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style2 from "./signup.module.css";

const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const handlefirstNameChange = (event) => {
    setfirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleconfirmPasswordChange = (event) => {
    setconfirmPassword(event.target.value);
  };

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // window.location.assign("/signup");
    let data = { firstName, lastName, email, password, confirmpassword};
    console.log(data)
    if (firstName && lastName && email && (password === confirmpassword)) {
      axios
        .post("http://localhost:4000/register", data)
        .then((response) => alert(response.data.message))
      navigate("/");
    }else{
      alert('invalid credentials')
    }
  };

  return (
    <div id={style2.backimg2}>
      <div id={style2.signup}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={handlefirstNameChange}
            required
          />
          <br />
          <br />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <br />
          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <br />

          <label htmlFor="confirmpassword"> Confirm Password:</label>
          <input
            type="password"
            id="confirmpassword"
            placeholder="Enter your password"
            value={confirmpassword}
            onChange={handleconfirmPasswordChange}
            required
          />
          <br />
          <br />

          <button type="submit" id={style2.signupbtn}>
            Sign Up
          </button>
          <div id={style2.signin}>
            <h3>Already have an account . . .</h3>
            <Link to="/">
              <button>SIGN IN</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
