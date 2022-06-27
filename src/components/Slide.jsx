import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

const Slide = () => (
  <>
    <div className="position-relative" id="Home">
      <section className="fix-height-section section-profile-cover section-shaped my-0 mt-100">
        <div className="shape shape-style-1 shape-primary alpha-4">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <Container className="shape-container d-flex align-items-center py-lg mt--100">
          <div className="col px-0">
            <Row>
              <Col className="mb--50" lg="6">
                <h1 className="display-3 text-white">
                  Sua empresa na web
                  <span>A solução para o seu negócio, blog ou portal está aqui.</span>
                </h1>
                <p className="lead text-white">Construímos sistemas inteligentes, modernos e práticos para as suas necessidades. Com uma equipe preparada e tecnologia de ponta, entregamos a escalabilidade e segurança que a sua ideia precisa.</p>
                <div className="btn-wrapper">
                  <AnchorLink offset="100" className="btn btn-info btn-icon mb-3 mb-sm-0" href="#SaibaMais">
                    <span className="btn-inner--icon"><i className="fa fa-code" /></span>
                    <span className="btn-inner--text">Saiba mais</span>
                  </AnchorLink>
                  <AnchorLink offset="100" className="btn btn-white btn-icon mb-3 mb-sm-0" href="#Contato">
                    <span className="btn-inner--icon"><i className="fa fa-envelope" /></span>
                    <span className="btn-inner--text">Mande uma mensagem</span>
                  </AnchorLink>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <div className="separator separator-bottom separator-skew zindex-100">
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </div>
  </>
);

export default Slide;
