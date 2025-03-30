import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <FaSpinner size={45} className="animate-spin duration-50" color="white" />
    </div>
  );
};

export default Loader;
