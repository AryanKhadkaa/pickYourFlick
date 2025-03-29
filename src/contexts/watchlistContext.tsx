import { createContext, useContext, useEffect, useState } from "react";
import * as streamingAvailability from "streaming-availability";
import { client } from "../components/apiClient";

interface contextType {
  showId: string | null;
  getShowId: (id: string) => void;
  watchListShows: streamingAvailability.Show[] | null;
}

const watchListContext = createContext<contextType | null>(null);

export const WatchListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showId, setShowId] = useState<string | null>(null);

  const getShowId = (id: string) => {
    setShowId(id);
  };
  const [watchListShows, setWatchListShows] = useState<
    streamingAvailability.Show[] | null
  >(null);

  const getWatchListedShow = async () => {
    const data = await client.showsApi.getShow({
      id: showId || " ",
    });
    console.log(data);

    // setWatchListShows((prev) => {
    //   if (!prev) return [data]; // If prev is null, initialize as an array with the new show
    //   return prev.some((show) => show.id === data.id) ? prev : [...prev, data];
    // });
    setWatchListShows((prev) => {
      if (!prev) {
        localStorage.setItem("watchlist", JSON.stringify([data])); // Save to local storage
        return [data]; // If prev is null, initialize as an array with the new show
      }
      if (prev.some((show) => show.id === data.id)) return prev; // Avoid duplicates

      const updatedWatchlist = [...prev, data];
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist)); // Save updated list
      return updatedWatchlist;
    });
  };
  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) {
      setWatchListShows(JSON.parse(savedWatchlist));
    }

    showId && showId !== " " && getWatchListedShow();
  }, [showId]);

  return (
    <watchListContext.Provider value={{ watchListShows, getShowId, showId }}>
      {children}
    </watchListContext.Provider>
  );
};

// now custom hook to use showId and getShowId
export const useWatchListContext = () => {
  const context = useContext(watchListContext);
  if (!context) {
    throw new Error("useWatchList must be used within a WatchListProvider");
  }
  return context;
};
