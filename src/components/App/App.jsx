// React Imports
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Component Imports
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleSigninClick = () => {
    setActiveModal("login");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleSigninClick={handleSigninClick} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </div>
      <LoginModal
        name="login"
        activeModal={activeModal}
        handleCloseClick={closeModal}
        // handleLogin={handleLogin}
      />
    </div>
  );
}

export default App;
