import React, {Component} from 'react';
import {Button, Col, Container, Media, Row} from "reactstrap";
import cat1 from '../../img/SOP/p_cat1.png';
import cat2 from '../../img/SOP/p_cat2.png';
import './SOP.css';

class SOP extends Component {
    render() {
        return (
            <section id="SOP" className="p-3 border-bottom">
                <Container className="themed-container">
                    <Row>
                        <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Standar Operasional Prosedur</h1>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Media className="border rounded">
                                <Media left top href="#">
                                    <img src={cat1} alt="cat1" className="img-thumbnail m-3"/>
                                </Media>
                                <Media body className="mt-auto mb-auto">
                                    <Media heading>
                                        SOP Peminjaman Lab
                                    </Media>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ...</p>
                                    <Button color="info">Selengkapnya ...</Button>
                                </Media>
                            </Media>
                            <Media className="mt-2 border rounded">
                                <Media left middle href="#">
                                    <img src={cat2} alt="cat2" className="img-thumbnail m-3" />
                                </Media>
                                <Media body className="mt-auto mb-auto">
                                    <Media heading>
                                        SOP Peminjaman Alat
                                    </Media>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ...</p>
                                    <Button color="info">Selengkapnya ...</Button>
                                </Media>
                            </Media>
                            <Media className="mt-2 border rounded">
                                <Media left bottom href="#">
                                    <img src={cat2} alt="cat3" className="img-thumbnail m-3" />
                                </Media>
                                <Media body className="mt-auto mb-auto">
                                    <Media heading>
                                        SOP Peminjaman Studio
                                    </Media>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ...</p>
                                    <Button color="info">Selengkapnya ...</Button>
                                </Media>
                            </Media>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default SOP;
