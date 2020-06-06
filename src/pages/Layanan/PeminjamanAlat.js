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

class PeminjamanAlat extends Component {
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
                    <section id="PeminjamanAlat" className="p-3">
                        <Container className="themed-container">
                            <Breadcrumb>
                                <BreadcrumbItem><Link href="/"><a>Beranda</a></Link></BreadcrumbItem>
                                <BreadcrumbItem active>Layanan</BreadcrumbItem>
                                <BreadcrumbItem active>Peminjaman Alat</BreadcrumbItem>
                            </Breadcrumb>
                            <Row>
                                <Col lg="9">
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
                                </Col>
                                <Col lg="3" className="border-left">
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

export default PeminjamanAlat;
