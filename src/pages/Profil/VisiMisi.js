/*
 * Copyright (c) 2020. All Rights Reserved
 * @author (Adam Arthur Faizal)
 * @version (6 Juni 2020)
 */

import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap"
import AppAside from "../../components/AppAside"
import Link from "next/link";
import Head from "next/head";
import {AppHeader, AppNavbar} from "../index";

class VisiMisi extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Laboratorium Komputasi FMIPA UNS | Profil | Visi & Misi</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <AppHeader>
                    <AppNavbar/>
                </AppHeader>
                <main className="App-main">
                    <section id="VisiMisi" className="p-3">
                        <Container className="themed-container">
                            <Breadcrumb>
                                <BreadcrumbItem><Link href="/"><a>Beranda</a></Link></BreadcrumbItem>
                                <BreadcrumbItem active>Profil</BreadcrumbItem>
                                <BreadcrumbItem active>Visi & Misi</BreadcrumbItem>
                            </Breadcrumb>
                            <Row>
                                <Col lg="9">
                                    <Row>
                                        <Col md="12">
                                            <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Visi</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, consectetur deserunt eum magnam minima modi perspiciatis quae quibusdam. Adipisci blanditiis deserunt hic officia soluta suscipit voluptatem? Expedita porro quaerat reprehenderit repudiandae. Animi eligendi illo nesciunt quo repellendus? Cupiditate esse mollitia natus nisi quas quasi reiciendis! Accusamus blanditiis impedit iusto laudantium, soluta vitae. Accusamus error ipsa, molestias perspiciatis recusandae sint totam veniam voluptatum. Autem consequatur consequuntur cum, delectus dolor fuga minus nam nisi nulla quasi sunt, suscipit tenetur, vero voluptas!</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">Misi</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <p>Misi Dengan berlandaskan pada visi tersebut maka misi Laboratorium Komputasi FMIPA UNS dapat dirumuskan sebagai berikut :</p>
                                            <ol className="text-justify">
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores aspernatur ea facilis impedit laudantium, minima odit? Assumenda deserunt facere libero. A aliquid aperiam at aut consectetur cumque, dolorem esse eveniet laboriosam natus, necessitatibus nobis numquam obcaecati quisquam sit tempora?</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta et vel voluptatem? Aspernatur deserunt distinctio dolore enim fugit illo ipsam iure modi, nesciunt non nulla obcaecati odio omnis perspiciatis provident qui quos ratione rem repellendus reprehenderit saepe similique sit tempore?</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores magnam nesciunt porro quas quo, ratione reiciendis ut! Ab, aliquid architecto aspernatur autem debitis expedita explicabo fuga, ipsa minus modi necessitatibus odit quisquam quo recusandae rerum saepe suscipit temporibus veritatis vero.</li>
                                            </ol>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <h1 className="border-bottom font-weight bold pl-4 pr-4 mb-4">Tujuan</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <p>Untuk melaksanakan misinya, Laboratorium Komputasi FMIPA UNS menetapkan arah tujuan pengembangan sebagai berikut :</p>
                                            <ol>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam architecto at deserunt ex excepturi mollitia necessitatibus possimus ut? Ab aliquid amet aperiam autem corporis cumque deserunt earum, eligendi fugiat iste, laborum molestias nobis omnis optio quae quam reiciendis sint.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur culpa debitis distinctio dolorum error itaque laudantium magnam minus, molestiae, molestias, nam nesciunt officiis pariatur perferendis porro possimus quae quaerat quasi quisquam reiciendis sint tempore veritatis! Ipsam iure voluptatem voluptatibus.</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias assumenda atque dolor, esse exercitationem iste magni mollitia nemo nesciunt repudiandae suscipit totam voluptatibus. Delectus dicta dolor est ex exercitationem facere inventore ipsum, molestiae, natus recusandae rerum temporibus veniam voluptatum?</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloribus dolorum ea eius enim est, eum explicabo ipsum nemo odio quas, tenetur veritatis? Asperiores culpa eveniet excepturi facilis illum itaque laudantium molestiae, nam nesciunt numquam quasi quibusdam rerum tenetur velit.</li>
                                            </ol>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi doloribus eligendi eum impedit labore minima mollitia nisi officiis quidem, quis quod reiciendis sed temporibus veritatis! Assumenda doloremque excepturi libero minima non provident rem sapiente sed sit? Dignissimos ea eos et ipsum magni nihil omnis quas quis quo, vitae! Cupiditate, impedit ipsam iusto molestiae placeat quidem repellendus similique vel? Alias corporis debitis distinctio eligendi maiores nobis perspiciatis soluta veritatis. Atque cumque esse laboriosam natus necessitatibus officiis, omnis provident quidem tenetur!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur, deserunt doloremque ea enim exercitationem facere fugiat id ipsam iure molestias sapiente temporibus veritatis voluptatem voluptatibus! Beatae blanditiis consectetur ducimus excepturi, exercitationem illum maiores perferendis placeat porro quas quia quisquam recusandae similique soluta temporibus veritatis vero voluptatum. Labore similique sit tempore. Aspernatur fugit magnam minima quia voluptate! Asperiores corporis exercitationem inventore minus nulla praesentium, quae reprehenderit sunt suscipit velit. Aspernatur dignissimos dolore minus sunt, velit vero voluptate. At, dolore, ullam?</p>
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
            </React.Fragment>
        )
    }
}

export default VisiMisi;
