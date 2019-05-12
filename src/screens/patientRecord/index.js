import React, { Component } from "react";
import {Button, Row, Container, FormLabel, Col, FormText, Nav, Navbar, Form} from "react-bootstrap";
import "./index.css";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unwellName: "",
            unwellSurname: "",
            unwellPhone: "",
            unwellMail: "",
            unwellAddress: "",
            unwellCauses: "",
            unwellTcNo:'',
            unwellWeight:'',
            unwellAge:''

        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };


    render() {
        return (

            <div>
                <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">E-Kontrol</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Anasayfam</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-light" href="/ActionRecords" >Durum Sayfası</Button>
                        <Button variant="outline-light" href="/" >Çıkış</Button>
                    </Form>
                </Navbar>
                <div className="patientRecord">

                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridSignUp">
                                    <Form.Label>HASTA KAYIT</Form.Label>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Hasta İsim</Form.Label>
                                    <Form.Control value={this.state.unwellName} id="unwellName"  onChange={this.handleChange} type="unwellName" placeholder="İsim" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridSurname">
                                    <Form.Label>Hasta Soyisim</Form.Label>
                                    <Form.Control value={this.state.unwellSurname} id="unwellSurname"   onChange={this.handleChange}  type="unwellSurname" placeholder="Soyisim" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUnwellAge">
                                    <Form.Label>Hasta Yaşı</Form.Label>
                                    <Form.Control value={this.state.unwellAge} id="unwellAge"  onChange={this.handleChange} type="unwellAge" placeholder="Yaş" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridUnwellWeight">
                                    <Form.Label>Hasta Kilosu</Form.Label>
                                    <Form.Control value={this.state.unwellWeight} id="unwellWeight"   onChange={this.handleChange}  type="unwellWeight" placeholder="Hasta Kilosu" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTC">
                                    <Form.Label>Hasta TC Kimlik Numarası</Form.Label>
                                    <Form.Control value={this.state.unwellTcNo} id="unwellTcNo"   onChange={this.handleChange}  type="Hasta TC Kimlik Numarası" placeholder="Hasta TC Numarası" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Hasta Email</Form.Label>
                                    <Form.Control value={this.state.unwellMail} id="unwellMail"   onChange={this.handleChange}  type="email" placeholder="Email" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridPhone">
                                <Form.Label>Telefon</Form.Label>
                                <Form.Control value={this.state.unwellPhone}  id="unwellPhone"  onChange={this.handleChange} type="unwellPhone"  placeholder="Telefon Numarası" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Adres</Form.Label>
                                <Form.Control value={this.state.unwellAddress} id="unwellAddress"   onChange={this.handleChange}  placeholder="Adres" />
                            </Form.Group>
                            <Form.Group controlId="formGridUnwellCauses">
                                <Form.Label>Hastalık Sebebi</Form.Label>
                                <Form.Control value={this.state.unwellCauses} id="unwellCauses"  onChange={this.handleChange}  placeholder="Hastalık Sebebi" />
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
