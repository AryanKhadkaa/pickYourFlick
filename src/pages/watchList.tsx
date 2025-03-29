import { useWatchListContext } from "../contexts/watchlistContext";
import ShowCard from "../components/showCard";

const WatchList = () => {
  const { watchListShows } = useWatchListContext();

  return (
    <section className="bg-primary">
      <div className="bg-yellow-500">
        <div>
          <h1>You Watchlist</h1>
          <p>You want to see {watchListShows?.length} films</p>
        </div>
        <div>
          {watchListShows?.map((show, idx) => {
            return (
              <div key={idx}>
                <ShowCard show={show} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WatchList;
