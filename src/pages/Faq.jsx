import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

export const FAQPage = () => {
  const faqData = [
    {
      id: 1,
      question: '¿Cuáles son los requisitos para inscribirme en un curso?',
      answer: 'Los requisitos varían según el curso. En general, solo necesitas tener interés en aprender el idioma correspondiente y un dispositivo con conexión a internet.',
    },
    {
      id: 2,
      question: '¿Cómo puedo realizar el pago de mi curso?',
      answer: 'Aceptamos pagos en línea a través de tarjetas de crédito o débito. También ofrecemos opciones de pago mensual y anual para mayor flexibilidad.',
    },
    {
      id: 3,
      question: '¿Cuánto tiempo dura cada curso?',
      answer: 'La duración de cada curso varía. Puedes encontrar información detallada sobre la duración en la página de descripción de cada curso.',
    },
    {
      id: 4,
      question: '¿Ofrecen descuentos para grupos o empresas?',
      answer: 'Sí, ofrecemos descuentos para grupos y empresas. Ponte en contacto con nuestro equipo de ventas para obtener más información sobre tarifas corporativas.',
    },
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="display-4">Preguntas Frecuentes</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {faqData.map((faq) => (
            <Card key={faq.id} className="mb-3">
              <Card.Header>{faq.question}</Card.Header>
              <Card.Body>{faq.answer}</Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
