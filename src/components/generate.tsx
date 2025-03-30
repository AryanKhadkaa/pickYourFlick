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
      console.error("no movie in watchlist");
    }
  };
  return (
    <div className="py-10 flex flex-col gap-3 justify-center items-center">
      <p className="text-secondary/70 text-sm">
        Already have your watchlist set?
      </p>
      <button
        onClick={generateShow}
        className="bg-third text-xl px-5 py-2 text-secondary font-poppins font-bold  uppercase hover:shadow-lg hover:shadow-third/80 rounded-full transition-all ease-linear duration-150"
      >
        Generate
      </button>
    </div>
  );
};

export default Generate;
