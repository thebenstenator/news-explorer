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

// Utility imports
import * as api from "../../utils/api";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState({ name: "Ben" });

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

  const handleSearch = (query) => {
    setIsLoading(true);
    setIsSearched(true);
    setSearchError(null);
    api
      .searchNews(query)
      .then((data) => {
        setArticles(data);
      })
      .catch((err) => {
        setSearchError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSaveArticle = (article) => {
    setSavedArticles((prev) => [...prev, article]);
  };

  const handleDeleteArticle = (article) => {
    setSavedArticles((prev) =>
      prev.filter((saved) => saved.url !== article.url),
    );
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <SavedArticlesContext.Provider
        value={{ savedArticles, handleDeleteArticle, handleSaveArticle }}
      >
        <div className="page">
          <Header
            handleMobileTap={handleMobileTap}
            handleSigninClick={handleSigninClick}
            activeModal={activeModal}
            handleLogout={handleLogout}
          />
          <div className="page__content">
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    articles={articles}
                    handleSearch={handleSearch}
                    isSearched={isSearched}
                    isLoading={isLoading}
                  />
                }
              />
              <Route
                path="/saved-news"
                element={
                  <SavedNews
                    savedArticles={savedArticles}
                    handleDeleteArticle={handleDeleteArticle}
                  />
                }
              />
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
      </SavedArticlesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
