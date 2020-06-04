/*
 * Copyright (c) 2020. Adam Arthur Faizal. All Rights Reserved
 */

import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap";
import AppAside from "../../components/AppAside";
import Head from "next/head";
import {AppFooter, AppHeader, AppNavbar} from "../index";
import Link from "next/link";

class PeminjamanRuang extends Component {
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
                    <section id="PeminjamanRuang" className="p-3">
                        <Container className="themed-container">
                            <Breadcrumb>
                                <BreadcrumbItem><Link href="/"><a>Beranda</a></Link></BreadcrumbItem>
                                <BreadcrumbItem active>Layanan</BreadcrumbItem>
                                <BreadcrumbItem active>Peminjaman Ruang</BreadcrumbItem>
                            </Breadcrumb>
                            <Row>
                                <Col lg="9">
                                    <Row>
                                        <Col md="12">
                                            <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">SOP Peminjaman Ruang</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <h5>SOP Peminjaman Ruang Laboratorium Komputasi FMIPA UNS</h5>
                                            <ol>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eveniet ex id inventore numquam, omnis perferendis quam quidem rem!</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus facere ullam ut voluptate. Cum distinctio quibusdam quos suscipit temporibus.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, minima officiis? Architecto consectetur cupiditate in, numquam praesentium quaerat rerum similique?</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi ea est illum inventore nostrum odio omnis qui tempora voluptas.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ea nam officiis perferendis ratione. Alias maxime nobis quis sed tempore.</li>
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

export default PeminjamanRuang;
