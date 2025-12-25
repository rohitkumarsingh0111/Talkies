import React, { useState } from "react";
import { Heart, Trash2 } from "lucide-react";

const Favourite = () => {
  const [favourites, setFavourites] = useState([
    {
      id: 1,
      title: "Inception",
      rating: "8.8",
      poster:
        "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      rating: "8.6",
      poster:
        "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
  ]);

  const removeFromFavourite = (id) => {
    setFavourites(favourites.filter((movie) => movie.id !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Heart className="text-red-500" /> My Favourite Movies
      </h1>

      {favourites.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-xl">No favourite movies yet 🎬</p>
          <p className="text-sm mt-2">
            Start adding movies to your favourites
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourites.map((movie) => (
            <div
              key={movie.id}
              className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-4">
                <h2 className="font-semibold text-lg truncate">
                  {movie.title}
                </h2>
                <p className="text-sm text-gray-400">
                  ⭐ Rating: {movie.rating}
                </p>

                <button
                  onClick={() => removeFromFavourite(movie.id)}
                  className="mt-4 flex items-center gap-2 text-sm text-red-400 hover:text-red-500 transition"
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourite;
