/*
 * Copyright (c) 2020. All Rights Reserved
 * @author (Adam Arthur Faizal)
 * @version (6 Juni 2020)
 */

import React, {Component, useState} from 'react'
import Head from "next/head";
import Link from "next/link";
import PropTypes from 'prop-types';
import {Transition} from 'react-transition-group';
import {
    Breadcrumb, BreadcrumbItem,
    Button,
    Card,
    CardBody,
    CardColumns,
    CardDeck,
    CardFooter,
    CardGroup,
    CardHeader,
    CardImg,
    CardImgOverlay,
    CardLink,
    CardSubtitle, CardText, CardTitle, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem,
    Col,
    Collapse,
    Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    Jumbotron, Media,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem, Pagination, PaginationItem, PaginationLink,
    Row, UncontrolledDropdown
} from 'reactstrap';
import CarouselLab from "../components/Beranda/CarouselLab/CarouselLab";
import Berita from "../components/Beranda/Berita/Berita";
import SOP from "../components/Beranda/SOP/SOP";
import Asisten from "../components/Beranda/Asisten/Asisten";

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Laboratorium Komputasi FMIPA UNS</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <AppHeader>
                    <AppNavbar/>
                </AppHeader>
                <AppMain/>
                <AppFooter/>
            </React.Fragment>
        );
    }
}

export function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="info" dark={true} fixed="top" expand="md" className="App-nav shadow">
            <Container fluid={true} className="text-center">
                <NavbarBrand href="/" className="font-weight-bold">
                    <img src='/img/logo.svg' alt="Labkom" width="30" height="30" className="d-inline-block align-top mr-1"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link href="/">
                                <a className="nav-link active">Beranda</a>
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Profil
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Profil/VisiMisi"><a>Visi & Misi</a></Link>
                                </DropdownItem>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Profil/Sejarah"><a>Sejarah</a></Link>
                                </DropdownItem>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Profil/StrukturOrganisasi"><a>Struktur Organisasi</a></Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Fasilitas
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Fasilitas/LabDataScience"><a>Lab Data Science</a></Link>
                                </DropdownItem>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Fasilitas/LabMikrokontroller"><a>Lab Mikrokontroller</a></Link>
                                </DropdownItem>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Fasilitas/LabMultimedia"><a>Lab Multimedia</a></Link>
                                </DropdownItem>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Fasilitas/LabPemrograman"><a>Lab Pemrograman</a></Link>
                                </DropdownItem>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Fasilitas/LabRPL"><a>Lab RPL</a></Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Layanan
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Layanan/PeminjamanAlat"><a>Peminjaman Alat</a></Link>
                                </DropdownItem>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Layanan/PeminjamanRuang"><a>Peminjaman Ruang</a></Link>
                                </DropdownItem>
                                <DropdownItem className="d-flex flex-column text-center pr-0 pl-0">
                                    <Link href="/Layanan/PeminjamanStudio"><a>Peminjaman Studio</a></Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <Link href="/Contact"><a className="nav-link">Contact</a></Link>
                        </NavItem>
                    </Nav>
                    <NavbarText>React Js version : {React.version}</NavbarText>
                </Collapse>
            </Container>
        </Navbar>
    )

}

export class AppHeader extends Component {
    render() {
        return (
            <header className="App-header">
                {this.props.children}
                <Jumbotron className="d-flex flex-column align-items-center justify-content-center m-0">
                    <h1 className="display-3 font-weight-bold text-light mt-4 mb-0">Laboratorium <span className="labkom">Komputasi</span> FMIPA</h1>
                    <h1 className="display-4 text-light m-0">Universitas Sebelas Maret</h1>
                </Jumbotron>
            </header>
        )
    }
}

export class AppMain extends Component {
    render() {
        return (
            <main className="App-main">
                <CarouselLab/>
                <Berita/>
                <SOP/>
                <Asisten/>
            </main>
        )
    }
}

export class AppFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.now = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.now);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <footer className="App-footer d-flex flex-column align-items-center justify-content-center">
                <Row>
                    <Col md="12" className="p-0">
                        <p className="text-white m-0">Copyright &copy; {this.state.date.getFullYear()}. Laboratorium Komputasi FMIPA UNS. All Rights Reserved.</p>
                    </Col>
                </Row>
            </footer>
        )
    }
}

// Prop-Types
Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarText.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

Container.propTypes = {
    fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    // applies .container-fluid class if bool or .container-{breakpoint} if string
}

Row.propTypes = {
    noGutters: PropTypes.bool,
    // see https://reactstrap.github.io/components/form Form Grid with Form Row
    form: PropTypes.bool,
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.shape({
        size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
        // example size values:
        // 12 || "12" => col-12 or col-`width`-12
        // auto => col-auto or col-`width`-auto
        // true => col or col-`width`
        order: stringOrNumberProp,
        offset: stringOrNumberProp
    })
]);

Col.propTypes = {
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    // override the predefined width (the ones above) with your own custom widths.
    // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
    widths: PropTypes.array,
}

Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string
};

