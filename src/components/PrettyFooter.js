import {Button} from "react-bootstrap";
import styles from "./PrettyFooter.module.css";
import {Link} from "react-router-dom";
import {NavbarTemplate} from "./NavbarTemplate";

export const PrettyFooter = (props) => {
    return (
        <>
            <div className={`${styles.myPrettyFooter}`}>
                <footer className={`${styles.prettyFooterBody} text-center text-white`}>
                    <div className="container pt-4">
                        <section className="mb-4">
                            <Button variant={"outline-light"}
                                    className="btn-floating m-1 text-dark btn-lg"
                                    role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></Button>
                            <Button variant={"outline-light"}
                                    className="btn-floating m-1 text-dark btn-lg"
                                    role="button"
                            ><i className="fab fa-twitter"></i
                            ></Button>
                            <Button variant={"outline-light"}
                                    className="btn-floating m-1 text-dark btn-lg"
                                    role="button"
                            ><i className="fab fa-google"></i
                            ></Button>
                            <Button variant={"outline-light"}
                                    className="btn-floating m-1 text-dark btn-lg"
                                    role="button"
                            ><i className="fab fa-instagram"></i
                            ></Button>
                            <Button variant={"outline-light"}
                                    className="btn-floating btn-lg text-dark m-1"
                                    role="button"
                            ><i className="fab fa-linkedin"></i
                            ></Button>
                            <Button variant={"outline-light"}
                                    className="btn-floating m-1 text-dark btn-lg"
                                    role="button"
                            ><i className="fab fa-github"></i
                            ></Button>
                        </section>
                    </div>

                    <div className={`${styles.prettyFooterCopyright} text-center text-dark p-3`}>
                        © 2023 Copyright:
                        <Link className="text-dark" to="/"> PeakConqueror.bg</Link>
                    </div>
                </footer>
            </div>
        </>
    )
}