/*
 * Copyright (c) 2020. All Rights Reserved
 * @author (Adam Arthur Faizal)
 * @version (6 Juni 2020)
 */

import React, {Component} from 'react';
import {Col, Container, Media, Row} from "reactstrap";
import Link from "next/link";
import fetch from 'isomorphic-unfetch'

class SOP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ruang: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/200/150`,
            alat: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/200/150`,
            studio: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/200/150`
        }
    }

    componentDidMount() {
        fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 5 + 1)}&limit=100`)
            .then(response => response.json())
            .then(results => {
                this.setState({
                    ruang: results[Math.floor(Math.random() * 100 + 1)].download_url,
                    alat: results[Math.floor(Math.random() * 100 + 1)].download_url,
                    studio: results[Math.floor(Math.random() * 100 + 1)].download_url,
                })
            })
            .catch (errors => console.log('Error:', errors));
    }

    render() {
        return (
            <section id="SOP" className="p-3">
                <Container className="themed-container">
                    <Row>
                        <Col md="12">
                            <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Standar Operasional Prosedur</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Media className="border rounded">
                                <Media left top href="#">
                                    <img src={this.state.ruang} alt="cat1" width="200px" className="img-fluid m-3"/>
                                </Media>
                                <Media body className="mt-auto mb-auto">
                                    <Media heading>
                                        SOP Peminjaman Ruang
                                    </Media>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ...</p>
                                    <Link href="/Layanan/PeminjamanRuang"><a className="btn btn-info">Selengkapnya ...</a></Link>
                                </Media>
                            </Media>
                            <Media className="mt-2 border rounded">
                                <Media left middle href="#">
                                    <img src={this.state.alat} alt="cat2" width="200px" className="img-fluid m-3" />
                                </Media>
                                <Media body className="mt-auto mb-auto">
                                    <Media heading>
                                        SOP Peminjaman Alat
                                    </Media>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ...</p>
                                    <Link href="/Layanan/Peminjaman-Alat"><a  className="btn btn-info">Selengkapnya ...</a></Link>
                                </Media>
                            </Media>
                            <Media className="mt-2 border rounded">
                                <Media left bottom href="#">
                                    <img src={this.state.studio} alt="cat3" width="200px" className="img-fluid m-3" />
                                </Media>
                                <Media body className="mt-auto mb-auto">
                                    <Media heading>
                                        SOP Peminjaman Studio
                                    </Media>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ...</p>
                                    <Link href="/Layanan/Peminjaman-Studio"><a  className="btn btn-info">Selengkapnya ...</a></Link>
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