Card.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inverse: PropTypes.bool,
    color: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
};

CardBody.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardColumns.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardDeck.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardFooter.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardGroup.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardHeader.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardImg.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
    top: PropTypes.bool,
    bottom: PropTypes.bool
};

CardImgOverlay.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardLink.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardSubtitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardText.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

CardTitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
};

Button.propTypes = {
    active: PropTypes.bool,
    'aria-label': PropTypes.string,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,
    outline: PropTypes.bool,

    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string,
            PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        ]))
    ]),

    // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),

    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,

    // use close prop for BS4 close icon utility
    close: PropTypes.bool,
}

Button.defaultProps = {
    color: 'secondary',
    tag: 'button',
}

Pagination.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    listClassName: PropTypes.string,
    cssModule: PropTypes.object,
    size: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string
};

PaginationItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

PaginationLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    next: PropTypes.bool,
    previous: PropTypes.bool,
    first: PropTypes.bool,
    last: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string
};

Media.propTypes = {
    body: PropTypes.bool,
    bottom: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    heading: PropTypes.bool,
    left: PropTypes.bool,
    list: PropTypes.bool,
    middle: PropTypes.bool,
    object: PropTypes.bool,
    right: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    top: PropTypes.bool,
};

Carousel.propTypes = {
    // the current active slide of the carousel
    activeIndex: PropTypes.number,
    // a function which should advance the carousel to the next slide (via activeIndex)
    next: PropTypes.func.isRequired,
    // a function which should advance the carousel to the previous slide (via activeIndex)
    previous: PropTypes.func.isRequired,
    // controls if the left and right arrow keys should control the carousel
    keyboard: PropTypes.bool,
    /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
     * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
     */
    pause: PropTypes.oneOf(['hover', false]),
    // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
    // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
    ride: PropTypes.oneOf(['carousel']),
    // the interval at which the carousel automatically cycles (default: 5000)
    // If set to false, carousel will not Autoplay (i.e. will not automatically cycle).
    interval: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
    ]),
    children: PropTypes.array,
    // called when the mouse enters the Carousel
    mouseEnter: PropTypes.func,
    // called when the mouse exits the Carousel
    mouseLeave: PropTypes.func,
    // controls whether the slide animation on the Carousel works or not
    slide: PropTypes.bool,
    cssModule: PropTypes.object,
    // controls whether the touch gestures on the Carousel works or not (default: true)
    enableTouch: PropTypes.bool,
};

CarouselItem.propTypes = {
    ...Transition.propTypes,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    in: PropTypes.bool,
    cssModule: PropTypes.object,
    children: PropTypes.node,
    slide: PropTypes.bool,
};

CarouselControl.propTypes = {
    direction: PropTypes.oneOf(['prev', 'next']).isRequired,
    onClickHandler: PropTypes.func.isRequired,
    cssModule: PropTypes.object,
    directionText: PropTypes.string
};

CarouselIndicators.propTypes = {
    items: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    cssModule: PropTypes.object,
    onClickHandler: PropTypes.func.isRequired
};

CarouselCaption.propTypes = {
    captionHeader: PropTypes.node,
    captionText: PropTypes.node.isRequired,
    cssModule: PropTypes.object
};

Dropdown.propTypes = {
    a11y: PropTypes.bool, // defaults to true. Set to false to enable more bootstrap like tabbing behavior
    disabled: PropTypes.bool,
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
    group: PropTypes.bool,
    isOpen: PropTypes.bool,
    // For Dropdown usage inside a Nav
    nav: PropTypes.bool,
    active: PropTypes.bool,
    // For Dropdown usage inside a Navbar (disables popper)
    inNavbar: PropTypes.bool,
    tag: PropTypes.string, // default: 'div' unless nav=true, then 'li'
    toggle: PropTypes.func,
    setActiveFromChild: PropTypes.bool
};

DropdownToggle.propTypes = {
    caret: PropTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    'data-toggle': PropTypes.string,
    'aria-haspopup': PropTypes.bool,
    // For DropdownToggle usage inside a Nav
    nav: PropTypes.bool,
    // Defaults to Button component
    tag: PropTypes.any
};

DropdownMenu.propTypes = {
    tag: PropTypes.string,
    children: PropTypes.node.isRequired,
    right: PropTypes.bool,
    flip: PropTypes.bool, // default: true,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    // Custom modifiers that are passed to DropdownMenu.js, see https://popper.js.org/popper-documentation.html#modifiers
    modifiers: PropTypes.object,
    persist: PropTypes.bool, // presist the popper, even when closed. See #779 for reasoning
    // passed to popper, see https://popper.js.org/popper-documentation.html#Popper.Defaults.positionFixed
    positionFixed: PropTypes.bool
};

DropdownItem.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    divider: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    header: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    toggle: PropTypes.bool // default: true
};

Breadcrumb.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    listClassName: PropTypes.string,
    cssModule: PropTypes.object,
    children: PropTypes.node,
    'aria-label': PropTypes.string
};

BreadcrumbItem.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    active: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
};
