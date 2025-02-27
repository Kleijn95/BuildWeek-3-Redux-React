import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import TopBar from "./components/TopBar";
import ProfileSection from "./components/ProfileSection";
import ExperienceSection from "./components/ExperienceSection";
import Home from "./components/Home";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainsection" element={<MainSection />} />
          <Route path="/:userId" element={<ProfileSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="jobs" element={<Jobs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
