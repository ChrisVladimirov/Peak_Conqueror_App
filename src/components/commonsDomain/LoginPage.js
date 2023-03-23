import {Container, Form, FormCheck, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {login} from "../../api/authService.js";

export const LoginPage = (props) => {
    const initialUser = {username: '', password: ''};

    const [user, setUser] = useState(initialUser);
    const {username, password} = user;

    useEffect(() => {
        const currentStyle = document.body.style;
        currentStyle.backgroundImage = `url("https://res.cloudinary.com/dhr071bhp/image/upload/v1672599088/peak-climber-pictures/lake_kzbf4l.jpg")`;
        currentStyle.backgroundPosition = "center center";
        currentStyle.backgroundRepeat = "no-repeat";
        currentStyle.backgroundAttachment = "fixed";
        currentStyle.backgroundSize = "cover";
    }, []);

    async function loginSubmitFormHandler(e) {
        e.preventDefault();
        let formElement = e.target;
        let formData = new FormData(formElement);
        let data = Object.fromEntries(formData);

        let response = await login(data);
        if (response) {
            return alert("Invalid username or password!")
        }

        loginFormResetHandler();
        props.history.push('/');
    }

    function loginFormResetHandler() {
        setUser(() => initialUser)
    }

    function inputChangeHandler(e) {
        e.preventDefault()
        let {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    return (
        <div className="container justify-content-center" style={{margin: "0 auto", paddingTop: "125px"}}>
            <h2 className="text-center text-white">Login</h2>
            <Container className="justify-content-center flex-column col-md-8 mx-auto">
                <Form action={"/users/login"} method="post" className="main-form"
                      onSubmit={loginSubmitFormHandler}>
                    <FormGroup>
                        <FormLabel htmlFor="username-field"
                                   className="text-white font-weight-bold">Username</FormLabel>
                        <FormControl className="font-weight-bold" id="username-field"
                                     onChange={inputChangeHandler}
                                     placeholder="Username..." name="username" required={true}
                                     value={username} type={"text"} title="Username"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="password-field" className="text-white font-weight-bold">
                            Username</FormLabel>
                        <FormControl title="Password" placeholder="Password..." value={password}
                                     type={"password"} id="password-field" required={true}
                                     onChange={inputChangeHandler}
                                     className="font-weight-bold" name="password"/>
                    </FormGroup>
                    <FormCheck className="text-white">
                        <label><input name="rememberMe" type={"checkbox"}/>Remember me</label>
                    </FormCheck>
                    <div className="row d-flex justify-content-between">
                        <div className="col col-md-4">
                            <div className="button-holder d-flex">
                                <input type={"submit"} className="btn btn-dark btn-md" value="Login"/>
                            </div>
                        </div>
                        <div className="col col-sm-3">
                            <h6 className="signupForFree" style={{color: 'white'}}>Not a member?</h6>
                            <Link to="/users/register">
                                <p>Sign up for free</p>
                            </Link>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
}