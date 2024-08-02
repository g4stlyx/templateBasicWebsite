import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import WhatDoWeDo from "../utils/WhatDoWeDo";

const OurProductions: React.FC = () => {
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
            <h1>ÜRETİMLERİMİZ</h1>
          </div>
        </div>
      </div>
      <br />

      <Container>
        <Row className="mb-4">
          <Col>
            <Card className="border-0 about-us-card">
              <Card.Body>
                <Row>
                  <Col md={6} style={{ textAlign: "left" }}>
                    <p className="about-us-p">
                      Erdaş Sedye, sağlık sektörüne yönelik kapsamlı ürün
                      yelpazesiyle dikkat çekmektedir. Hasta yatakları, engelli
                      araçları, hastane araçları, ambulans ve sedye
                      aksesuarları, sedyeler, tıbbi cihazlar ve malzemeler,
                      fizik tedavi ürünleri, hastane tipi bebek yatakları,
                      hastane mobilyaları ve hastane malzemeleri, şirketimizin
                      sunduğu çeşitli ürünler arasında yer almakta. Bu ürünler,
                      kullanıcıların konforunu ve işlevselliği ön planda
                      tutarak, yüksek kalite standartlarında tasarlanmış ve
                      üretilmiştir. Özellikle sedyelerimiz, acil durumlarda ve
                      hasta taşımada dayanıklılık ve kullanım kolaylığı
                      açısından sektör standartlarını belirlemekte. Hastane
                      mobilya ve malzemelerimiz ise, hem estetik hem de
                      fonksiyonellik açısından hastane ortamlarına mükemmel uyum
                      sağlamakta.
                    </p>
                  </Col>
                  <Col md={6}>
                    <img
                      className="about-us-image"
                      src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/78d15ab5-eefe-42bd-926f-2bc1b985bd00/78d15ab5-eefe-42bd-926f-2bc1b985bd00.jpeg"
                      alt="Stretcher"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="border-0 about-us-card">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <img
                      className="about-us-image"
                      src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/78d15ab5-eefe-42bd-926f-2bc1b985bd00/78d15ab5-eefe-42bd-926f-2bc1b985bd00.jpeg"
                      alt="Meeting"
                    />
                  </Col>
                  <Col md={6} style={{ textAlign: "left" }}>
                    <p className="about-us-p">
                      Üretim sürecimizde, en son teknolojileri ve yenilikçi
                      tasarım yaklaşımlarını kullanarak, sağlık sektörünün
                      dinamik ihtiyaçlarına cevap vermekteyiz. Hasta
                      yataklarımız, hem konfor hem de güvenlik açısından en
                      yüksek standartlarda tasarlanırken, engelli araçlarımız
                      kullanıcıların günlük yaşamını kolaylaştıracak ergonomik
                      özelliklere sahip. Hastane araçları ve aksesuarlarımız,
                      sağlık kurumlarının verimli çalışmasını destekleyecek
                      şekilde geliştirilmiş, tıbbi cihazlarımız ve
                      malzemelerimiz ise sağlık sektörünün en yüksek
                      standartlarına uygun olarak üretilmektedir. Fizik tedavi
                      ürünlerimiz, hastaların rehabilitasyon sürecinde etkin bir
                      destek sunmak üzere tasarlanmıştır. Erdaş Sedye olarak,
                      sağlık sektörüne kalite ve yenilikçilikle hizmet verme
                      konusundaki taahhüdümüzü sürdürmekteyiz.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />

      <WhatDoWeDo />
      <br />

    </div>
  );
};

export default OurProductions;
