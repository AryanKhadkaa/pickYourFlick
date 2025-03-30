import { useLocation } from "react-router-dom";
import ShowCard from "../components/showCard";

const GeneratedShow = () => {
  const location = useLocation();
  const show = location.state;
  console.log(show);

  const seenServices = new Set<string>();
  const streamingPlatforms = show.streamingOptions.us;

  return (
    <section className="relative min-h-[100vh] font-Poppins text-secondary">
      <div className="absolute w-full hidden">
        <img
          src={show.imageSet.horizontalPoster.w1440}
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
      <div className="w-full bg-primary bg-opacity-50 h-full">
        <div className="flex max-w-[350px] mx-auto flex-col text-center items-center justify-center py-10 gap-3 px-5">
          <div>
            <p className="font-normal ">
              The show picked for you is{" "}
              <span className="font-semibold text-lg">{show.title} </span>
            </p>
          </div>
          <ShowCard show={show} />
          <div className="w-full flex flex-wrap gap-2 justify-around px-2 text-sm text-secondary/80">
            <p>{`${show.showType || "N/A"} `}</p>
            <p>{`${show.releaseYear || "N/A"} `}</p>
            <p>{`${show.runTime || "N/A"} `} m</p>
          </div>
          <hr className="bg-secondary w-full my-4" />
          <div className="w-full space-y-4">
            <h2 className="text-lg">Streaming Platforms</h2>
            <div className="z-50 w-full flex flex-wrap gap-4 justify-center text-sm items-center">
              {streamingPlatforms
                .filter((option: any) => {
                  if (seenServices.has(option.service.id)) return false;
                  seenServices.add(option.service.id);
                  return true;
                })
                .map((option: any, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className="h-[50px] max-w-[50px] hover:scale-[1.05] transition-all"
                    >
                      <a
                        href={option.service.homePage}
                        className="w-full h-full"
                      >
                        <img
                          src={option.service.imageSet.lightThemeImage}
                          alt=""
                          className="w-full bg-white h-full rounded-full p-2 "
                        />
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratedShow;
