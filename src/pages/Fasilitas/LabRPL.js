import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap"
import AppAside from "../../components/AppAside";
import Link from "next/link";
import Head from "next/head";
import {AppFooter, AppHeader, AppNavbar} from "../index";

class LabRPL extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Laboratorium Komputasi FMIPA UNS | Fasilitas | Lab RPL</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <AppHeader>
                    <AppNavbar/>
                </AppHeader>
                <main className="App-main">
                    <section id="LabRPL" className="p-3">
                        <Container className="themed-container">
                            <Breadcrumb>
                                <BreadcrumbItem><Link href="/"><a>Beranda</a></Link></BreadcrumbItem>
                                <BreadcrumbItem active>Fasilitas</BreadcrumbItem>
                                <BreadcrumbItem active>Lab RPL</BreadcrumbItem>
                            </Breadcrumb>
                            <Row>
                                <Col lg="9">
                                    <Row>
                                        <Col md="12">
                                            <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Lab RPL</h1>
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

export default LabRPL;
