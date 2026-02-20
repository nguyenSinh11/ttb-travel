import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Covid from "./pages/Covid";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Vietnam from "./pages/destinations/Vietnam";
import SoutheastAsia from "./pages/destinations/SoutheastAsia";
import Cruise from "./pages/experiences/Cruise";
import Culture from "./pages/experiences/Culture";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/destinations/vietnam" element={<Vietnam />} />
          <Route path="/destinations/southeast-asia" element={<SoutheastAsia />} />
          <Route path="/experiences/cruise" element={<Cruise />} />
          <Route path="/experiences/culture" element={<Culture />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat phoneE164="84906288031" />
    </div>
  );
}
