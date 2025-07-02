import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hasUserScrolled, setHasUserScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 50) setHasUserScrolled(true);
    else setHasUserScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full z-50 top-0 text-secondary font-Poppins transition-all ease-linear
        ${
          hasUserScrolled
            ? "bg-primary shadow-md shadow-secondary/40"
            : "bg-transparent shadow-sm shadow-secondary/30"
        }
        `}
    >
      <div className="flex flex-wrap items-center justify-between gap-5 max-w-7xl mx-auto px-5 py-4 border-b-0 border-white/30">
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
