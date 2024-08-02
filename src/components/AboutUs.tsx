import React from "react";
import "../styles/common.css";
import "../styles/AboutUs.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import WhatDoWeDo from "../utils/WhatDoWeDo";

const AboutUs: React.FC = () => {
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
            <h1>HAKKIMIZDA</h1>
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
                    <h2>BİZ KİMİZ?</h2>
                    <p className="about-us-p">
                      <strong>Erdaş Sedye:</strong> Sağlık sektörüne yönelik
                      yenilikçi ve kaliteli çözümler sunan, lider bir Türk
                      şirketidir. Alanında öncü olan firmamız, çeşitlilik ve
                      kaliteyi bir arada sunarak, sedye, hastane araçları, araç
                      aksesuarları ve geniş bir medikal ürün yelpazesi üretmekte
                      ve satmaktadır. Müşteri memnuniyetini ve güvenilirliği
                      temel alarak faaliyet gösteren şirketimiz, sağlık
                      çalışanlarının ve hastaların ihtiyaçlarına odaklanarak
                      tasarladığı ürünlerle sektörde teknolojik yeniliklerin
                      öncüsüdür.
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
                    <h2>MİSYONUMUZ</h2>
                    <p className="about-us-p">
                      <strong>Erdaş Sedye</strong> olarak misyonumuz, sağlık
                      sektörüne en yüksek kalitede hizmet sunarak, hem
                      hastaların hem de sağlık çalışanlarının hayatını
                      kolaylaştırmaktır. Bu doğrultuda, tüm ürünlerimizi en
                      yüksek standartlarda tasarlamak ve üretmek bizim için
                      sadece bir iş değil, aynı zamanda bir ayrıcalıktır.
                      Teknolojik gelişmeleri yakından takip eden ve sürekli
                      iyileştirme anlayışıyla hareket eden ekibimiz, sektördeki
                      yenilikçi ve öncü rolümüzü pekiştirmektedir.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />

        <Row className="mb-4">
          <Col>
            <Card className="border-0 about-us-card">
              <Card.Body>
                <Row>
                  <Col md={6} style={{ textAlign: "left" }}>
                    <h2>VİZYONUMUZ</h2>
                    <p className="about-us-p">
                      <strong>Erdaş Sedye</strong> olarak vizyonumuz, ulusal başarılarımızı
                      uluslararası alana taşıyarak, sağlık sektöründe global bir
                      marka olmaktır. Yenilikçi ürünlerimiz ve kaliteli hizmet
                      anlayışımızla, sağlık sektöründe fark yaratmayı
                      hedefliyoruz. Müşterilerimizle sürdürülebilir ilişkiler
                      kurarak, onlara en iyi hizmeti sunmak ve sektörde kalite,
                      yenilikçilik ve güvenilirlik alanlarında liderliğimizi
                      sürdürmek bizim için en önemli önceliktir.
                    </p>
                  </Col>
                  <Col md={6} style={{ textAlign: "left" }}>
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
                    <h2>TARİHİMİZ</h2>
                    <p className="about-us-p">
                      Kurulduğumuz günden bu yana, ulusal pazarda sağlamış
                      olduğumuz başarıları uluslararası alana taşıma hedefiyle,
                      global bir marka olma yolunda ilerliyoruz. Yenilikçi
                      ürünlerimizle ve kaliteli hizmet anlayışımızla sağlık
                      sektöründe fark yaratmayı amaçlıyoruz. Müşterilerimizle
                      sürdürülebilir ilişkiler kurmak ve onlara en iyi hizmeti
                      sunmak bizim için her zaman en önemli öncelik olmuştur.
                      <br />
                      <strong>Erdaş Sedye</strong> olarak, sağlık sektöründe kalite, yenilikçilik
                      ve güvenilirlik alanlarında liderliğimizi sürdürmeye ve
                      sektörün ihtiyaçlarına yönelik çözümler sunmaya devam
                      edeceğiz.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Card className="border-0 about-us-card">
              <Card.Body>
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <p className="about-us-p" style={{ textAlign: "center", fontSize:"17px", color:"gray" }}>
                      Sağlık sektörüne yönelik yenilikçi ve kaliteli çözümler
                      sunan, lider bir Türk şirketidir. Sedye, hastane araçları,
                      araç aksesuarları ve çeşitli medikal ürünler üreten ve
                      satan firmamız, müşteri memnuniyeti ve güvenilirlik
                      ilkeleriyle faaliyet göstermektedir. Sağlık çalışanları ve
                      hastaların ihtiyaçlarına odaklanarak tasarlanan
                      ürünlerimizle, sektörde teknolojik yeniliklerin öncüsü
                      olma hedefindeyiz. Global bir marka olma yolunda ilerleyen
                      şirketimiz, yenilikçi ürünler ve kaliteli hizmet
                      anlayışıyla sağlık sektöründe fark yaratmayı
                      amaçlamaktadır.
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

export default AboutUs;
