import React, {useState,setState} from 'react';
import '../style.css'
function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }
/* username,password,first_name,last_name,email,phone_number*/
    const handleSubmit  = () => {
        fetch("http://localhost:8080/student", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: firstName+lastName,
                password: password,
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: 995424165,
            })
        })
        // fetch("http://localhost:8080/students").then(response => response.json()).then(data => {
        //     console.log(data);
        // })
        // console.log(firstName,lastName,email,password,confirmPassword);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="firstName">Първо име</label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) =>
                        handleInputChange(e)} id="firstName" placeholder="Първо име"/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Фамилно име </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) =>
                        handleInputChange(e)} placeholder="Фамилно име"/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Имейл </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) =>
                        handleInputChange(e)} placeholder="Имейл"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Парола </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) =>
                        handleInputChange(e)} placeholder="Парола"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" htmlFor="confirmPassword">Потвърди парола </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) =>
                        handleInputChange(e)} placeholder="Потвърди парола"/>
                </div>
            </div>
            <div class="footer">
                <button className="btnn" onClick={()=>handleSubmit()} type="submit" >Регистирай се</button>

            </div>
        </div>

    )
}

export default RegistrationForm