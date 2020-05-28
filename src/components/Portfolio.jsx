import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { getPortfolio } from '../services';

function Portfolio() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState('');
  const [customers, setCustomers] = useState('');

  useEffect(() => {
    getPortfolio()
      .then((response) => setCustomers(response.data))
      .catch(() => setCustomers(''));
  }, []);

  function handleDetails(index) {
    setCurrentCustomer(customers[index]);
    setIsOpen(true);
  }

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={currentCustomer.images[photoIndex]}
          nextSrc={
            currentCustomer.images[(photoIndex + 1)
              % currentCustomer.images.length]
          }
          prevSrc={
            currentCustomer.images[(photoIndex
              + currentCustomer.images.length - 1)
              % currentCustomer.images.length]
          }
          imageTitle={currentCustomer.name}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex(
            (photoIndex + currentCustomer.images.length - 1)
                % currentCustomer.images.length,
          )}
          onMoveNextRequest={() => setPhotoIndex(
            (photoIndex + 1) % currentCustomer.images.length,
          )}
        />
      )}

      <style jsx>
        {`
          @media (max-width: 600px) {
            .fix-mobile {
              margin-left: 30px !important;
            }
          }
        `}
      </style>

      <section id="Portfolio" className="section bg-secondary section-lg">
        <Container>
          <Row className="justify-content-center text-center mb-lg">
            <Col lg="8">
              <h2 className="display-3">
                Portfólio
              </h2>
              <p className="lead text-muted">
                Confira alguns projetos feitos pela PurpleTech. Nossa equipe está preparada para atender suas necessidas e criar o produto ideal para você e sua empresa.
              </p>
            </Col>
          </Row>
          <Row>
            {customers.length ? customers.map((custumer, index) => (
              <Col
                key={custumer._id}
                md="4"
                className="mt-sm"
              >
                <Card className="custom-card shadow shadow-lg--hover fix-mobile">
                  <CardImg
                    alt={custumer.name}
                    onClick={() => handleDetails(index)}
                    src={custumer.images[0]}
                  />
                  <CardBody>
                    <h5>
                      <CardTitle>
                        {custumer.name}
                      </CardTitle>
                    </h5>
                    <CardText>
                      {custumer.description}
                    </CardText>
                    <a
                      onClick={() => handleDetails(index)}
                      href="#!"
                      className="btn btn-primary"
                    >
                      Detalhes
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={custumer.url}
                      className="float-right mt-2"
                    >
                      Ver site
                    </a>
                  </CardBody>
                </Card>
              </Col>
            )) : <h3>Carregando...</h3>}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Portfolio;
