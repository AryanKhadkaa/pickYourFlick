import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { WatchListProvider } from "./contexts/watchlistContext";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";

function App() {
  const Home = lazy(() => import("./pages/home/home"));
  const WatchList = lazy(() => import("./pages/watchList"));
  const GeneratedShow = lazy(() => import("./pages/generatedShow"));
  const SearchPage = lazy(() => import("./pages/searchPage"));
  return (
    <div className="App bg-primary min-h-screen">
      <WatchListProvider>
        <Router>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/generatedShow" element={<GeneratedShow />} />
              <Route path="/search/:show" element={<SearchPage />} />
            </Routes>
          </Suspense>
        </Router>
      </WatchListProvider>
    </div>
  );
}

export default App;
