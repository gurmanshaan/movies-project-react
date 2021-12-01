import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TabOne from "./components/TabOne";
import TabTwo from "./components/TabTwo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/tabOne" element={<TabOne/>} />
          <Route exact path="/tabTwo" element={<TabTwo/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
