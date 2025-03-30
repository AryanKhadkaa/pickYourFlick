import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-secondary font-Poppins ">
      <div className="flex flex-wrap items-center justify-between gap-5 max-w-7xl mx-auto px-5 py-4 border-b border-white/30">
        <div>
          <Link to={"/"}>
            <h1 className="text-lg md:text-2xl font-bold flex flex-wrap">
              PickYour<span className="text-third font-bold">Flick</span>
            </h1>
          </Link>
        </div>
        <ul className="flex md:flex flex-wrap gap-5 text-sm md:text-base">
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
