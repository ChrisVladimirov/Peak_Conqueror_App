import {Link} from "react-router-dom";
import {Button, Container, Row} from "react-bootstrap";

export const Footer = (props) => {
    return (
        <Container className="my-5">
            <footer
                className="text-center text-lg-start text-white"
                style={{backgroundColor: '#45526e'}}>

                <Container className="p-4 pb-0">

                    <section>

                        <Row>

                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Peak Conqueror &copy;
                                </h6>
                                <p>
                                    Everything for You and your Friends to organise your
                                    next adventure...
                                    <br/>
                                    in one place!
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none"/>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    <b className="text-white">Logbook & Reminder</b>
                                </p>
                                <p>
                                    <b className="text-white">Mountain Weather Forecast</b>
                                </p>
                                <p>
                                    <b className="text-white">Routes Info & Maps</b>
                                </p>
                                <p>
                                    <b className="text-white">Journey Invitation & Organisation</b>
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none"/>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    <Link className="text-white"
                                          to="/users/all">Build an adventurous fellowship</Link>
                                </p>
                                <p>
                                    <Link className="text-white"
                                          to="/weather/Rila/Malyovitsa/5">Check the forecast</Link>
                                </p>
                                <p>
                                    <Link className="text-white"
                                          to="/routes/all">View breathtaking Routes</Link>
                                </p>
                                <p>
                                    <Link className="text-white"
                                          to="/journey/organise">Go Journeying with friends</Link>
                                </p>
                            </div>


                            <hr className="w-100 clearfix d-md-none"/>


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Sofia, Bulgaria</p>
                                <p><i className="fas fa-envelope mr-3"></i> peakClimberApp@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>

                        </Row>

                    </section>


                    <hr className="my-3"/>


                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-7 col-lg-8 text-center text-md-start">

                                <div className="p-3">
                                    © 2023 Copyright:
                                    <Link className="text-white" to="https://peakConqueror.bg/"> PeakConqueror
                                        App </Link>
                                </div>

                            </div>


                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                                <Button variant={"outline-light"}
                                        className="btn-floating m-1 text-white"
                                        role="button"
                                ><i className="fab fa-facebook-f"></i
                                ></Button>


                                <Button variant={"outline-light"}
                                        className="btn-floating m-1 text-white"
                                        role="button"
                                ><i className="fab fa-twitter"></i
                                ></Button>


                                <Button variant={"outline-light"}
                                        className="btn-floating m-1 text-white"
                                        role="button"
                                ><i className="fab fa-google"></i
                                ></Button>


                                <Button variant={"outline-light"}
                                        className="btn-floating m-1 text-white"
                                        role="button"
                                ><i className="fab fa-instagram"></i
                                ></Button>
                            </div>

                        </div>
                    </section>

                </Container>

            </footer>

        </Container>

    );
}