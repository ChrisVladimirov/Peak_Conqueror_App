import {useState} from "react";
import {Link} from "react-router-dom";
import {register} from "../../api/authService.js";
import {useBackground} from "../../hooks/useBackground.js";
import {pictureUrls} from "../../api/constants.js";
import styles from "./RegisterPage.module.css";

export const RegisterPage = (props) => {

    const [user, setUser] = useState({
        firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: ''
    });
    const {firstName, lastName, username, email, password, confirmPassword} = user;

    const [errors, setErrors] = useState(null);

    useBackground(pictureUrls.CHAKAR_VOIVODA)

    function registerFormResetHandler() {
        setUser({firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: ''})
    }

    async function formSubmitHandler(e) {
        e.preventDefault();
        let formElement = e.target;
        let formData = new FormData(formElement);
        let data = Object.fromEntries(formData);

        if (password !== confirmPassword) return alert('Passwords must match!')
        let r = await register(data);
        if (!!r) {
            setErrors(Object.values(r));
            return;
        }

        registerFormResetHandler();
        props.history.push('/users/login');
    }

    function inputChangeHandler(e) {
        let {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    return (
        <section className={styles.mainRegistrationSection}>
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="registration-form">

                            <div className={styles.registerFormHeader}>
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

                                    {!!errors ?
                                        <div>
                                            <ol>{errors.map(e =>
                                                <li style={{listStyle: 'none', fontWeight: 'bold'}}
                                                    className="text-white bg-danger">{e}</li>)}</ol>
                                        </div>
                                        : null
                                    }

                                    <div className="col col-sm-3">
                                        <p className={styles.promptToSignIn}>
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