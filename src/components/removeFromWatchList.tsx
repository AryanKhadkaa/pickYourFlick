import { AiOutlineClose } from "react-icons/ai";
import { useWatchListContext } from "../contexts/watchlistContext";

const RemoveFromWatchList = ({ showId }: { showId: string }) => {
  const { getRemoveId } = useWatchListContext();
  const removeFromWatchList = () => {
    getRemoveId(showId);
  };
  return (
    <button
      className="absolute top-0 right-0 p-2"
      onClick={removeFromWatchList}
    >
      <AiOutlineClose size={30} />
    </button>
  );
};

export default RemoveFromWatchList;
