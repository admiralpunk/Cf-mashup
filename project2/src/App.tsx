import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/home/Hero";
import { GetStartedPage } from "./pages/GetStartedPage";
import { StressTestPage } from "./pages/StressTestPage";
import { MashupPage } from "./pages/MashupPage";
import { ContestPage } from "./pages/ContestPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/create-contest" element={<ContestPage />} />
            <Route path="/generate-mashup" element={<MashupPage />} />
            <Route
              path="/stress-test"
              element={<StressTestPage/>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
