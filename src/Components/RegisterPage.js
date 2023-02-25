import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {register} from "../services/usersService";

export const RegisterPage = (props) => {

    const [user, setUser] = useState({
        firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: ''
    });
    const {firstName, lastName, username, email, password, confirmPassword} = user;

    useEffect(() => {
        const currentStyles = document.body.style;
        currentStyles.backgroundImage = `url("https://res.cloudinary.com/dhr071bhp/image/upload/v1672598736/peak-climber-pictures/chakar-voivoda_fej8td.jpg")`;
        currentStyles.backgroundPosition = `center center`;
        currentStyles.backgroundRepeat = `no-repeat`;
        currentStyles.backgroundAttachment = `fixed`;
        currentStyles.backgroundSize = `cover`;
    });

    async function formSubmitHandler(e) {
        e.preventDefault();
        let formElement = e.target;
        let formData = new FormData(formElement);
        let data = Object.fromEntries(formData);

        if (password !== confirmPassword) return alert('Passwords must match!')
        await register(data);

        formElement.reset();
        props.history.push('/users/login');
    }

    function inputChangeHandler(e) {
        let {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    return (
        <section id="registration" style={{margin: "0 auto", paddingTop: "125px"}}>
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="registration-form">

                            <div className="form-header" style={{backgroundPosition: 'top', marginBottom: '35px'}}>
                                <h1>Register</h1>
                            </div>

                            <form onSubmit={formSubmitHandler} action="/users/register" method="post"
                                  className="main-form mx-auto col-md-8 d-flex
                                  flex-column justify-content-center">

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="form-label text-white" htmlFor="firstName">First
                                                name</label>
                                            <input type="text" className="form-control"
                                                   id="firstName" value={firstName}
                                                   min={3} max={20} required={true}
                                                   onChange={inputChangeHandler}
                                                   name="firstName"
                                                   placeholder="Enter your first name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="lastName" className="form-label text-white">Last
                                                name</label>
                                            <input type="text" className="form-control"
                                                   id="lastName" value={lastName}
                                                   min={3} max={20} required={true}
                                                   name="lastName"
                                                   onChange={inputChangeHandler}
                                                   placeholder="Enter your last name"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username-field" className="text-white">Username</label>
                                    <input type="text" className="form-control"
                                           value={username} min={5} max={20} required={true}
                                           onChange={inputChangeHandler}
                                           name="username"
                                           id="username-field" placeholder="Username..."/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailField" className="text-white">Email</label>
                                    <input type="email" id="emailField" placeholder="something@domain.com"
                                           onChange={inputChangeHandler} name="email"
                                           value={email} required={true} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password-field" className="text-white">Password</label>
                                    <input type="password"
                                           value={password} min={7} max={15} required={true}
                                           onChange={inputChangeHandler} name="password"
                                           className="form-control" id="password-field" placeholder="Password..."/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword" className="text-white">Repeat password</label>
                                    <input type="password" id="confirmPassword" value={confirmPassword} required={true}
                                           onChange={inputChangeHandler} name="confirmPassword"
                                           className="form-control" placeholder="Password..."/>
                                </div>

                                <div className="row d-flex justify-content-between">
                                    <div className="col col-md-4">
                                        <div className="button-holder d-flex">
                                            <input type="submit" className="btn btn-dark btn-lg"
                                                   value="Register"/>
                                        </div>
                                    </div>
                                    <div className="col col-sm-3">
                                        <p style={{color: 'white'}}>
                                            <b>Already a member?</b>
                                            <br/>
                                            <Link to="/users/login">Sign in</Link></p>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}