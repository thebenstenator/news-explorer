// React Imports
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Component Imports
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegistrationConfirmation from "../RegistrationConfirmation/RegistrationConfirmation";
import MobileModal from "../MobileModal/MobileModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSigninClick = () => {
    setActiveModal("login");
  };

  const handleMobileTap = () => {
    setActiveModal("mobile");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const handleModalSwitch = (modalName) => {
    setActiveModal(modalName);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    closeModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleRegister = () => {
    console.log("register");
  };

  return (
    <div className="page">
      <Header
        handleMobileTap={handleMobileTap}
        handleSigninClick={handleSigninClick}
        activeModal={activeModal}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <div className="page__content">
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
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
      <RegistrationConfirmation
        activeModal={activeModal}
        handleCloseClick={closeModal}
        handleModalSwitch={handleModalSwitch}
      />
      <MobileModal
        activeModal={activeModal}
        handleSigninClick={handleSigninClick}
        handleCloseClick={closeModal}
      />
    </div>
  );
}

export default App;
