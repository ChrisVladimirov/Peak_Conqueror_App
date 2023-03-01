import {Button, Col, Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getUserData} from "../api/util";
import {logout} from "../api/user";
import {useState} from "react";

export const NavbarTemplate = (props) => {
    const brandContainerStyle = {width: '10%', margin: 0, float: 'left'};
    const brandImgStyle = {width: '70px', height: '60px'};

    const initialUser = getUserData();
    const [user, setUser] = useState(initialUser);

    function logoutClickHandler(e) {
        e.preventDefault();
        logout();
        setUser(null);
        //props.history.push("/");
    }

    return (
        <div>
            <Navbar bg="dark" expand="lg" fixed={"top"} className="rounded navbar-dark">
                <Container style={brandContainerStyle}>
                    <Navbar.Brand href="/" className="align-middle" style={{marginRight: '3em'}}>
                        <img style={brandImgStyle} className="rounded"
                             src="https://res.cloudinary.com/dhr071bhp/image/upload/v1672604824/peak-climber-pictures/logo-cropped_gubpum.jpg"
                             alt="PeakConqueror Logo"/>
                        <span style={{marginLeft: '10px'}}>PeakConqueror</span>
                    </Navbar.Brand>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false"
                               aria-label="Toggle navigation"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto col-9 justify-content-evenly">

                        {!initialUser ? <>
                                <Nav.Link className="guest" href="/users/login">Login</Nav.Link>
                            </>
                            : <Nav.Link href="/">Home</Nav.Link>
                        }

                        <Nav.Link href="/users/all">Users</Nav.Link>
                        <Nav.Link>
                            <Link
                                mountain_location="Rila_monastery"
                                to="/weather/Rila/Rila_monastery/5">Forecast</Link>
                        </Nav.Link>
                        <NavDropdown title="Routes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/routes/all">
                                View All Routes
                            </NavDropdown.Item>

                            {!!initialUser ?
                                (
                                    (initialUser.roles.includes('ADMIN')
                                        || initialUser.roles.includes('OWNER'))
                                        ?
                                        <>
                                            <NavDropdown.Item href="/routes/create" className="admin">
                                                Add a Route
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="/routes/edit" className="admin">
                                                Edit Route
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item href="/routes/delete" className="admin">
                                                For Admins only
                                            </NavDropdown.Item>
                                        </>
                                        : null
                                )
                                : null
                            }

                        </NavDropdown>

                        {!!initialUser
                            ? <Nav.Link onClick={logoutClickHandler} >
                                Logout
                            </Nav.Link>
                            : null
                        }

                    </Nav>
                    <Container style={{float: 'right'}}>
                        <Form>
                            <InputGroup className="my-2 my-lg-0">
                                <Col xs={12}>
                                    <FormControl className="mr-sm-2"
                                                 aria-label="Search" type="search"
                                                 style={{width: '70%', float: 'left'}} placeholder="Search"/>
                                    <Button variant="outline-success" type="submit"
                                            className="my-2 my-sm-0" style={{width: 'auto', float: 'left'}}>
                                        Search
                                    </Button>
                                </Col>

                            </InputGroup>
                        </Form>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}