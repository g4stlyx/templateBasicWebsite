// import { Container, Row, Col, Button } from "react-bootstrap";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import "../styles/Footer.css";
// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col md="4">
//             <div className="footer-logo">
//               <img src="https://www.erdassedye.com/wp-content/uploads/2024/01/erdassedye-logo-v3.svg" alt="footer Logo" />
//               <p>
//                 Sedye ve medikal ürünler ihtiyaçlarınız için hemen bizimle
//                 iletişime geçin!
//               </p>
//               <h4 style={{color:"#3575FF",}}>0546 913 3425</h4>
//               <Button variant="primary">İletişim Formu</Button>
//             </div>
//           </Col>
//           <Col md="4">
//             <h5>Menü</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="#home">ANASAYFA</a>
//               </li>
//               <li>
//                 <a href="#about">HAKKIMIZDA</a>
//               </li>
//               <li>
//                 <a href="#production">ÜRETİMLERİMİZ</a>
//               </li>
//               <li>
//                 <a href="#products">ÜRÜNLER</a>
//               </li>
//               <li>
//                 <a href="#contact">İLETİŞİM</a>
//               </li>
//             </ul>
//           </Col>
//           <Col md="4">
//             <h5>İletişim Bilgisi</h5>
//             <p>
//               <FaMapMarkerAlt color="#3575FF" /> İkitelli O.S.B. Atatürk Oto Sanayi Sitesi 1.
//               Sokak No: 5 Başakşehir-İSTANBUL
//             </p>
//             <p>
//               <FaPhoneAlt color="#3575FF"/> 0212 485 8584
//             </p>
//             <p>
//               <FaEnvelope color="#3575FF"/> info@erdassedye.com
//             </p>
//           </Col>
//         </Row>
//         <Row className="mt-4">
//           <Col className="text-center">
//             <hr className="bg-white" />
//             <p className="mb-0">© 2024 gSoftw4re. All rights reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.css";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4" className="footer-col">
            <div className="footer-logo mobile-hidden">
              <a href="/">
                <img
                  src="https://www.erdassedye.com/wp-content/uploads/2024/01/erdassedye-logo-v3.svg"
                  alt="footer Logo"
                />
              </a>
              <p className="mobile-hidden">
                Sedye ve medikal ürünler ihtiyaçlarınız için hemen bizimle
                iletişime geçin!
              </p>
              <h4 style={{ color: "#3575FF" }}>0546 913 3425</h4>
              <Button variant="primary">İletişim Formu</Button>
            </div>
          </Col>
          <Col md="4" className="footer-col">
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
          <Col md="4" className="footer-col">
            <h5>İletişim Bilgisi</h5>
            <p>
              <FaMapMarkerAlt color="#3575FF" /> İkitelli O.S.B. Atatürk Oto
              Sanayi Sitesi 1. Sokak No: 5 Başakşehir-İSTANBUL
            </p>
            <p>
              <FaPhoneAlt color="#3575FF" /> 0212 485 8584
            </p>
            <p>
              <FaEnvelope color="#3575FF" /> info@erdassedye.com
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
};

export default Footer;
