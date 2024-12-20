import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DeckView } from "./pages/DeckView";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/deck/:topic" element={<DeckView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
