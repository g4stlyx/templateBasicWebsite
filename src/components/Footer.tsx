// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import "../styles/Footer.css"

// export default function Footer() {
//     return (
//         <footer className="footer">
//             <Container>
//                 <Row>
//                     <Col md="4">
//                         <h5>About Us</h5>
//                         <p>
//                             We are a team of passionate developers building web applications
//                             to solve real-world problems. Follow us on social media to stay updated.
//                         </p>
//                     </Col>
//                     <Col md="4">
//                         <h5>Links</h5>
//                         <ul className="list-unstyled">
//                             <li><a href="/home" className="text-white">Home</a></li>
//                             <li><a href="/about" className="text-white">About</a></li>
//                             <li><a href="/contact" className="text-white">Contact</a></li>
//                             <li><a href="/faq" className="text-white">FAQ</a></li>
//                         </ul>
//                     </Col>
//                     <Col md="4" className="text-center">
//                         <h5>Follow Us</h5>
//                         <div className="d-flex justify-content-center">
//                             <a href="https://facebook.com" className="text-white me-3">
//                                 <FaFacebook size={24} />
//                             </a>
//                             <a href="https://twitter.com" className="text-white me-3">
//                                 <FaTwitter size={24} />
//                             </a>
//                             <a href="https://instagram.com" className="text-white me-3">
//                                 <FaInstagram size={24} />
//                             </a>
//                             <a href="https://linkedin.com" className="text-white">
//                                 <FaLinkedin size={24} />
//                             </a>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row className="mt-4">
//                     <Col className="text-center">
//                         <hr className="bg-white" />
//                         <p className="mb-0">© 2024 gSoftw4re. All rights reserved.</p>
//                     </Col>
//                 </Row>
//             </Container>
//         </footer>
//     );
// }

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4">
            <div className="footer-logo">
              <img src="https://pokemonsw.com/cdn/shop/files/image_0ed8e5ba-c94a-4d28-866e-29a3f2b9439a.jpg?v=1687210654" alt="footer Logo" />
              <p>Sağlıkta Konfor ve Güven</p>
              <p>
                Sedye ve medikal ürünler ihtiyaçlarınız için hemen bizimle
                iletişime geçin!
              </p>
              <h4>0546 913 3425</h4>
            </div>
          </Col>
          <Col md="2">
            <h5>Menü</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">ANASAYFA</a>
              </li>
              <li>
                <a href="#about">HAKKIMIZDA</a>
              </li>
              <li>
                <a href="#production">ÜRETİMLERİMİZ</a>
              </li>
              <li>
                <a href="#products">ÜRÜNLER</a>
              </li>
              <li>
                <a href="#contact">İLETİŞİM</a>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h5>Ürün Çeşitlerimiz</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">ANASAYFA</a>
              </li>
              <li>
                <a href="#about">HAKKIMIZDA</a>
              </li>
              <li>
                <a href="#production">ÜRETİMLERİMİZ</a>
              </li>
              <li>
                <a href="#products">ÜRÜNLER</a>
              </li>
              <li>
                <a href="#contact">İLETİŞİM</a>
              </li>
            </ul>
          </Col>
          <Col md="4">
            <h5>İletişim Bilgisi</h5>
            <p>
              <FaMapMarkerAlt /> İkitelli O.S.B. Atatürk Oto Sanayi Sitesi 1.
              Sokak No: 5 Başakşehir-İSTANBUL
            </p>
            <p>
              <FaPhoneAlt /> 0212 485 8584
            </p>
            <p>
              <FaEnvelope /> info@erdassedye.com
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <hr className="bg-white" />
            <p className="mb-0">© 2024 gSoftw4re. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
