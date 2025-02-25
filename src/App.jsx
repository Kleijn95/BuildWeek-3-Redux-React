import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainSection from "./components/MainSection";
import TopBar from "./components/TopBar";
import ProfileSection from "./components/ProfileSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/:userId" element={<ProfileSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
