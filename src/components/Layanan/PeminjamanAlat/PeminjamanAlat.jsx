import React, {Component} from 'react';
import './PeminjamanAlat.css';
import {Col, Container, Row} from "reactstrap";

class PeminjamanAlat extends Component {
    render() {
        return (
            <main className="App-main">
                <section id="PeminjamanAlat" className="p-3">
                    <Container className="themed-container">
                        <Row>
                            <Col md="12">
                                <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">SOP Peminjaman Alat</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <h5>SOP Peminjaman Alat Laboratorium Komputasi FMIPA UNS</h5>
                                <ol>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias architecto assumenda dolore molestias ratione voluptas. Aliquam incidunt rerum voluptate?</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus incidunt laudantium soluta totam. Cumque dicta doloribus laborum nihil ratione?</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolores et hic odio omnis quia similique vero? Expedita, facilis, pariatur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorum earum eos fuga, itaque pariatur possimus quibusdam sed suscipit vero?</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, iusto, odio? Consequatur esse ipsam ipsum libero maxime quidem quo temporibus?</li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}

export default PeminjamanAlat;
