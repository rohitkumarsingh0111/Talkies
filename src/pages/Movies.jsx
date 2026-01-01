import React from "react";
import { Link } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";

const Movies = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-white px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">Now Showing</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {dummyShowsData.map((movie) => (
          <Link
            key={movie.id}                         // ✅ use id
            to={`/movies/${movie.id}`}             // ✅ route-safe
            className="group"
          >
            <div className="rounded-xl overflow-hidden bg-neutral-900 shadow-lg">
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="h-[360px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="mt-3">
              <h3 className="font-semibold text-sm line-clamp-1">
                {movie.title}
              </h3>

              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>⭐ {movie.vote_average}</span>
                <span>{movie.runtime} min</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
