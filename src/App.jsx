import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import TopBar from "./components/TopBar";
import ProfileSection from "./components/ProfileSection";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainsection" element={<MainSection />} />
          <Route path="/:userId" element={<ProfileSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
