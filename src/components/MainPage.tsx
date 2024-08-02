import React from "react";
import MainPageSwiper from "../utils/MainPageSwiper";
import Products from "../utils/Categories";
import WhatDoWeDo from "../utils/WhatDoWeDo";
import { Container, Row, Col } from "react-bootstrap";
import { FaShieldVirus, FaBolt, FaCog } from "react-icons/fa";
import "../styles/App.css"

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <div className="main-page-swiper-wrapper">
        <MainPageSwiper />
      </div>

      <br />
      <Products />
      <br />

      <Container className="specifications">
        <Row>
          <Col md={4}>
            <div className="text-center">
              <FaShieldVirus size={32} color="white" />
              <h3>GÜVENİLİR</h3>
              <p>
                İstanbul’da 1998’dan beri, hastane ve sağlık kuruluşları için
                yüksek standartlarda hasta yatakları, engelli araçları ve
                ambulans ekipmanları sağlıyoruz. Güven ve kalite bizim için
                birinci sırada.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="text-center">
              <FaBolt size={32} color="white" />
              <h3>YENİLİK</h3>
              <p>
                Sağlık sektöründe yeniliği ve konforu bir araya getiriyoruz.
                İstanbul’da, dayanıklı ve ergonomik hasta yatakları,
                erişilebilir engelli araçları ve modern ambulans aksesuarları
                ile fark yaratıyoruz.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="text-center">
              <FaCog size={32} color="white" />
              <h3>KALİTE</h3>
              <p>
                İstanbul’da, sağlık sektörünün ihtiyaçlarına yönelik kaliteli ve
                erişilebilir çözümler sunuyoruz. Hasta yatakları, engelli
                araçları ve ambulans ekipmanları alanında uzmanız,
                hizmetinizdeyiz.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <br />
      <WhatDoWeDo />
      <br />

    </div>
  );
};

export default MainPage;
