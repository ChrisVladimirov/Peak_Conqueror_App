import {Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {Link} from "react-router-dom";
import styles from "./LoginPage.module.css";

export const LoginPage = ({username, password}) => {
    return (
        <div className="justify-content-center flex-column col-md-8 mx-auto">
            <Form action={"/users/login"} method="post"
                  className={styles.mainForm}>
                <FormGroup>
                    {/*<FormLabel className="text-white font-weight-bold">Username</FormLabel>*/}
                    <FormControl className="text-white font-weight-bold"
                                 placeholder="Username..." name="username" defaultValue={username} type={"text"}
                                 title="Username"/>
                </FormGroup>
                <FormGroup>
                    <FormControl title="Password" placeholder="Password..." defaultValue={password} type={"password"}
                                 className="text-white font-weight-bold" name="password"/>
                </FormGroup>
                <div className="checkbox">
                    <label><input name="rememberMe" type={"checkbox"}/>Remember me</label>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col col-md-4">
                        <div className="button-holder d-flex">
                            <input type={"submit"} className="btn btn-dark btn-md" value="Login"/>
                        </div>
                    </div>
                    <div className="col col-sm-3">
                        <h6 className={styles.signupForFree}>Not a member?</h6>
                        <Link to="/users/register">
                            <p>Sign up for free</p>
                        </Link>
                    </div>
                </div>
            </Form>
        </div>
    );
}