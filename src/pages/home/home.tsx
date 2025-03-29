import SearchFilm from "./searchFilm";

const Home = () => {
  return (
    <section className="bg-[#151515] text-secondary font-Poppins h-[100vh]">
      <div className="max-w-7xl mx-auto px-10 py-12">
        <div className="flex flex-col gap-8 justify-center text-center max-w-[800px] mx-auto px-5 py-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Finish your watchlist before you know it
          </h1>
          <p className="w-full md:w-[70%] mx-auto text-secondary/80">
            Browse through movies and shows world wide, create watchlists and
            generate a movie to watch when you want.
          </p>
        </div>
        <div>
          <SearchFilm />
        </div>
      </div>
    </section>
  );
};

export default Home;
