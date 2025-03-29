import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import WatchList from "./pages/watchList";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
