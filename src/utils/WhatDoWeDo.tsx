import React, { useState } from "react";
import CustomStretcher from "../components/WhatDoWeDo/CustomStretcher.tsx";
import HospitalBeds from "../components/WhatDoWeDo/HospitalBeds.tsx";
import AmbulanceStretchers from "../components/WhatDoWeDo/AmbulanceStretchers.tsx";
import MassageTables from "../components/WhatDoWeDo/MassageTables.tsx";
import HealthCabinInstallation from "../components/WhatDoWeDo/HealthCabinInstallation.tsx";
import MedicalProductSupply from "../components/WhatDoWeDo/MedicalProductSupply.tsx";
import "../styles/WhatDoWeDo.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const WhatDoWeDo: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState("CustomStretcher");

  const renderComponent = () => {
    switch (activeComponent) {
      case "CustomStretcher":
        return <CustomStretcher />;
      case "HospitalBeds":
        return <HospitalBeds />;
      case "AmbulanceStretchers":
        return <AmbulanceStretchers />;
      case "MassageTables":
        return <MassageTables />;
      case "HealthCabinInstallation":
        return <HealthCabinInstallation />;
      case "MedicalProductSupply":
        return <MedicalProductSupply />;
      default:
        return <CustomStretcher />;
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">NELER YAPIYORUZ</h2>
      <Row className="mb-4">
        <Col>
          <Card
            onClick={() => setActiveComponent("CustomStretcher")}
            className={`text-center p-3 ${
              activeComponent === "CustomStretcher"
                ? "bg-primary text-white"
                : ""
            }`}
          >
            <Card.Img
              variant="top"
              src="https://pokedexradio.com/wp-content/uploads/2014/01/242-Blissey.png"
              width="60px"
              height="75px"
            />
            <Card.Body>
              <Card.Title>Özel Tasarım Sedye</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card
            onClick={() => setActiveComponent("HospitalBeds")}
            className={`text-center p-3 ${
              activeComponent === "HospitalBeds" ? "bg-primary text-white" : ""
            }`}
          >
            <Card.Img
              variant="top"
              src="https://pokedexradio.com/wp-content/uploads/2014/01/242-Blissey.png"
              width="60px"
              height="75px"
            />
            <Card.Body>
              <Card.Title>Hasta Yatağı İmalatı</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            onClick={() => setActiveComponent("AmbulanceStretchers")}
            className={`text-center p-3 ${
              activeComponent === "AmbulanceStretchers"
                ? "bg-primary text-white"
                : ""
            }`}
           
          >
            <Card.Img
              variant="top"
              src="https://pokedexradio.com/wp-content/uploads/2014/01/242-Blissey.png"
              width="60px"
              height="75px"
            />

            <Card.Body>
              <Card.Title>Ambulans Sedye İmalatı</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            onClick={() => setActiveComponent("MassageTables")}
            className={`text-center p-3 ${
              activeComponent === "MassageTables" ? "bg-primary text-white" : ""
            }`}
          >
            <Card.Img
              variant="top"
              src="https://pokedexradio.com/wp-content/uploads/2014/01/242-Blissey.png"
              width="60px"
              height="75px"
            />
            <Card.Body>
              <Card.Title>Masaj Masası İmalatı</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            onClick={() => setActiveComponent("HealthCabinInstallation")}
            className={`text-center p-3 ${
              activeComponent === "HealthCabinInstallation"
                ? "bg-primary text-white"
                : ""
            }`}
          >
            <Card.Img
              variant="top"
              src="https://pokedexradio.com/wp-content/uploads/2014/01/242-Blissey.png"
              width="60px"
              height="75px"
            />
            <Card.Body>
              <Card.Title>Sağlık Kabini Kurulumu</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            onClick={() => setActiveComponent("MedicalProductSupply")}
            className={`text-center p-3 ${
              activeComponent === "MedicalProductSupply"
                ? "bg-primary text-white"
                : ""
            }`}
          >
            <Card.Img
              variant="top"
              src="https://pokedexradio.com/wp-content/uploads/2014/01/242-Blissey.png"
              width="60px"
              height="75px"
            />
            <Card.Body>
              <Card.Title>Medikal Ürün Tedariği</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="content-container">{renderComponent()}</div>
    </Container>
  );
};

export default WhatDoWeDo;
