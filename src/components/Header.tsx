// import { Link } from "react-router-dom";
// import "../styles/Header.css"
// import React from "react";

// export default function Header() {

//   return (
//     <div className="Header border-bottom border-light border-5 mb-5 p-2 bg-dark text-white">
//       <div className="container">
//         <div className="row">
//           <nav className="navbar navbar-expand-lg navbar-dark">
//             <a
//               className="navbar-brand ms-2 fs-2 fw-bold text-white"
//               href="https://g4stlyx.github.io"
//             >
//               g4stly
//             </a>
//             <div className="collapse navbar-collapse">
//               <ul className="navbar-nav">
//                 <li className="nav-item fs-5">
//                   <Link className="nav-link text-white" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item fs-5">
//                   <Link className="nav-link text-white" to="/">
//                     empty left
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <ul className="navbar-nav">
//               <li className="nav-item fs-5">
//                <Link className="nav-link text-white" to="/">
//                   empty right
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "../styles/Header.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-icons">
          <FaInstagram className="icon" />
          <FaFacebookF className="icon" />
          <FaYoutube className="icon" />
          <FaTwitter className="icon" />
        </div>
        <div className="header-contact">
          <FaEnvelope className="icon" />
          <span>info@erdassedye.com</span>
        </div>
      </div>
      <div className="header-main container">
        <div className="header-logo">
          <a
            className="navbar-brand ms-2 fs-2 fw-bold"
            href="https://g4stlyx.github.io"
          >
            g4stly
          </a>
        </div>
        <nav className="header-nav">
          <a href="#home">ANASAYFA</a>
          <a href="#about">HAKKIMIZDA</a>
          <a href="#production">ÜRETİMLERİMİZ</a>
          <a href="#products">ÜRÜNLER</a>
          <a href="#contact">İLETİŞİM</a>
        </nav>
        <div className="header-phone">
          <FaPhoneAlt className="icon" />
          <span>0546 913 3425</span>
          <span>Hemen Arayın</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
