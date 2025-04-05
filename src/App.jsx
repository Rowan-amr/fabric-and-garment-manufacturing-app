import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./header/header";
import Section from "./section/section";
import JBCard from "./cards/card";
import Footer from "./footer/footer";
import PVH from "./PVH/PVH";
import Services from "./services/services";
import ContactPage from "./section/ContactPage";
import "./App.css";
import Card from "./JB-cards/JB-card";
import FabricsPage from "./Fabric-types/fabric";

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <Router>
      <MainContent showContact={showContact} setShowContact={setShowContact} />
    </Router>
  );
}

function MainContent({ showContact, setShowContact }) {
  const navigate = useNavigate();
  const location = useLocation(); // Detects current route

  // Reset contact page when navigating to home
  useEffect(() => {
    if (location.pathname === "/") {
      setShowContact(false); // Unload ContactPage
    }
  }, [location.pathname]); // Runs every time route changes

  return (
    <div className="App">
      <Header toggleContact={() => setShowContact(!showContact)} />

      <main>
        {showContact && <ContactPage />}{" "}
        {/* Shows ContactPage only if toggled */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section />
                <Card />
                <JBCard />
                <PVH />
              </>
            }
          />
          <Route path="/fabric-types" element={<FabricsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer toggleContact={() => setShowContact(!showContact)} />
    </div>
  );
}

export default App;
