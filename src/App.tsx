import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import WatchList from "./pages/watchList";
import Navbar from "./components/navbar";
import { WatchListProvider } from "./contexts/watchlistContext";
import GeneratedShow from "./pages/generatedShow";
import { Suspense } from "react";
import Loader from "./components/loader";

function App() {
  return (
    <div className="App bg-primary">
      <WatchListProvider>
        <Suspense fallback={<Loader />}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/watchlist" element={<WatchList />}></Route>
              <Route path="/generatedShow" element={<GeneratedShow />}></Route>
            </Routes>
          </Router>
        </Suspense>
      </WatchListProvider>
    </div>
  );
}

export default App;
