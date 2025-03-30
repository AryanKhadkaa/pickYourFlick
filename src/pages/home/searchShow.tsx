import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../components/apiClient";
import { useNavigate } from "react-router-dom";
import * as streamingAvailability from "streaming-availability";
import AddToWatchList from "../../components/addToWatchList";
import { AiOutlineSearch } from "react-icons/ai";

const SearchShow = () => {
  const navigate = useNavigate();

  const [showData, setShowData] = useState<streamingAvailability.Show[] | null>(
    null
  );
  const [hideBlock, setHideBlock] = useState<boolean>(false);
  const [searchedShow, setSearchedShow] = useState<string>("");

  const fetchFilmData = async () => {
    try {
      const data = await client.showsApi.searchShowsByTitle({
        title: searchedShow,
        country: "us",
      });
      setShowData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const searchShow = () => {
    navigate(`/search/${searchedShow}`);
    setShowData([]);
  };
  useEffect(() => {
    fetchFilmData();
  }, [searchedShow]);

  return (
    <div className="relative flex flex-col justify-center w-full md:w-1/2 mx-auto font-Poppins px-5">
      <form
        onSubmit={searchShow}
        className="bg-white flex rounded-full gap-2 px-5 border border-slate-800 text-primary"
      >
        <input
          type="text"
          className="bg-inherit rounded-full outline-none p-5 w-full "
          placeholder="Search for a film..."
          onChange={(e) => setSearchedShow(e.target.value)}
          onBlur={() => setHideBlock(true)}
          onFocus={() => setHideBlock(false)}
        />
        <button type="submit">
          <AiOutlineSearch size={35} />
        </button>
      </form>
      {showData && showData?.length !== 0 && (
        <div
          className={`z-20 absolute w-full top-16 bg-white rounded-lg my-1 shadow-2xl flex-col text-primary
        ${hideBlock ? "hidden" : "flex"}`}
          onMouseDown={(e) => e.preventDefault()}
        >
          {showData?.slice(0, 5).map((show, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-center border-b border-black/30 "
              >
                <Link to={`/search/${show.title}`} className="flex-1">
                  <div className="  flex cursor-pointer gap-4 p-3  hover:bg-primary/20">
                    <div className="w-[50px] overflow-hidden">
                      <img
                        src={show.imageSet.verticalPoster.w480}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3>{show.title}</h3>
                      <div className="text-primary/70 flex gap-4 items-center text-sm">
                        <p>{show.showType}</p>
                        {show.showType === "movie" ? (
                          <>
                            <p>{show.releaseYear}</p>
                            <p>{show.runtime}m</p>
                          </>
                        ) : (
                          <>
                            <p>S{show.seasonCount}</p>
                            <p>EP{show.episodeCount}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>

                <AddToWatchList showId={show.imdbId} />
              </div>
            );
          })}
          <div>
            <button
              onClick={searchShow}
              className="group w-full text-center bg-third rounded-b-lg py-2 text-sm text-secondary"
              type="submit"
            >
              See all results {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchShow;
