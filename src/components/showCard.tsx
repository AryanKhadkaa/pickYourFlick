import * as streamingAvailability from "streaming-availability";

const ShowCard = ({ show }: { show: streamingAvailability.Show }) => {
  return (
    <div>
      <div className="bg-yellow-500">
        <img
          src={show.imageSet.verticalPoster.w480}
          alt={`${show.title}'s poster`}
        />
      </div>
    </div>
  );
};

export default ShowCard;
