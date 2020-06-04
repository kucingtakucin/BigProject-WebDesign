/*
 * Copyright (c) 2020. Adam Arthur Faizal. All Rights Reserved
 */

import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap";
import AppAside from "../../components/AppAside";
import Link from "next/link";
import Head from "next/head";
import {AppFooter, AppHeader, AppNavbar} from "../index";

class LabMikrokontroller extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Laboratorium Komputasi FMIPA UNS | Fasilitas | Lab Mikrokontroller</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <AppHeader>
                    <AppNavbar/>
                </AppHeader>
                <main className="App-main">
                    <section id="LabMikrokontroller" className="p-3">
                        <Container className="themed-container">
                            <Breadcrumb>
                                <BreadcrumbItem><Link href="/"><a>Beranda</a></Link></BreadcrumbItem>
                                <BreadcrumbItem active>Fasilitas</BreadcrumbItem>
                                <BreadcrumbItem active>Lab Mikrokontroller</BreadcrumbItem>
                            </Breadcrumb>
                            <Row>
                                <Col lg="9">
                                    <Row>
                                        <Col md="12">
                                            <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Lab Mikrokontroller</h1>
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

export default LabMikrokontroller;
