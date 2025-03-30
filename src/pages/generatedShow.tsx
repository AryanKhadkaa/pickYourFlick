import { useLocation } from "react-router-dom";
import ShowCard from "../components/showCard";

const GeneratedShow = () => {
  const location = useLocation();
  const show = location.state;
  return (
    <section className="h-[100vh] font-Poppins">
      <div className="flex flex-col items-center  justify-center py-10 gap-3">
        <div>
          <p className="text-lg font-semibold text-secondary">
            The show picked for you is {show.title}
          </p>
        </div>
        <ShowCard show={show} />
      </div>
    </section>
  );
};

export default GeneratedShow;
