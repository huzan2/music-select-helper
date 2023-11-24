import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomPage from "./Pages/RoomPage";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ResultPage from "./Pages/ResultPage";
import Manual from "./Pages/Manual";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/manual" element={<Manual />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
