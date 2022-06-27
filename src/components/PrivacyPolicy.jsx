import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import NavBar from './NavBar';
import Footer from './Footer';

class PrivacyPolicy extends React.Component {
  componentDidMount() {
    document.title = 'PurpleTech - Política de privacidade';
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <style>
          {`
            p {
              text-align: justify;
            }
          `}
        </style>

        <NavBar page="secondary" />
        <main ref="main">
          <div className="position-relative">
            <section className="section-profile-cover section-shaped my-0 mt-100">
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
                    <Col className="mb--100" lg="6">
                      <h1 className="display-3 text-white">
                        Política de privacidade
                      </h1>
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
          <section id="Servicos" className="section section-lg">
            <Container>
              <Row className="justify-content-center mb-lg">
                <Col lg="12">
                  <h4>SEÇÃO 1 – O QUE FAREMOS COM ESTA INFORMAÇÃO?</h4>
                  <p className="lead text-muted">
                    Quando você acessa nosso site, também recebemos automaticamente o protocolo de internet do seu computador, endereço de IP, a fim de obter informações que nos ajudam a aprender sobre seu navegador e sistema operacional.
                    <br />
                    Email Marketing será realizado apenas caso você permita. Nestes emails você poderá receber notícia sobre nosso site e outras atualizações.
                  </p>
                </Col>
                <Col lg="12">
                  <h4>SEÇÃO 2 – CONSENTIMENTO</h4>
                  <p className="lead text-muted">
                    Obtemos seu consentimento quando você fornece informações pessoais como nome, telefone e endereço. Após a realização dessas ações entendemos que você está de acordo com a coleta de dados para serem utilizados pela nossa empresa.
                    <br />
                    Se pedirmos por suas informações pessoais por uma razão secundária, como marketing, vamos lhe pedir diretamente por seu consentimento ou lhe fornecer a oportunidade de dizer não.
                    <br />
                    Para retirar seu consentimento, entre em contato conosco em&nbsp;
                    <a href="mailto:contato@purpletech.com.br">
                      contato@purpletech.com.br
                    </a>
                    .
                  </p>
                </Col>
                <Col lg="12">
                  <h4>SEÇÃO 3 – DIVULGAÇÃO</h4>
                  <p className="lead text-muted">
                    Seus dados e informações pessoais não serão divulgados ou fornecidos para terceiros, exceto por determinação judicial.
                  </p>
                </Col>
                <Col lg="12">
                  <h4>SEÇÃO 4 – SERVIÇOS DE TERCEIROS</h4>
                  <p className="lead text-muted">
                    No geral, os fornecedores terceirizados usados por nós irão apenas coletar, usar e divulgar suas informações na medida do necessário para permitir que eles realizem os serviços que eles nos fornecem.
                    <br />
                    Entretanto, certos fornecedores de serviços terceirizados, tais como gateways de pagamento e outros processadores de transação de pagamento, têm suas próprias políticas de privacidade com respeito à informação que somos obrigados a fornecer para eles suas transações relacionadas com compras.
                    <br />
                    Para esses fornecedores, recomendamos que você leia suas políticas de privacidade para que você possa entender a maneira na qual suas informações pessoais serão usadas por esses fornecedores.
                    <br />
                    Em particular, lembre-se que certos fornecedores podem ser localizados ou possuir instalações que são localizadas em jurisdições diferentes que você ou nós. Assim, se você quer continuar com uma transação que envolve os serviços de um fornecedor de serviço terceirizado, então suas informações podem tornar-se sujeitas às leis da(s) jurisdição(ões) nas quais o fornecedor de serviço ou suas instalações estão localizados.
                    <br />
                    Como um exemplo, se você está localizado no Canadá e sua transação é processada por um gateway de pagamento localizado nos Estados Unidos, então suas informações pessoais usadas para completar aquela transação podem estar sujeitas a divulgação sob a legislação dos Estados Unidos, incluindo o Ato Patriota.
                    <br />
                    Uma vez que você deixe o site ou seja redirecionado para um aplicativo ou site de terceiros, você não será mais regido por essa Política de Privacidade do nosso site.
                    <br />
                    Quando você clica em links no nosso site, eles podem lhe direcionar para fora do nosso site. Não somos responsáveis pelas práticas de privacidade de outros sites e lhe incentivamos a ler as declarações de privacidade deles.
                  </p>
                </Col>
                <Col lg="12">
                  <h4>SEÇÃO 5 – SEGURANÇA</h4>
                  <p className="lead text-muted">
                    Para proteger suas informações pessoais, tomamos todas as precauções obedecendo a legislações em vigor, Lei Geral de Proteção aos Dados, Código Civil, Código do Consumidor e demais leis.
                  </p>
                </Col>
                <Col lg="12">
                  <h4>SEÇÃO 6 – ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE</h4>
                  <p className="lead text-muted">
                    Reservamos o direito de modificar essa política de privacidade a qualquer momento, então por favor, revise-a com frequência. Alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação no site. Se fizermos alterações de materiais para essa política, iremos notificá-lo aqui que eles foram atualizados, para que você tenha ciência sobre quais informações coletamos, como as usamos, e sob que circunstâncias, se alguma, usamos e/ou divulgamos elas.
                    <br />
                    Se nosso site for adquirido ou fundido com outra empresa, suas informações podem ser transferidas para os novos proprietários.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default PrivacyPolicy;
