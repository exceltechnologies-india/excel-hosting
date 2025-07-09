import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HostingPlans from "./components/HostingPlans";
import Services from "./components/Services";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import ThankYou from "./pages/ThankYou";
import ZohoComparison from "./components/ZohoComparison";

// HomePage component aggregates all main landing sections
function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HostingPlans />
      <ZohoComparison />
      <Services />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}

// App component sets up routing and layout
function App() {
  return (
    <Router>
      <div className="font-inter">
        <Header />
        <main>
          {/* Define routes for main pages and legal pages */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
