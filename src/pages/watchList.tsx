import { useWatchListContext } from "../contexts/watchlistContext";
import ShowCard from "../components/showCard";
import Generate from "../components/generate";

const WatchList = () => {
  const { watchListShows } = useWatchListContext();

  return (
    <section className="bg-primary font-Poppins text-secondary">
      <div className=" max-w-7xl mx-auto px-5 py-20">
       <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:items-center md:justify-between border-b border-secondary/40 py-6">
          <div className="space-y-2">
            <h1 className="text-xl font-bold">
              Watchlist |
              <span className="text-base font-normal">
                {" "}
                Films and Series you wish to watch
              </span>
            </h1>
            <p className="text-secondary/70  text-sm">
              You want to see {watchListShows?.length || 0} films
            </p>
          </div>
          <div>
            {/* <button className="bg-yellow-600 text-sm px-4 py-1">
              <Link to={"/"}>Browse More</Link>
            </button> */}
            <Generate />
          </div>
        </div>
        <div className=" py-6 my-4">
          {!watchListShows ? (
            <p className="text-center">
              You have no movies currently in your watchlist.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center place-content-center gap-2 md:gap-4">
              {watchListShows?.map((show, idx) => {
                return <ShowCard key={idx} show={show} />;
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WatchList;
