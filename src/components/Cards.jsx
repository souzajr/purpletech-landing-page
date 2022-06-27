import React from 'react';
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from 'reactstrap';

const Cards = () => (
  <section id="SaibaMais" className="section section-lg pt-lg-0 mt--150">
    <Container>
      <Row className="justify-content-center">
        <Col lg="12">
          <Row className="row-grid">
            <Col lg="3">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className="custom-icon icon icon-shape icon-shape-primary rounded-circle mb-4">
                    <img alt="icone" src={require('../assets/icons/www.svg')} height="40px;" />
                  </div>
                  <h6 className="text-primary text-uppercase">
                    APLICAÇÕES WEB
                  </h6>
                  <p className="description mt-3">
                    Sites responsivos que se adequam às necessidades modernas.
                  </p>
                  <hr />
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className="custom-icon icon icon-shape icon-shape-success rounded-circle mb-4">
                    <img alt="icone" src={require('../assets/icons/gamification.svg')} height="40px;" />
                  </div>
                  <h6 className="text-success text-uppercase">
                    APLICAÇÕES MOBILE
                  </h6>
                  <p className="description mt-3">
                    Desenvolvimento de aplicativos para as plataformas Android e iOS.
                  </p>
                  <hr />
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className="custom-icon icon icon-shape icon-shape-default rounded-circle mb-4">
                    <img alt="icone" src={require('../assets/icons/graphic-design.svg')} height="40px;" />
                  </div>
                  <h6 className="text-default text-uppercase">
                    IDENTIDADE VISUAL
                  </h6>
                  <p className="description mt-3">
                    Seu site feito do seu jeito. Design feito sob medida para cada cliente.
                  </p>
                  <hr />
                </CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className="custom-icon icon icon-shape icon-shape-warning rounded-circle mb-4">
                    <img alt="icone" src={require('../assets/icons/cloud-computing.svg')} height="40px;" />
                  </div>
                  <h6 className="text-warning text-uppercase">
                    ESCALABILIDADE
                  </h6>
                  <p className="description mt-3">
                    Com tecnologia cloud first, seu site estará pronto para qualquer demanda.
                  </p>
                  <hr />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Cards;
