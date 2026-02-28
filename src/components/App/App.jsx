// React Imports
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Component Imports
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSigninClick = () => {
    setActiveModal("login");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const handleModalSwitch = (modalName) => {
    setActiveModal(modalName);
  };

  const handleLogin = () => {
    console.log("login");
  };

  const handleRegister = () => {
    console.log("register");
  };

  return (
    <div className="page">
      <Header handleSigninClick={handleSigninClick} />
      <div className="page__content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </div>
      <LoginModal
        activeModal={activeModal}
        handleCloseClick={closeModal}
        handleModalSwitch={handleModalSwitch}
        handleLogin={handleLogin}
      />
      <RegisterModal
        activeModal={activeModal}
        handleCloseClick={closeModal}
        handleModalSwitch={handleModalSwitch}
        handleRegister={handleRegister}
      />
    </div>
  );
}

export default App;
