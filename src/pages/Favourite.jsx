import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(data);
  }, []);

  const removeFavourite = (id) => {
    const updated = favourites.filter((m) => m.id !== id);
    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  if (!favourites.length) {
    return (
      <div className="text-center mt-24 text-xl text-gray-400">
        No favourite movies yet ❤️
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 min-h-screen text-white px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">Your Favourites</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favourites.map((movie) => (
          <div
            key={movie.id}
            className="bg-neutral-900 rounded-xl overflow-hidden"
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="h-[360px] w-full object-cover"
              />
            </Link>

            <div className="p-4">
              <h3 className="font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-400">
                ⭐ {movie.vote_average}
              </p>

              <button
                onClick={() => removeFavourite(movie.id)}
                className="mt-3 text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
