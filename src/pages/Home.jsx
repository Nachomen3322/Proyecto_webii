import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import { VideoComponent } from "../components/VideoComponent";

export const Home = () => {
  return (
    <section class="p-3 mb-2 bg-primary text-white">
      <h1>Welcome to Language Corp</h1>
      <Carousel>
        <Carousel.Item className="flex ">
          <Image
            src="https://img.freepik.com/free-photo/people-posing-together-registration-day_23-2149096744.jpg"
            alt="Descripción de la imagen"
            fluid
          />
          <Carousel.Caption>
            <h3>Learn English</h3>
            <p>
              Learn english in ou 3 year full course, speak fluently and start
              your journey now!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://erudera.com/media/images/spain-3988367_1920.2e16d0ba.fill-16000x9000.jpg"
            alt="Descripción de la imagen"
            fluid
          />
          <Carousel.Caption>
            <h3>Learn Spanish</h3>
            <p>
              Aprende inglés en nuestro curso completo de 3 años, habla con
              fluidez y comienza tu viaje ahora.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://www.fluentin3months.com/wp-content/uploads/2021/09/why-are-french-people-so-rude.jpg"
            alt="Descripción de la imagen"
            fluid
          />
          <Carousel.Caption>
            <h3>Learn French</h3>
            <p>
              Apprenez l'anglais dans notre cours complet de 3 ans, parlez
              couramment et commencez votre voyage maintenant !
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <h1>Video de YouTube</h1>
        <VideoComponent />
      </div>
    </section>
  );
};
