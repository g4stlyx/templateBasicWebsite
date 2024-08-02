import React from "react";
import "../../styles/WhatDoWeDo.css";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

const MedicalProductSupply: React.FC = () => {
  return (
    <Container className="custom-stretcher mt-4">
      <Row>
        <Col md={6}>
          <h3 className="mb-3">Medikal Ürün Tedariği</h3>
          <p>
            Erdaş Sedye, sağlık sektöründe uzun yıllardır deneyim kazanmış bir
            medikal ürün tedarikçisi olarak öne çıkmaktadır. Firmanın önceliği,
            hastaneler, klinikler ve diğer sağlık kuruluşları için ihtiyaç
            duyulan yüksek kaliteli sedye çözümlerini sağlamak ve sağlık
            profesyonellerine güvenilir bir tedarik zinciri sunmaktır.
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
        <Col md={6} className="text-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKA13dyVo_8Ql5S2QT_9j_JvZTO5Wq6lSfrg&s"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MedicalProductSupply;
