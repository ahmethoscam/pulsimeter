import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Navbar, Form, Nav, Col } from "react-bootstrap";
import "./index.css";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            name:"",
            surname:"",
            address:"",
            email: "",
            password: "",
            hospitalName:"",
            confirmPassword: "",
            confirmationCode: "",
            phoneNumber:"",

        };
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">E-Kontrol</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Anasayfam</Nav.Link>

                    </Nav>
                    <Form inline>
                        <Button style={{marginRight:10}} href="/Login" variant="outline-light"> Giriş</Button>
                        <Button variant="outline-light" href="/signUp" >Kayıtol</Button>
                    </Form>
                </Navbar>
                <div className="Signup">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSignUp">
                            <Form.Label>Kayıt ol</Form.Label>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>İsim</Form.Label>
                            <Form.Control value={this.state.name} id="name"   onChange={this.handleChange} type="text" placeholder="İsim" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSurname">
                            <Form.Label>Soyisim</Form.Label>
                            <Form.Control value={this.state.surname} id="surname"   onChange={this.handleChange}  type="text" placeholder="Soyisim" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={this.state.email} id="email"   onChange={this.handleChange}  type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Parola</Form.Label>
                            <Form.Control value={this.state.password} id="password"   onChange={this.handleChange}  type="password" placeholder="Parola" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridPhone">
                        <Form.Label>Telefon</Form.Label>
                        <Form.Control value={this.state.phoneNumber} id="phoneNumber"    onChange={this.handleChange}  placeholder="Telefon Numarası" />
                    </Form.Group>



                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Adres</Form.Label>
                        <Form.Control value={this.state.address} id="address"    onChange={this.handleChange}  placeholder="Adres" />
                    </Form.Group>
                    <Form.Group controlId="formGridHospital">
                        <Form.Label>Hastane ismi</Form.Label>
                        <Form.Control value={this.state.hospitalName} id="hospitalName"    onChange={this.handleChange}  placeholder="Hastane İsmi" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Kayıt Ol
                    </Button>
                </Form>





                </div>
            </div>
        );
    }
}
