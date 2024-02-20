import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NotesListpages from "./pages/NotesListpages";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<NotesListpages />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
