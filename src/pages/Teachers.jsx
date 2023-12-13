import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: 'Profesor(a) Juanita González',
      bio: 'Licenciada en Lingüística Aplicada con más de 10 años de experiencia en la enseñanza de idiomas. Especializada en la enseñanza de inglés para principiantes.',
      image: 'https://placekitten.com/200/200', // Cambia la URL por la de la foto del profesor
    },
    {
      id: 2,
      name: 'Profesor Roberto Fernández',
      bio: 'Doctor en Filología Inglesa con enfoque en la fonética y pronunciación. Apasionado por ayudar a los estudiantes a perfeccionar su acento y entonación.',
      image: 'https://placekitten.com/201/201', // Cambia la URL por la de la foto del profesor
    },
    {
      id: 3,
      name: 'Profesora María López',
      bio: 'Máster en Enseñanza de Idiomas con énfasis en tecnologías educativas. Utiliza enfoques innovadores para hacer que el aprendizaje sea divertido y efectivo.',
      image: 'https://placekitten.com/202/202', // Cambia la URL por la de la foto del profesor
    },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="display-4">Nuestros Profesores</h1>
        </Col>
      </Row>
      <Row>
        {teachers.map((teacher) => (
          <Col key={teacher.id} lg={4} md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={teacher.image} alt={teacher.name} />
              <Card.Body>
                <Card.Title>{teacher.name}</Card.Title>
                <Card.Text>{teacher.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

