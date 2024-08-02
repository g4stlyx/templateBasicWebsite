import "./styles/App.css";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import OurProductions from "./components/OurProductions";
import OurProducts from "./components/OurProducts";

const App: React.FC = () => {
  return (
    <div className="App TodoApp wrapper">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hakkimizda" element={<AboutUs />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/uretimlerimiz" element={<OurProductions />} />
          <Route path="/urunlerimiz" element={<OurProducts />} />
          <Route
            path="/not-authorized"
            element={
              <Error
                message="You are NOT AUTHORIZED to see this page."
                status={403}
              />
            }
          />
          <Route
            path="/bad-request"
            element={
              <Error
                message="BAD REQUEST, you couldn't give what system wants :("
                status={400}
              />
            }
          />
          <Route
            path="/server-error"
            element={<Error message="It's not you it's us :(" status={500} />}
          />
          <Route
            path="*"
            element={
              <Error
                message="The page you want to reach NOT FOUND."
                status={404}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
