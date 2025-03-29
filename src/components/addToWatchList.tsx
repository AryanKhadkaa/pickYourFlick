import { AiOutlinePlus } from "react-icons/ai";
import { useWatchListContext } from "../contexts/watchlistContext";

const AddToWatchList = ({ showId }: { showId: string }) => {
  const { getShowId } = useWatchListContext();

  const addToWatchList = (id: string) => {
    getShowId(id);
  };

  return (
    <button
      onClick={() => addToWatchList(showId)}
      className="w-[10%] flex items-center justify-center cursor-pointer text-2xl hover:text-2xl transition-all ease-linear hover:bg-third hover:text-secondary"
    >
      <AiOutlinePlus />
    </button>
  );
};

export default AddToWatchList;
