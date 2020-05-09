import React, {Component} from 'react';
import './StrukOrg.css';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap";
import erd from './img/TugasERDsiakad.png';
import AppAside from "../../AppAside";
import {NavLink as Link} from "react-router-dom";

class StrukOrg extends Component {
    render() {
        return (
            <main className="App-main">
                <section id="StrukOrg" className="p-3">
                    <Container className="themed-container">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/">Beranda</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Profil</BreadcrumbItem>
                            <BreadcrumbItem active>Struktur Organisasi</BreadcrumbItem>
                        </Breadcrumb>
                        <Row>
                            <Col lg="9">
                                <Row>
                                    <Col md="12">
                                        <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Struktur Organisasi</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" className="d-flex align-items-center justify-content-center">
                                        <img src={erd} alt="ERD" className="img-thumbnail"/>
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

export default StrukOrg;
