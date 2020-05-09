import React, {Component} from 'react';
import './PeminjamanRuang.css';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap";
import {NavLink as Link} from "react-router-dom";
import AppAside from "../../AppAside";

class PeminjamanRuang extends Component {
    render() {
        return (
            <main className="App-main">
                <section id="PeminjamanRuang" className="p-3">
                    <Container className="themed-container">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/">Beranda</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Layanan</BreadcrumbItem>
                            <BreadcrumbItem active>Peminjaman Ruang</BreadcrumbItem>
                        </Breadcrumb>
                        <Row>
                            <Col lg="9">
                                <Row>
                                    <Col md="12">
                                        <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">SOP Peminjaman Ruang</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <h5>SOP Peminjaman Ruang Laboratorium Komputasi FMIPA UNS</h5>
                                        <ol>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eveniet ex id inventore numquam, omnis perferendis quam quidem rem!</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus facere ullam ut voluptate. Cum distinctio quibusdam quos suscipit temporibus.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, minima officiis? Architecto consectetur cupiditate in, numquam praesentium quaerat rerum similique?</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi ea est illum inventore nostrum odio omnis qui tempora voluptas.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ea nam officiis perferendis ratione. Alias maxime nobis quis sed tempore.</li>
                                        </ol>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="3" className="border-left">
                                <AppAside/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}

export default PeminjamanRuang;
