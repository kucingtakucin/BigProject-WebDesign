/*
 * Copyright (c) 2020. All Rights Reserved
 * @author (Adam Arthur Faizal)
 * @version (6 Juni 2020)
 */

import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap";
import AppAside from "../../components/AppAside";
import Head from "next/head";
import {AppFooter, AppHeader, AppNavbar} from "../index";
import Link from "next/link";

class PeminjamanStudio extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Laboratorium Komputasi FMIPA UNS | Layanan | Peminjaman Alat</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <AppHeader>
                    <AppNavbar/>
                </AppHeader>
                <main className="App-main">
                    <section id="PeminjamanStudio" className="p-3">
                        <Container className="themed-container">
                            <Breadcrumb>
                                <BreadcrumbItem><Link href="/"><a>Beranda</a></Link></BreadcrumbItem>
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
                <AppFooter/>
            </React.Fragment>
        )
    }
}

export default PeminjamanStudio;
