import { createContext, useContext, useEffect, useState } from "react";
import * as streamingAvailability from "streaming-availability";
import { client } from "../components/apiClient";

interface contextType {
  showId: string | null;
  getShowId: (id: string) => void;
  watchListShows: streamingAvailability.Show[] | null;
  removeId: string | null;
  getRemoveId: (id: string) => void;
}

const watchListContext = createContext<contextType | null>(null);

export const WatchListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showId, setShowId] = useState<string | null>(null);
  const [removeId, setRemoveId] = useState<string | null>(null);
  const [watchListShows, setWatchListShows] = useState<
    streamingAvailability.Show[] | null
  >(null);

  const getShowId = (id: string) => {
    setShowId(id);
  };

  const getRemoveId = (id: string) => {
    setRemoveId(id);
    console.log(removeId);
  };

  const getWatchListedShow = async () => {
    if (!showId || showId === " ") return;
    const data = await client.showsApi.getShow({
      id: showId || " ",
    });
    console.log(data);

    // adding shows to watchList
    setWatchListShows((prev) => {
      if (!prev) {
        localStorage.setItem("watchlist", JSON.stringify([data])); // Save to local storage
        return [data]; // If prev is null, initialize as an array with the new show
      }
      if (prev.some((show) => show.id === data.id)) return prev; // Avoid duplicates

      const updatedWatchList = [...prev, data];
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchList)); // Save updated list
      return updatedWatchList;
    });
  };

  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) {
      setWatchListShows(JSON.parse(savedWatchlist));
    }

    getWatchListedShow();
  }, [showId]);

  return (
    <watchListContext.Provider
      value={{ watchListShows, getShowId, showId, removeId, getRemoveId }}
    >
      {children}
    </watchListContext.Provider>
  );
};

// now custom hook to use the show details for watchList
export const useWatchListContext = () => {
  const context = useContext(watchListContext);
  if (!context) {
    throw new Error("useWatchList must be used within a WatchListProvider");
  }
  return context;
};
