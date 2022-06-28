import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from 'reactstrap';

const Services = () => (
  <>
    <section id="Servicos" className="section section-lg">
      <Container>
        <Row className="justify-content-center text-center mb-lg">
          <Col lg="8">
            <h2 className="display-3">O que nós oferecemos?</h2>
            <p className="lead text-muted">
              A PurpleTech atua há cinco anos no mercado com seriedade e excelência no atendimento para dar vida a sua ideia e potencializar seu sucesso.
            </p>
          </Col>
        </Row>
        <Row className="row-grid align-items-center">
          <Col md="6" className="order-md-2">
            <img
              alt="Desenvolvimento web"
              src={require('../assets/img/desenvolvimento-web.png')}
              className="img-fluid floating"
              loading="lazy"
            />
          </Col>
          <Col md="6" className="order-md-1">
            <div className="pr-md-5">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <i className="ni ni-spaceship" />
              </div>
              <h3><b>Web Development</b></h3>
              <h5>- eCommerce, blogs, sites institucionais, landing page e outros</h5>
              <p>Desenvolvimento e soluções para seu site, como integração de estoque entre loja física e online, SEO avançado, cloud computing, implementação de gateways de pagamento e muito mais.</p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-success mr-3">
                        <i className="ni ni-settings-gear-65" />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Cuidadosamente construído</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-success mr-3">
                        <i className="ni ni-html5" />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Tecnologia de ponta</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-success mr-3">
                        <i className="ni ni-satisfied" />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Satisfação garantida</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="section pb-0 bg-gradient-warning">
      <Container>
        <Row className="row-grid align-items-center">
          <Col lg="6" className="order-lg-2 ml-lg-auto">
            <div className="position-relative pl-md-5">
              <img
                alt="Desenvolvimento de app"
                src={require('../assets/img/desenvolvimento-app.png')}
                className="img-center img-fluid"
                loading="lazy"
              />
            </div>
          </Col>
          <Col lg="6" className="order-lg-1">
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white">App Development</h4>
                <p className="text-white">
                  Desenvolvimento e criação de aplicativos para Android e iOS. Venda, monitore e controle seu negócio de qualquer lugar: integre sua plataforma web para dispositivos mobile.
                </p>
              </div>
            </div>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                      <i className="ni ni-shop" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-success">Sua loja em um aplicativo</h5>
                    <p>
                      Segundo estudos feitos pelo Google, o acesso à internet é majoriariamente mobile. Ofereça seus serviços e produtos através de um app e aumente sua conversão de vendas.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-trophy" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-warning">Tenha um diferencial</h5>
                    <p>Dê o próximo passo além da web, ofereça para seus clientes um aplicativo moderno, bonito, rápido e seguro.</p>
                  </div>
                </div>
              </CardBody>
            </Card>
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
    <section className="section section-lg">
      <Container>
        <Row className="row-grid align-items-center">
          <Col md="6">
            <Card className="bg-default shadow border-0">
              <CardImg
                alt="Web development"
                src={require('../assets/img/home_webdeveloper.jpg')}
                loading="lazy"
              />
              <blockquote className="card-blockquote">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="svg-bg">
                  <polygon points="0,52 583,95 0,95" className="fill-default" />
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" className="fill-default" />
                </svg>
                <h4 className="display-3 font-weight-bold text-white">
                  Tech Development
                </h4>
                <p className="lead text-italic text-white">
                  Aplicações para web desenvolvidas com ferramentas modernas. Em fase final de construção, testes rigorosos de qualidade e estabilidade são aplicados garantindo, assim, um produto final de alto nível.
                </p>
              </blockquote>
            </Card>
          </Col>
          <Col md="6">
            <div className="pl-md-5">
              <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                <i className="ni ni-building" />
              </div>
              <h3>Sistemas seguros, robustos e amigáveis para atenderem às suas necessidades</h3>
              <p className="lead">
                Nós trabalhamos com metodologias ágeis que permitem um rápido desenvolvimento, colocando seu projeto no ar em pouquíssimo tempo.
              </p>
              <p>
                Seja para sua loja ou escritório, nós temos a solução ideal e com preços competitivos para que você tenha o melhor custo-benefício.
              </p>
              <p>
                Desenvolvemos aplicações para todos os tamanhos de empresa, da pequena à grande, com a mesma seriedade e qualidade.
              </p>
              <p className="mt-5">
                <AnchorLink
                  className="font-weight-bold text-warning"
                  href="#Contato"
                >
                  Entre em contato e peça seu orçamento
                </AnchorLink>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default Services;
