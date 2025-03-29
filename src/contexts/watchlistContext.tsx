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

    setWatchListShows((prev) => {
      if (!prev) return [data]; // If prev is null, initialize as an array with the new show
      return prev.some((show) => show.id === data.id) ? prev : [...prev, data];
    });
  };
  useEffect(() => {
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
