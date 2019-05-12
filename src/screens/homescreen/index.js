import React, { Component } from "react";
import {Button, Row, Container, FormLabel, Col, FormText, Nav, Navbar, Form} from "react-bootstrap";
import "./index.css";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
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

    handleSubmit() {
        const { username, password } = this.state;
        if (username && password && (username === "" && password === "123")) {

            this.props.history.push("/signUp");
        }
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
                        <Button style={{marginRight:10}} href="/Login" variant="outline-light"> Giriş</Button>
                        <Button variant="outline-light" href="/signUp" >Kayıtol</Button>
                    </Form>
                </Navbar>
                <div className="Login">
                    <Container>
                        <Row>
                            <Col xs={"auto"} md={3}>
                                xs=6 md=4
                            </Col>
                            <Col  xs={6} md={6}>
                                <FormLabel>Anasayfam</FormLabel>
                                <FormText>Hastane insanların hasta olduklarında gittikleri yerdir. Bu hastalara doktorlar ve hemşireler bakarlar .Sağlıklı insanlar da muayene için hastaneye gidebilirler .Annelerin çoğu bebeklerini hastanede doğurur .Bazı hastalar tedavi için bir süre hastanede yatarlar . Hastaneler özel bakım ve tedavi sağlar . İnsan başka bir yerde bu olanaklardan yararlanamaz. Bir hastanede laboratuarlar , röntgen makineleri ve ameliyat odaları bulunur. Değişik hastalıkların tedavisinde uzmanlaşmış doktorlar görev yaparlar . Hastaneye yatan hastalar özel bir odada ya da birkaç yataklı odada kalabilirler . Hasta yatakları gerektiğinde yükseltilen ya da alçaltılan özel yataklardır . Doktorlar belli saatlerde odaları dolaşarak hastaların durumunu gözden geçirirler . Hemşireler gerekli ilaçları verirler . Bir hasta yatağında uzanırken kitap okuyabilir , televizyon izleyebilir ya da" ziyaretçisiyle konuşabilir .</FormText>
                            </Col>
                            <Col xs={"auto"} md={3}>
                                xs=6 md=4
                            </Col>
                        </Row>

                    </Container>






                </div>
            </div>

        );
    }
}
