import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Headroom from 'headroom.js';
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

class NavBar extends React.Component {
  componentDidMount() {
    const headroom = new Headroom(document.getElementById('navbar-main'));
    headroom.init();
  }

  render() {
    const { page } = this.props;

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand
                className="mr-lg-5"
                to={page === 'primary' ? '#!' : '/'}
                tag={Link}
              >
                <img
                  alt="Logotipo"
                  src={require('../assets/logo-white.svg')}
                />
              </NavbarBrand>
              <Button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </Button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to={page === 'primary' ? '#!' : '/'}>
                        <img
                          alt="Logotipo"
                          src={require('../assets/logo.svg')}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <Button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </Button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  {page === 'primary'
                    ? (
                      <>
                        <AnchorLink
                          className="nav-link"
                          href="#Home"
                        >
                          <i className="ni ni-atom d-lg-none mr-1" />
                          <span className="nav-link-inner--text">Home</span>
                        </AnchorLink>
                        <AnchorLink
                          className="nav-link"
                          href="#Servicos"
                        >
                          <i className="ni ni-ruler-pencil d-lg-none mr-1" />
                          <span className="nav-link-inner--text">Serviços</span>
                        </AnchorLink>
                        <AnchorLink
                          className="nav-link"
                          href="#Portfolio"
                        >
                          <i className="ni ni-spaceship d-lg-none mr-1" />
                          <span className="nav-link-inner--text">Portfólio</span>
                        </AnchorLink>
                        <AnchorLink
                          className="nav-link"
                          href="#Contato"
                        >
                          <i className="ni ni-notification-70 d-lg-none mr-1" />
                          <span className="nav-link-inner--text">Contato</span>
                        </AnchorLink>
                      </>
                    )
                    : (
                      <Link
                        to="/"
                        className="nav-link"
                      >
                        <i className="ni ni-curved-next d-lg-none mr-1" />
                        <span className="nav-link-inner--text">
                          Voltar para a página inicial
                        </span>
                      </Link>
                    )}
                  <a
                    className="nav-link fix-navLink"
                    href="https://app.purpletech.com.br"
                  >
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-paper-plane mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Solicitar orçamento
                      </span>
                    </Button>
                  </a>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://app.purpletech.com.br"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-paper-plane mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Solicitar orçamento
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default NavBar;
