import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  /* 🔥 Detect scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 z-50 w-full flex items-center justify-between
        px-6 md:px-16 lg:px-36 py-5
        transition-all duration-300
        ${scrolled
          ? "backdrop-blur-xl bg-black/50 shadow-lg"
          : "bg-transparent"}
      `}
    >
      {/* Logo */}
      <Link to="/" className="max-md:flex-1">
        <img src={assets.logo} alt="Logo" className="w-44 h-auto" />
      </Link>

      {/* Desktop + Mobile Menu */}
      <div
        className={`
          max-md:absolute max-md:top-0 max-md:left-0 z-50
          flex flex-col md:flex-row items-center gap-8
          max-md:justify-center max-md:h-screen
          px-8 py-3 md:rounded-full
          backdrop-blur-xl bg-black/70 md:bg-white/10
          border border-white/10
          transition-[width] duration-300
          ${isOpen ? "max-md:w-full" : "max-md:w-0"}
        `}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        {["/", "/movies", "/", "/", "/favourite"].map((path, i) => {
          const labels = ["Home", "Movies", "Theaters", "Releases", "Favourite"];
          return (
            <Link
              key={labels[i]}
              to={path}
              onClick={() => {
                window.scrollTo(0, 0);
                setIsOpen(false);
              }}
              className="hover:text-primary transition"
            >
              {labels[i]}
            </Link>
          );
        })}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />

        {!user ? (
          <button
            onClick={openSignIn}
            className="px-4 py-1 sm:px-7 sm:py-2 bg-primary
            hover:bg-primary-dull transition rounded-full font-medium"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
};

export default Navbar;
