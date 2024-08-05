import "./styles/App.css";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import OurProductions from "./components/OurProductions";
import OurProducts from "./components/OurProducts";
import Products from "./utils/Products";
import Product from "./utils/Product";

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
          <Route path="/categories/:categoryId" element={<Products/>} />
          <Route path="/categories/:categoryId/products/:productId" element={<Product/>} />
          <Route
            path="/not-authorized"
            element={
              <ErrorPage
                message="You are NOT AUTHORIZED to see this page."
                status={403}
              />
            }
          />
          <Route
            path="/bad-request"
            element={
              <ErrorPage
                message="BAD REQUEST, you couldn't give what system wants :("
                status={400}
              />
            }
          />
          <Route
            path="/server-error"
            element={<ErrorPage message="It's not you it's us :(" status={500} />}
          />
          <Route
            path="*"
            element={
              <ErrorPage
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
