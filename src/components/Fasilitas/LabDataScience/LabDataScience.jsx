import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap";
import './LabDataScience.css';
import {NavLink as Link} from "react-router-dom";
import AppAside from "../../AppAside";

class LabDataScience extends Component {
    render() {
        return (
            <main className="App-main">
                <section id="LabDataScience" className="p-3">
                    <Container className="themed-container">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/">Beranda</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Fasilitas</BreadcrumbItem>
                            <BreadcrumbItem active>Lab Data Science</BreadcrumbItem>
                        </Breadcrumb>
                        <Row>
                            <Col lg="9">
                                <Row>
                                    <Col md="12">
                                        <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Lab Data Science</h1>
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

export default LabDataScience;
