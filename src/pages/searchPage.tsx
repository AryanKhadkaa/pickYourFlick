import { useEffect, useState } from "react";
import { client } from "../components/apiClient";
import { useParams } from "react-router-dom";
import * as streamingAvailability from "streaming-availability";
import ShowCard from "../components/showCard";
import AddToWatchList from "../components/addToWatchList";
import SearchShow from "./home/searchShow";
import Loader from "../components/loader";

const SearchPage = () => {
  const { show } = useParams();

  const [shows, setShows] = useState<streamingAvailability.Show[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  
  const getAllFilm = async () => {
    try {
      const data = await client.showsApi.searchShowsByTitle({
        title: show || " ",
        country: "gb",
      });
      setShows(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllFilm();
  }, [show]);
  return (
    <section className=" bg-primary text-secondary font-Poppins">
      <div className="max-w-7xl mx-auto py-24 px-10 space-y-4">
        <div className="flex flex-col-reverse justify-center gap-10">
          <p className="w-full md:w-max text-secondary/70">
            Search Results for{" "}
            <span className="font-semibold text-secondary">{show}...</span>
          </p>
          <div>
            <SearchShow />
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {shows?.slice(0, 10).map((show, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col gap-2 border-b border-secondary/50 py-4"
                >
                  <ShowCard show={show} />
                  <div className="flex justify-between items-end">
                    <p className="text-sm">{show.title}</p>
                    <AddToWatchList showId={show.imdbId} />
                  </div>
                </div>
              );
            })}
          </div>
        )}{" "}
      </div>
    </section>
  );
};

export default SearchPage;
