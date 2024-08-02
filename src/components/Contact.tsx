import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  return (
    <div>
      <div
        className="page-header page-image"
        style={{
          backgroundImage:
            "url(https://www.erdassedye.com/wp-content/webp-express/webp-images/uploads/2024/01/header-bg-top.jpg.webp)",
        }}
      >
        <div className="page-filter">
          <div className="container page-header-text">
            <h1>İLETİŞİM</h1>
          </div>
        </div>
      </div>
      <br />

      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <iframe
              title="Eiffel Tower Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.480462206914!2d2.2945!3d48.8584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x52963a5addd52a99!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1628005551761!5m2!1sen!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="d-flex align-items-center">
                  <h2 style={{ color: "#4285f4" }}> İLETİŞİM BİLGİLERİ </h2>
                </Card.Title>
                <Card.Text>
                  <FaMapMarkerAlt className="mr-2" color="#4285f4" />
                  &nbsp;İkitelli O.S.B. Atatürk Oto Sanayi Sitesi 1. Sokak No: 5
                  Başakşehir-İSTANBUL
                </Card.Text>
                <Card.Text>
                  <FaPhone className="mr-2" color="#4285f4" />
                  &nbsp;0546 913 3425
                </Card.Text>
                <Card.Text>
                  <FaPhone className="mr-2" color="#4285f4" />
                  &nbsp;0212 485 8584
                </Card.Text>
                <Card.Text>
                  <FaEnvelope className="mr-2" color="#4285f4" />
                  &nbsp;info@erdassedye.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />

      <Container className="send-message-form mt-5">
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="İsim Soyisim"
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  className="custom-input"
                />
              </Form.Group>
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Telefon"
                  className="custom-input"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control as="textarea" rows={8} placeholder="Mesajınız" />
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Mesaj Gönder
            </Button>
          </div>
        </Form>
      </Container>
      <br />
    </div>
  );
};

export default Contact;
