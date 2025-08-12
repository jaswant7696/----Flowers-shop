import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import Home from "./pages/Home";
import { Footer } from "./components/common/Footer";
import Category from "./pages/Catogary";
import { Product } from "./pages/Product";
import { Subscription } from "./pages/Subscription";
import { OurStory } from "./pages/OurStory";
import { Contatinfo } from "./pages/Contatinfo";
import { Singsing } from "./pages/Singsing";
import ScrollToTop from "./Scrolltotop";

export default function App() {
 

  return (
    <BrowserRouter>
 <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/Ourstory" element={<OurStory />} />
          <Route path="/Contatinfo" element={<Contatinfo />} />
          <Route path="/sing" element={<Singsing />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}
