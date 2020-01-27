import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

const Footer = () => (
  <>
    <footer className="footer has-cards">
      <Container>
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-primary font-weight-light mb-2">
              Ficou com dúvida?
            </h3>
            <h4 className="mb-0 font-weight-light">
              Entre em contato através das redes sociais ou mande um Email :)
            </h4>
          </Col>
          <Col lg="6" className="text-lg-center btn-wrapper">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/purpletechbr"
              className="btn btn-neutral btn-icon-only btn-facebook btn-lg btn-round"
              data-toggle="tooltip"
              data-original-title="Facebook"
            >
              <i className="fa fa-facebook" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/purpletechbrasil/"
              className="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Instagram"
            >
              <i className="fa fa-instagram" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.me/5519995360651"
              className="btn btn-neutral btn-icon-only btn-whatsapp btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="WhatsApp"
            >
              <i className="fa fa-whatsapp" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:contato@purpletech.com.br"
              className="btn btn-neutral btn-icon-only btn-behance btn-lg btn-round"
              data-toggle="tooltip"
              data-original-title="Email"
            >
              <i className="fa fa-envelope" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/purpletechbr"
              className="btn btn-neutral btn-icon-only btn-github btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Github"
            >
              <i className="fa fa-github" />
            </a>
          </Col>
        </Row>
        <hr />
        <Row className="align-items-center justify-content-md-between">
          <Col md="6">
            <div className="copyright">
              ©&nbsp;
              {new Date().getFullYear()}
              &nbsp;
              PurpleTech
              <br />
              CNPJ 36.137.183/0001-39
            </div>
          </Col>
          <Col md="6">
            <ul className="nav nav-footer justify-content-end fix-content-footer">
              <li className="nav-item">
                <a href="/politica-de-privacidade" className="nav-link">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>

    <style jsx>
      {`
        @media screen and (max-width: 600px) {
          .fix-content-footer {
            justify-content: flex-start !important;
            margin-left: -12px !important;
          }
        }
      `}
    </style>
  </>
);

export default Footer;
