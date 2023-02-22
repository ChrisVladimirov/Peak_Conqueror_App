import {useEffect} from "react";
import {Link} from "react-router-dom";

export const RegisterPage = (props) => {

    useEffect(() => {
        const currentStyles = document.body.style;
        currentStyles.backgroundImage = `url("https://res.cloudinary.com/dhr071bhp/image/upload/v1672598736/peak-climber-pictures/chakar-voivoda_fej8td.jpg")`;
        currentStyles.backgroundPosition = `center center`;
        currentStyles.backgroundRepeat = `no-repeat`;
        currentStyles.backgroundAttachment = `fixed`;
        currentStyles.backgroundSize = `cover`;
    });

    return (
        <section id="registration" style={{margin: "0 auto", paddingTop: "125px"}}>
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="registration-form">

                            <div className="form-header" style={{backgroundPosition: 'top', marginBottom: '35px'}}>
                                <h1>Register</h1>
                            </div>

                            <form action="/users/register" method="post"
                                  className="main-form mx-auto col-md-8 d-flex flex-column justify-content-center">

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="form-label text-white" htmlFor="firstName">First name</label>
                                            <input type="text" className="form-control"
                                                   id="firstName"
                                                   placeholder="Enter your first name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="lastName" className="form-label text-white">Last name</label>
                                            <input type="text" className="form-control"
                                                   id="lastName"
                                                   placeholder="Enter your last name"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username-field" className="text-white">Username</label>
                                    <input type="text" className="form-control"
                                           id="username-field" placeholder="Username..."/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailField" className="text-white">Email</label>
                                    <input type="email" id="emailField" placeholder="something@domain.com"
                                           className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password-field" className="text-white">Password</label>
                                    <input type="password"
                                           className="form-control" id="password-field" placeholder="Password..."/>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword" className="text-white">Repeat password</label>
                                    <input type="password" id="confirmPassword"
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