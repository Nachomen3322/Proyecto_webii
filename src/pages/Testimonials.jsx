import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const Testimonials = () => {
  const testimonies = [
    {
      id: 1,
      name: "Juan Pérez",
      opinion:
        "¡Excelente experiencia! Los profesores son muy dedicados y el método de enseñanza es efectivo.",
    },
    {
      id: 2,
      name: "María González",
      opinion:
        "Estoy sorprendida con mi progreso. Recomiendo esta escuela a todos los que quieran aprender un nuevo idioma.",
    },
    {
      id: 3,
      name: "Carlos Rodríguez",
      opinion:
        "Increíble ambiente de aprendizaje. Los cursos son divertidos y desafiantes al mismo tiempo.",
    },
    {
      id: 3,
      name: "Carlos Rodríguez",
      opinion:
        "Increíble ambiente de aprendizaje. Los cursos son divertidos y desafiantes al mismo tiempo.",
    },
    {
      id: 4,
      name: "Carlos Rodríguez",
      opinion:
        "Increíble ambiente de aprendizaje. Los cursos son divertidos y desafiantes al mismo tiempo.",
    },
    {
      id: 5,
      name: "Carlos Rodríguez",
      opinion:
        "Increíble ambiente de aprendizaje. Los cursos son divertidos y desafiantes al mismo tiempo.",
    },
    {
      id: 6,
      name: "Carlos Rodríguez",
      opinion:
        "Increíble ambiente de aprendizaje. Los cursos son divertidos y desafiantes al mismo tiempo.",
    },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="display-4">Testimonios</h1>
        </Col>
      </Row>
      <Row>
        {testimonies.map((testimonial) => (
          <Col key={testimonial.id} lg={4} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>{testimonial.opinion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
