import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
} from 'reactstrap';
import InputMask from 'react-input-mask';
import { sendMessage } from '../services';

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  toast.configure({
    position: 'bottom-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  function notify(text) {
    toast.error(text);
  }

  function handleSendMessage(e) {
    e.preventDefault();

    const data = {
      name,
      phone,
      email,
      message,
    };

    sendMessage(data)
      .then(() => {
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');

        document.getElementById('formSendMessage').reset();

        document.getElementById('alert-message')
          .classList.remove('custom-alert-hide');
        document.getElementById('alert-message')
          .classList.add('custom-alert-show');
      })
      .catch((err) => {
        notify(err.response.data);

        document.getElementById('alert-message')
          .classList.add('custom-alert-hide');
        document.getElementById('alert-message')
          .classList.remove('custom-alert-show');

        if (err.response.data === 'Digite seu nome') {
          document.getElementById('formName').classList.add('has-danger');
          document.getElementById('inputName').focus();
        } else if (err.response.data === 'Digite seu telefone') {
          document.getElementById('formPhone').classList.add('has-danger');
          document.getElementById('inputPhone').focus();
        } else if (err.response.data === 'Digite seu Email') {
          document.getElementById('formEmail').classList.add('has-danger');
          document.getElementById('inputEmail').focus();
        } else if (err.response.data === 'Email inválido') {
          document.getElementById('formEmail').classList.add('has-danger');
          document.getElementById('inputEmail').focus();
        } else {
          document.getElementById('formMessage').classList.add('has-danger');
          document.getElementById('inputMessage').focus();
        }
      });
  }

  return (
    <>
      <section id="Contato" className="section section-lg bg-gradient-default">
        <Container className="pt-lg pb-300">
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
                <i className="fa fa-phone text-primary" />
              </div>
              <h5 className="mt-3">
                <a className="text-white" href="tel:+5519995360651">
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
      {/* <section id="MandeUmaMensagem" className="section section-lg pt-lg-0 section-contact-us">
        <Container>
          <Row className="justify-content-center mt--300">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  <h4 className="mb-1">Mande uma mensagem</h4>
                  <p className="mt-0">
                    Tire suas dúvidas ou peça um orçamento sem compromisso
                  </p>
                  <form id="formSendMessage" onSubmit={(e) => handleSendMessage(e)}>
                    <div id="formName" className="form-group mt-5">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-user" />
                          </span>
                        </div>
                        <input
                          id="inputName"
                          className="form-control"
                          placeholder="Nome"
                          type="text"
                          onChange={(e) => {
                            setName(e.target.value);
                            document.getElementById('formName')
                              .classList.remove('has-danger');
                          }}
                        />
                      </div>
                    </div>
                    <Row>
                      <Col lg="6">
                        <div id="formPhone" className="form-group">
                          <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="fa fa-phone" />
                              </span>
                            </div>
                            <InputMask
                              mask="(99) 99999-9999"
                              onChange={(e) => {
                                setPhone(e.target.value);
                                document.getElementById('formPhone')
                                  .classList.remove('has-danger');
                              }}
                            >
                              {() => (
                                <input
                                  id="inputPhone"
                                  className="form-control"
                                  placeholder="Telefone"
                                  type="text"
                                />
                              )}
                            </InputMask>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div id="formEmail" className="form-group">
                          <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="ni ni-email-83" />
                              </span>
                            </div>
                            <input
                              id="inputEmail"
                              className="form-control"
                              placeholder="Email"
                              type="email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                                document.getElementById('formEmail')
                                  .classList.remove('has-danger');
                              }}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div id="formMessage" className="form-group mb-4">
                      <textarea
                        id="inputMessage"
                        className="form-control form-control-alternative"
                        rows="4"
                        cols="80"
                        placeholder="Mensagem"
                        onChange={(e) => {
                          setMessage(e.target.value);
                          document.getElementById('formMessage')
                            .classList.remove('has-danger');
                        }}
                      />
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="btn btn-default btn-round btn-block btn-lg"
                      >
                        Enviar mensagem
                      </Button>
                    </div>
                    <div
                      id="alert-message"
                      className="custom-alert-hide
                        alert alert-success alert-dismissible fade show mt-sm"
                      role="alert"
                    >
                      <span className="alert-inner--icon">
                        <i className="ni ni-like-2" />
                      </span>
                      <span className="alert-inner--text">
                        <strong>Sucesso!</strong>
                        {' '}
Sua mensagem foi enviada.
                      </span>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
}

export default Contact;
