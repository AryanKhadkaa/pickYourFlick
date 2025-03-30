import Generate from "../../components/generate";
import SearchShow from "./searchShow";

const Home = () => {
  return (
    <section className="bg-primary text-secondary font-Poppins">
      <div className=" max-w-7xl mx-auto px-5 py-24">
        <div className="flex flex-col gap-8 justify-center text-center max-w-[800px] mx-auto py-10">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">
            Build Your Ideal Watchlist and Never Miss a Show!
          </h1>
          <p className="w-full md:w-[70%] mx-auto text-secondary/80">
            Discover movies world wide, build your watchlists, and let us choose
            your next movie.
          </p>
        </div>
        <div>
          <SearchShow />
        </div>
        <div className="py-10 flex flex-col gap-3 justify-center items-center">
          <p className="text-secondary/70 text-sm">
            Already have your watchlist set?
          </p>
          <Generate />
        </div>
      </div>
    </section>
  );
};

export default Home;
