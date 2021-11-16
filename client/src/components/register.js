import React, { useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Register = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setErr] = useState("");
    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = {
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
    };
        axios.post("http://localhost:8000/api/register", postData)
        .then ((res) => {console.log(res.data) 
            navigate ("/")})
        .catch((err) => {
            console.log(err.response.data.errors);
            setErr(err.response.data.errors);
        });
    };

    return (
    <form onSubmit={handleSubmit} style={{marginLeft: "450px", marginTop:"5px", display: 'inline-block', padding: "25px", backgroundColor: "lightgrey"}}>
        <h1>Register</h1>
        <div>
        <br></br>
        First Name:{" "}
        <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
        <p>
        {err && err.firstName && (
                    <p style={{color: "red"}} className="error-text">{err.firstName.message}</p>)}
                </p>
        </div>
        <br></br>
        <div>
        Last Name:{" "}
        <input type="text" onChange={(e) => setLastName(e.target.value)}/>
        <p>
        {err && err.lastName && (
                    <p style={{color: "red"}} className="error-text">{err.lastName.message}</p>)}
                </p>
        </div>
        <br></br>
        <div>
        Email:{" "}
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
        <p>
        {err && err.email && (
                    <p style={{color: "red"}} className="error-text">{err.email.message}</p>)}
                </p>
        </div>
        <br></br>
        <div>
        Password:{" "}
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <p>
        {err && err.password && (
                    <p style={{color: "red"}} className="error-text">{err.password.message}</p>)}
                </p>
        </div>
        <br></br>
        <div>
        Confirm Password:{" "}
        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <br></br>
        <button type="submit">Submit</button>
        <br></br>
        <br></br>
        <div style={{marginTop: "25px", fontSize: "18px"}}>
        <Link style={{padding: "5px"}} to="/">Back to Login Screen</Link>
    </div>
    </form>
);
};

export default Register;
