import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import * as streamingAvailability from "streaming-availability";

const SearchFilm = () => {
  const [filmData, setFilmData] = useState<streamingAvailability.Show[] | null>(
    null
  );
  const [searchedFilm, setSearchedFilm] = useState<string>("");
  const RAPID_API_KEY = "1d1abe1850mshd6381c56b72d90fp1232a6jsn2c56dab78069";

  const client = new streamingAvailability.Client(
    new streamingAvailability.Configuration({
      apiKey: RAPID_API_KEY,
    })
  );

  const fetchFilmData = async (e: any) => {
    e.preventDefault();

    console.log(searchedFilm);
    const data = await client.showsApi.searchShowsByTitle({
      title: searchedFilm,
      country: "gb",
    });
    console.log(data);
    setFilmData(data);
  };

  return (
    <div>
      <div className="flex flex-col justify-center md:w-1/2 mx-auto font-Poppins">
        <form className="bg-white flex rounded-full gap-2 px-5 border border-slate-800 text-primary">
          <input
            type="text"
            className="bg-inherit rounded-full outline-none py-5 w-full "
            placeholder="Search for a film..."
            onChange={(e) => setSearchedFilm(e.target.value)}
          />
          <button type="submit" onClick={(e) => fetchFilmData(e)}>
            <AiOutlineSearch size={35} />
          </button>
        </form>
        {filmData && (
          <div className="bg-white rounded-xl shadow-2xl flex flex-col text-primary space-y-2">
            {filmData?.slice(0, 5).map((film, idx) => {
              return (
                <div
                  key={idx}
                  className="flex cursor-pointer gap-4 p-4 border-b border-black/30 hover:bg-primary/20"
                >
                  <div className="w-[50px] overflow-hidden bg-red-500">
                    <img
                      src={film.imageSet.verticalPoster.w480}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3>{film.title}</h3>
                    <div className="text-gray-700 flex gap-4 items-center">
                      <p>{film.showType}</p>
                      {film.showType === "movie" ? (
                        <>
                          <p>{film.releaseYear}</p>
                          <p>{film.runtime}m</p>
                        </>
                      ) : (
                        <>
                          <p>S{film.seasonCount}</p>
                          <p>EP{film.episodeCount}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <button className="">See All Results</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilm;
