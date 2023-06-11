import logo from "./logo.svg";
import "./App.css";

import {
  Route,
  RouterProvider,
  Routes,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./layouts/Home";
import Privacypolicy from "./layouts/Privacypolicy";
import TermsCondition from "./layouts/TermsCondition";
import Aboutus from "./layouts/Aboutus";
import Contact from "./layouts/Contact";
import Advertisement from "./layouts/Advertisement";
import Affiliatelink from "./layouts/Affiliatelink";
import Faq from "./layouts/Faq";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy/policy" element={<Privacypolicy />} />
        <Route path="/terms/condition" element={<TermsCondition />} />
        <Route path="/about/us" element={<Aboutus />} />
        <Route path="/contact/us" element={<Contact />} />
        <Route path="/advertisement" element={<Advertisement />} />
        <Route path="/affiliate/link" element={<Affiliatelink />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
