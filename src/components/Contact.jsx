import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

function Contact() {
  return (
    <section id="Contato" className="section bg-gradient-default">
      <Container className="pt-lg pb-200">
        <Row className="text-center justify-content-center">
          <Col lg="10">
            <h2 className="display-3 text-white">Faça sua ideia acontecer</h2>
            <p className="lead text-white">
              Nós oferecemos atendimento técnico, especializado e personalizado para que você consiga desenvolver seu projeto, do jeito que você sempre imaginou. Entre em contato e converse com nossa equipe, nós podemos ajudar você!
            </p>
          </Col>
        </Row>
        <Row className="row-grid mt-5 text-center justify-content-center">
          <Col lg="4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="fa fa-envelope text-primary" />
            </div>
            <h5 className="mt-3">
              <a className="text-white" href="mailto:contato@purpletech.com.br">
                contato@purpletech.com.br
              </a>
            </h5>
          </Col>
          <Col lg="4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="fa fa-whatsapp text-primary" />
            </div>
            <h5 className="mt-3">
              <a className="text-white" href="https://wa.me/5519995360651">
                (19) 9 9536-0651
              </a>
            </h5>
          </Col>
        </Row>
      </Container>
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
}

export default Contact;
