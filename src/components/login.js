import ReactDOM from "react-dom";

import "../style.css";

import React, { useState,setState } from "react";

function LoginForm() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);



    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit  = () => {
        fetch("http://localhost:8080/student", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.message === "Success"){
                    alert("You are logged in.");
                    this.goToMain();
                } else {
                    alert("Please check your login information.");
                }
            });

        var { uname, pass } = document.forms[0];

        // Find user login info
        // const userData = database.find((user) => user.username === uname.value);

        // // Compare user info
        // if (userData) {
        //     if (userData.password !== pass.value) {
        //         // Invalid password
        //         setErrorMessages({ name: "pass", message: errors.pass });
        //     } else {
        //         setIsSubmitted(true);
        //     }
        // } else {
        //     // Username not found
        //     setErrorMessages({ name: "uname", message: errors.uname });
        // }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label className="form__label" >Потребителско име </label>
                    <input onChange={event => setUsername(event.target.value)} type="text" name="uname"  />
                    {renderErrorMessage("uname")}
                </div>

                <div className="input-container">
                    <label className="form__label" >Парола </label>
                    <input onChange={event => setPassword(event.target.value)} type="password" name="pass"  />
                    {renderErrorMessage("pass")}
                </div>
                <br/>
                <div className="button-container">
                    <button className="btnn2" type="button" onClick={handleSubmit}>Вход</button>

                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">

                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    )
}

export default LoginForm;