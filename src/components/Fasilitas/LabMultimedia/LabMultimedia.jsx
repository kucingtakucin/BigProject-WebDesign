import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import './LabMultimedia.css';

class LabMultimedia extends Component {
    render() {
        return (
            <main className="App-main">
                <section id="LabMultimedia" className="p-3">
                    <Container className="themed-container">
                        <Row>
                            <Col md="12">
                                <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Lab Multimedia</h1>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}

export default LabMultimedia;
