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
import * as auth from "../../utils/auth";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [savedArticles, setSavedArticles] = useState(() => {
    const stored = localStorage.getItem("savedArticles");
    return stored ? JSON.parse(stored) : [];
  });
  const [currentUser, setCurrentUser] = useState({ name: "" });
  const [lastQuery, setLastQuery] = useState("");

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

  const handleLogin = (values, handleReset) => {
    auth
      .authorize({ email: values.email, password: values.password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        setCurrentUser({ name: "Elise" });
        closeModal();
        handleReset();
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({ name: "" });
    navigate("/");
  };

  const handleRegister = (values, handleReset) => {
    auth
      .authorize(values.email, values.password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setCurrentUser({ name: values.username });
        handleModalSwitch("confirmation");
        handleReset();
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

  const handleSearch = (query) => {
    setLastQuery(query);
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
    api
      .saveArticle({ ...article, keyword: lastQuery })
      .then((savedArticle) => {
        const updated = [...savedArticles, savedArticle];
        setSavedArticles(updated);
        localStorage.setItem("savedArticles", JSON.stringify(updated));
      })
      .catch((err) => {
        console.error("Save failed:", err);
      });
  };

  const handleDeleteArticle = (article) => {
    api
      .deleteArticle(article._id)
      .then(() => {
        const updated = savedArticles.filter(
          (saved) => saved.url !== article.url,
        );
        setSavedArticles(updated);
        localStorage.setItem("savedArticles", JSON.stringify(updated));
      })
      .catch((err) => {
        console.error("Delete failed:", err);
      });
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
                    searchError={searchError}
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
