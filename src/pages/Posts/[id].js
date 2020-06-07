/*
 * Copyright (c) 2020. All Rights Reserved
 * @author (Adam Arthur Faizal)
 * @version (6 Juni 2020)
 */

import React from "react"
import Head from "next/head";
import {AppFooter, AppHeader, AppNavbar} from "../index";
import {Breadcrumb, BreadcrumbItem, Col, Container, Row} from "reactstrap";
import Link from "next/link";
import AppAside from "../../components/AppAside";

const Post = ({title}) => {
    return (
        <React.Fragment>
            <Head>
                <title>Laboratorium Komputasi FMIPA UNS | Posts | {title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <AppHeader>
                <AppNavbar/>
            </AppHeader>
            <main className="App-main">
                <section id="Posts" className="p-3">
                    <Container className="themed-container">
                        <Breadcrumb>
                            <BreadcrumbItem><Link href="/"><a>Beranda</a></Link></BreadcrumbItem>
                            <BreadcrumbItem active>Post</BreadcrumbItem>
                            <BreadcrumbItem active>{title}</BreadcrumbItem>
                        </Breadcrumb>
                        <Row>
                            <Col lg="9">
                                <Row>
                                    <Col md="12">
                                        <h1 className="border-bottom font-weight-bold pl-4 pr-4 mb-4">{title}</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" className="d-flex align-items-center justify-content-center mb-4">
                                        <img
                                            src={`https://picsum.photos/800/400`}
                                            alt="ERD" className="img-thumbnail"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta dolorum
                                            explicabo facere illum minus perspiciatis repellendus tempora ut vero?
                                            Aliquam aperiam at dicta dolores fuga, incidunt ipsum molestiae nemo nobis
                                            quas quos ratione repellendus repudiandae saepe suscipit! Ad blanditiis,
                                            culpa, dicta dolore dolorem ducimus eaque et fugiat iste iusto labore
                                            laborum maxime minima molestiae nemo neque optio perferendis ratione
                                            reiciendis rem sapiente similique sint. Corporis culpa ipsam libero minima
                                            neque nostrum quas voluptatem? Deleniti doloremque reprehenderit tempore vel
                                            veniam. Ab animi aperiam at commodi dignissimos distinctio enim
                                            exercitationem ipsum, iste itaque magni minus necessitatibus nisi officia
                                            officiis placeat quae qui quod, ratione reiciendis repudiandae rerum
                                            sapiente similique sunt, veniam veritatis voluptatibus? Aut dolorem facilis
                                            rerum saepe veniam! Aut consequatur cumque odio praesentium? Asperiores
                                            blanditiis earum est, maxime ratione sit soluta tempore voluptas! Blanditiis
                                            consequatur hic praesentium quae sunt! Consectetur harum impedit in, maiores
                                            molestias nostrum quidem rem. Aliquam aliquid, at delectus exercitationem
                                            odio omnis quis quo repudiandae rerum sint. A asperiores, beatae, corporis
                                            dolorem eos eveniet, laboriosam magnam modi molestias nulla officia pariatur
                                            quae unde? Alias aliquid at, beatae blanditiis consequatur corporis eius,
                                            eos eum fuga illum iure laborum magnam magni neque nisi odio optio
                                            perferendis praesentium quae quaerat quam quasi quibusdam quidem recusandae
                                            sit, tempore veniam? Ad aliquam corporis doloremque error ipsa ipsum
                                            possimus sit? Aliquam, animi aperiam aspernatur atque aut, autem commodi
                                            dolore doloribus ducimus ea earum error eveniet expedita, fugiat hic illum
                                            incidunt inventore ipsam iusto laudantium nostrum placeat porro provident
                                            quis repudiandae tempore voluptas? Dicta eum fugit laborum magnam nam
                                            nesciunt quis quod, quos repellendus sequi tempore voluptas voluptatum? Ab
                                            accusantium asperiores assumenda consectetur culpa delectus distinctio
                                            dolorem dolorum esse excepturi illum ipsam modi nam natus nemo nulla
                                            officiis perspiciatis, possimus quae quam quia quibusdam quis quisquam quos
                                            rerum sint sit tenetur totam voluptate voluptates.</p>
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
    );
}

Post.getInitialProps = async ({ query }) => {
    return {id: query.id, title: query.title}
}

export default Post
