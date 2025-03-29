import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#151515] text-secondary font-Poppins ">
      <div className="flex justify-between max-w-7xl mx-auto px-10 py-4 border-b border-white/10">
        <div>
          <h1 className="text-2xl font-bold">PickYourFlick</h1>
        </div>
        <ul className="hidden md:flex gap-5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/watchlist"}>Watchlist</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
