import {Button, Col, Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";

export const NavbarTemplate = (props) => {
    const brandContainerStyle = {width: '10%', margin: 0, float: 'left'};
    const brandImgStyle = {width: '70px', height: '60px'};

    return (
        <div>
            <Navbar bg="dark" expand="lg" fixed={"top"} className="rounded navbar-dark">
                <Container style={brandContainerStyle}>
                    <Navbar.Brand href="/" className="align-middle">
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
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/users/login">Login</Nav.Link>
                        <Nav.Link href="/users/register">Register</Nav.Link>
                        <Nav.Link href="/users/all">Users</Nav.Link>
                        <Nav.Link href="/weather/Rila/Костенец/5">Forecast</Nav.Link>
                        <NavDropdown title="Routes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/routes/all">
                                View All Routes
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/routes/create">
                                Add a Route
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/routes/edit">
                                Edit Route
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/routes/delete">
                                For Admins only
                            </NavDropdown.Item>
                        </NavDropdown>
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