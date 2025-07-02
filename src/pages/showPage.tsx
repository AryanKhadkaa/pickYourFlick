import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../components/apiClient";
import Loader from "../components/loader";

export const ShowPage = () => {
  const [show, setShow] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { showId } = useParams();
  console.log(showId);

  const getShow = async () => {
    try {
      const data = await client.showsApi.getShow({
        id: showId || " ",
      });
      setShow(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getShow();
  }, []);
  const navigate = useNavigate();

  return isLoading ? (
    <Loader />
  ) : (
    <div className="font-Poppins">
      <div className="max-w-7xl mx-auto py-20">
        <div className=" flex flex-col items-center md:items-start gap-10 md:flex-row py-10 px-5">
          <div className="bg-red-0">
            <div className="group w-full max-w-[350px] bg-blue-0 mx-auto rounded-lg overflow-hidden">
              <img
                src={show?.imageSet.verticalPoster.w720}
                alt=""
                className="group-hover:scale-[1.05] w-full max-w-[350px] min-h-[450px]  transition-all"
              />
            </div>
          </div>
          <div className="">
            <div className="bg-red-0 ">
              <div className="space-x-2 bg-red-0 ">
                <span className="text-2xl sm:text-3xl">
                  {show?.originalTitle}
                </span>
                <span className="text-2xl sm:text-3xl">
                  ({show?.releaseYear})
                </span>
              </div>
              <div className="font-extralight">
                <span>
                  Directed by{" "}
                  <span className="text-lg font-semibold">
                    {show?.directors}
                  </span>
                </span>
              </div>
              <div className="py-5 text-gray-300 font-light">
                <p>{show?.overview}</p>
              </div>
            </div>
            <div className="bg-blue-0 w-full">
              <ul className="flex gap-4 border-b-[1px] py-2 border-gray-700">
                {["Cast", "Genres", "Details"].map((item, idx) => {
                  return (
                    <li
                      className="cursor-pointer"
                      key={idx}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap bg-green-0 py-4 gap-2">
                {show &&
                  show.cast.map((actor: string, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className="text-sm p-2 bg-white/30 rounded-sm"
                      >
                        <span>{actor}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
