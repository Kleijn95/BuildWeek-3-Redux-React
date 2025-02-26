import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import TopBar from "./components/TopBar";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/:userId" element={<ProfileSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
