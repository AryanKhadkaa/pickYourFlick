import { useWatchListContext } from "../contexts/watchlistContext";
import { useNavigate } from "react-router-dom";

const Generate = () => {
  const navigate = useNavigate();
  const { watchListShows } = useWatchListContext();

  const generateShow = () => {
    if (watchListShows) {
      const randomIdx = Math.floor(Math.random() * watchListShows?.length);
      const generatedShow = watchListShows[randomIdx || 0];
      navigate("/generatedShow", { state: generatedShow });
    } else {
      alert("Create a watchlist first");
    }
  };
  return (
    <button
      onClick={generateShow}
      className="bg-third text-xl px-5 py-2 text-secondary font-poppins uppercase font-semibold hover:shadow-lg hover:shadow-third/80 rounded-full transition-all ease-linear duration-150"
    >
      Generate
    </button>
  );
};

export default Generate;
