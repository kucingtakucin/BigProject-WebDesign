import React, {Component} from 'react';
import './StrukOrg.css';
import {Col, Container, Row} from "reactstrap";
import erd from './img/TugasERDsiakad.png';

class StrukOrg extends Component {
    render() {
        return (
            <main className="App-main">
                <section id="StrukOrg" className="p-3">
                    <Container className="themed-container">
                        <Row>
                            <Col md="12">
                                <h1 className="border-bottom font-height-bold pl-4 pr-4 mb-4">Struktur Organisasi</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" className="d-flex align-items-center justify-content-center">
                                <img src={erd} alt="ERD" className="img-thumbnail"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}

export default StrukOrg;
