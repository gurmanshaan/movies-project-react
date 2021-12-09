import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/search" element={<Search/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
