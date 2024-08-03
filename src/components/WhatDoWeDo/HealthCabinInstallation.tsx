import React from "react";
import "../../styles/WhatDoWeDo.css";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

const HealthCabinInstallation: React.FC = () => {
  return (
    <Container className="custom-stretcher mt-4">
      <Row>
        <Col md={6}>
          <h3 className="mb-3">Hastane ve Sağlık Kabini Kurulumu</h3>
          <p>
            Hastane ve sağlık kabinleri, etkili ve düzenli bir sağlık hizmeti
            sunma sürecinde kritik bir rol oynar. Bu kabinlerin doğru bir
            şekilde kurulumu, sağlık profesyonellerine ve hastalara verilen
            hizmetin kalitesini büyük ölçüde etkiler.
          </p>
          <ul className="custom-list">
            <li>İhtiyaca göre özelleştirilmiş tasarım.</li>
            <li>Ergonomik yapı ve güvenli malzeme kullanımı.</li>
            <li>Kolay kullanım ve taşınabilirlik.</li>
            <li>Uzun ömürlü ve sağlam yapı.</li>
            <li>Modern ve estetik tasarım.</li>
          </ul>
          <Button variant="primary" className="mt-3">
            DETAYLI BİLGİ İÇİN TIKLAYINIZ
          </Button>
        </Col>
        <Col md={6} className="text-center" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKA13dyVo_8Ql5S2QT_9j_JvZTO5Wq6lSfrg&s"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HealthCabinInstallation;
