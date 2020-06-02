import React, {Component} from 'react';
import './PeminjamanStudio.css';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap";
import {NavLink as Link} from "react-router-dom";
import AppAside from "../../../components/AppAside";

class PeminjamanStudio extends Component {
    render() {
        return (
            <main className="App-main">
                <section id="PeminjamanStudio" className="p-3">
                    <Container className="themed-container">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/">Beranda</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Layanan</BreadcrumbItem>
                            <BreadcrumbItem active>Peminjaman Studio</BreadcrumbItem>
                        </Breadcrumb>
                        <Row>
                            <Col lg="9">
                                <Row>
                                    <Col md="12">
                                        <h1 className="border-bottom font-weight-bold pl-4 pr mb-4">SOP Peminjaman Studio</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <h5>SOP Peminjaman Studio Laboratorium Komputasi FMIPA UNS</h5>
                                        <ol>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cupiditate debitis dolor ipsam laborum, molestiae molestias totam veniam?</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur cupiditate dolor dolores facilis fugit libero magnam natus officia recusandae!</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor doloribus fuga labore praesentium rem repellendus rerum ullam veniam vero.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda eum inventore molestias numquam placeat quisquam soluta, tempora vero voluptates!</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at dolores exercitationem in non omnis porro ratione tenetur ullam.</li>
                                        </ol>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="3">
                                <AppAside/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}

export default PeminjamanStudio;
