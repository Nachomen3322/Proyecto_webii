import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const Events = () => {
  const events = [
    {
      id: 1,
      title: "Taller de Inmersión en Inglés",
      date: "25 de marzo de 2023",
      details:
        "Únete a nuestro taller de inmersión en inglés, donde practicarás el idioma de manera intensiva y participativa.",
    },
    {
      id: 2,
      title: "Conferencia sobre Cultura Angloamericana",
      date: "10 de abril de 2023",
      details:
        "Descubre la riqueza y diversidad de la cultura angloamericana en nuestra conferencia especializada.",
    },
    {
      id: 3,
      title: "Evento Social: Noche de Película en Inglés",
      date: "5 de mayo de 2023",
      details:
        "Disfruta de una noche de película en inglés con compañeros estudiantes. Popcorn incluido.",
    },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="display-4">Próximos Eventos</h1>
        </Col>
      </Row>
      <Row>
        {events.map((event) => (
          <Col key={event.id} lg={4} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                  <strong>Fecha:</strong> {event.date}
                </Card.Text>
                <Card.Text>{event.details}</Card.Text>
                <Button variant="primary">Más Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

