import "./styles/App.css";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App TodoApp wrapper">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<h1>sa</h1>} />
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
