import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
