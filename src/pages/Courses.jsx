import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Inglés para Principiantes',
      description: 'Curso diseñado para aquellos que están dando sus primeros pasos en el aprendizaje del inglés. No se requieren conocimientos previos.',
      details: 'Duración: 8 semanas | Horario: Lunes y Miércoles, 18:00 - 19:30',
    },
    {
      id: 2,
      title: 'Conversación Avanzada en Inglés',
      description: 'Este curso está dirigido a estudiantes que desean mejorar sus habilidades de conversación en inglés y ganar fluidez.',
      details: 'Duración: 10 semanas | Horario: Martes y Jueves, 19:00 - 20:30',
    },
    {
      id: 3,
      title: 'Preparación para Exámenes TOEFL',
      description: 'Curso intensivo diseñado para ayudar a los estudiantes a prepararse para el examen TOEFL y alcanzar puntajes más altos.',
      details: 'Duración: 6 semanas | Horario: Sábado, 10:00 - 13:00',
    },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="display-4">Nuestros Cursos</h1>
        </Col>
      </Row>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} lg={4} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Card.Text className="text-muted">{course.details}</Card.Text>
                <Button variant="primary">Más Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

