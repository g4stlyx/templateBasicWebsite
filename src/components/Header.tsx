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
      <div className="header-top-wrapper">
        <div className="header-top container">
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
      </div>
      <div className="header-main container">
        <div className="header-logo">
          <img
            src="https://www.erdassedye.com/wp-content/uploads/2024/01/erdassedye-logo-v3.svg"
            alt="footer Logo"
          />
        </div>
        <nav className="header-nav">
          <a href="/">ANASAYFA</a>
          <a href="/hakkimizda">HAKKIMIZDA</a>
          <a href="/uretimlerimiz">ÜRETİMLERİMİZ</a>
          <a href="/urunlerimiz">ÜRÜNLERİMİZ</a>
          <a href="/iletisim">İLETİŞİM</a>
        </nav>
        <div className="header-phone">
          <div>
            <FaPhoneAlt className="icon" />
          </div>
          <div style={{display:"flex", flexDirection:"column", marginLeft:"10px"}}>
          <span style={{ color: "#3575FF", font:"20px bold" }}>0546 913 3425</span>
          <span style={{color:"#909BA0", marginLeft:"0"}}>Hemen Arayın</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
