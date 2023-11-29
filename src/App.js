import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomPage from "./Pages/RoomPage";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ResultPage from "./Pages/ResultPage";
import Manual from "./Pages/Manual";
import { isModalOpen } from "./util/atom";
import { useRecoilValue } from "recoil";
import LoginModal from "./Components/LoginModal";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  const showModal = useRecoilValue(isModalOpen);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
      {showModal ? <LoginModal /> : null}
    </BrowserRouter>
  );
}

export default App;
