import * as streamingAvailability from "streaming-availability";

const ShowCard = ({ show }: { show: streamingAvailability.Show }) => {
  return (
    <div className="group relative h-[350px] cursor-pointer overflow-hidden">
      <article className="group w-full h-full rounded-md">
        <img
          src={show.imageSet.verticalPoster.w480}
          alt={`${show.title}'s poster`}
          className="w-full h-full rounded-md object-cover"
          loading="lazy"
        />
      </article>
      <div className=" bg-primary/80 absolute h-full w-full hidden group-hover:bottom-0 -bottom-full text-secondary sm:flex flex-col gap-5 justify-center text-center transition-all ease-in-out duration-500">
        <h2 className="text-lg">{show.title}</h2>
        <div className="flex justify-around px-2 text-sm text-secondary/80">
          <p className="text-[12px]">{show.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
