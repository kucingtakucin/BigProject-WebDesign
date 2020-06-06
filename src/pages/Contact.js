/*
 * Copyright (c) 2020. All Rights Reserved
 * @author (Adam Arthur Faizal)
 * @version (6 Juni 2020)
 */

import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import AppAside from "../components/AppAside";
import Link from "next/link";
import Head from "next/head";
import {AppFooter, AppHeader, AppNavbar} from "./index";

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Laboratorium Komputasi FMIPA UNS | Contact</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <AppHeader>
                    <AppNavbar/>
                </AppHeader>
                <main className="App-main">
                    <section id="Contact" className="p-3">
                        <Container className="themed-container">
                            <Breadcrumb>
                                <BreadcrumbItem><Link href="/"><a>Beranda</a></Link></BreadcrumbItem>
                                <BreadcrumbItem active>Contact</BreadcrumbItem>
                            </Breadcrumb>
                            <Row>
                                <Col lg="9">
                                    <Row>
                                        <Col md="12">
                                            <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Contact</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form method="post">
                                                <FormGroup>
                                                    <Label for="username">Username</Label>
                                                    <Input type="text" id="username" required maxLength="25"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="email">Email</Label>
                                                    <Input type="email" id="email" required maxLength="25"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="text">Pesan</Label>
                                                    <Input type="textarea" id="text" rows="10"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Input type="submit" value="Kirim" className="btn btn-outline-info"/>
                                                </FormGroup>
                                            </Form>
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

export default Contact;
