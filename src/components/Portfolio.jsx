import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';
import listOfPortfolio from '../portfolio';

function Portfolio() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState();

  function handleDetails(index) {
    setCurrentCustomer(listOfPortfolio[index]);
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

      <section id="Portfolio" className="section bg-secondary section-lg">
        <Container>
          <Row className="justify-content-center text-center mb-lg">
            <Col lg="8">
              <h2 className="display-3">
                Portfólio
              </h2>
              <p className="lead text-muted">
                Confira alguns projetos feitos pela PurpleTech. Nossa equipe está
                preparada para atender suas necessidas e criar o produto ideal
                para você e sua empresa.
              </p>
            </Col>
          </Row>
          <Row>
            {listOfPortfolio.map((custumer, index) => (
              <Col
                key={custumer.id}
                md="4"
                className="mt-sm"
              >
                <Card className="custom-card shadow shadow-lg--hover fix-mobile">
                  {/* eslint-disable-next-line */}
                  <img
                    alt={custumer.name}
                    onClick={() => handleDetails(index)}
                    src={custumer.images[0]}
                    loading="lazy"
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
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Portfolio;
