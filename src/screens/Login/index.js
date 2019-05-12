import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Navbar, Form, Nav } from "react-bootstrap";
import "./index.css";
import axios from "axios";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            data:[]
        };
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeUsername(evt) {
        this.setState({ username: evt.target.value });
    }

    handleChangePass(evt) {
        this.setState({ password: evt.target.value });
    }
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
componentWillMount() {
    const { username, password } = this.state;
    fetch("/api/DOCLOGIN/", {
        method: "POST",
        params: JSON.stringify({
            DOC_MAIL:"koca@gmail.com",
            DOC_PASSWORD:"12345" ,
        })
    })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            if (res.error) {
                console.log(res.error);
            } else {

                if (res.email===this.state.username&&res.parola===this.state.password) {
                    this.props.history.push("/ActionRecords");
                }
                else{

                }

            }
        })
        .catch(err => {
            console.log(err);
        })
}

    handleSubmit() {

        const { username, password } = this.state;
        if (username && password && (username === "ahmet@gmail.com" && password === "123")) {

            this.props.history.push("/ActionRecords");
        }
        else{

        }

    };
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

            <div className="Login">

                <form onSubmit={this.handleSubmit}>
                    <FormLabel style={{fontsize:30, fontweight:'bold'}}>Giriş</FormLabel>
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChangeUsername}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChangePass}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                    block
                    bsSize="large"

                    type="submit"
                    onClick={()=>this.handleSubmit()}
                    disabled={!this.validateForm()}
                >
                    Login
                </Button>

                </form>
            </div>
            </div>
        );
    }
}
