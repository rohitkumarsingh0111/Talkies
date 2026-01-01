import React from "react";
import { useParams } from "react-router-dom";
import { dummyShowsData } from "../assets/assets"; // ✅ CORRECT PATH

const MovieDetails = () => {
  const { id } = useParams();

  const movie = dummyShowsData.find(
    (m) => m.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="text-center mt-20 text-xl text-white">
        Movie not found
      </div>
    );
  }

  return (
    <div className="text-white p-10">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="text-gray-400 mt-4">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
