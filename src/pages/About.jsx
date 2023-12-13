import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="display-4">Acerca de Nosotros</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <p>
            Bienvenido a nuestra escuela de idiomas, donde nos dedicamos a
            proporcionar una educación de calidad que permita a los estudiantes
            aprender y hablar un nuevo idioma con confianza.
          </p>
          <p>
            Nuestra misión es brindar un ambiente de aprendizaje inclusivo y
            estimulante, donde los estudiantes puedan desarrollar sus
            habilidades lingüísticas de manera efectiva.
          </p>
          <p>
            Con un equipo de profesionales altamente calificados y apasionados,
            estamos comprometidos a guiar a nuestros estudiantes en su viaje de
            aprendizaje de idiomas.
          </p>
          <h3>Nuestro Equipo</h3>
          <ul>
            <li>Profesora Ana Martínez - Directora Académica</li>
            <li>Dr. Luis Ramírez - Experto en Fonética</li>
            <li>María Fernández - Especialista en Enseñanza Online</li>
          </ul>
          <ul>
            <li>Creador: Ignacio Leo Condori Rojas</li>
            <li>C.I: 12704046 LP</li>
            <li>Paralelo: D</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
