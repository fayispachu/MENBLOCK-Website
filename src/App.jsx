import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./component/Navbar";
import Explore from "./component/Explore";
import Product from "./component/Product";
import Exclusive from "./component/Exclusive";
import Desighner from "./component/Desighner";
import Feedback from "./component/Feedback";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Explore />
        <Product />
        <Exclusive />
        <Desighner />
        <Feedback />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
