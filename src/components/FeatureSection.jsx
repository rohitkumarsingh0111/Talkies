import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlurCircle';
import MovieCard from './MovieCard';
import { dummyShowsData } from '../assets/assets';

const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      
      {/* Header */}
      <div className="relative flex items-center justify-between pt-16 pb-10">
        <BlurCircle top="0" right="-80px" />

        <p className="text-gray-300 font-medium text-lg">
          Now Showing
        </p>

        <button
          onClick={() => navigate('/movies')}
          className="group flex items-center gap-2 text-sm text-gray-300"
        >
          View All
          <ArrowRight
            className="
              w-4 h-4 transition-transform duration-300
              group-hover:translate-x-1
            "
          />
        </button>
      </div>

      {/* Movie Grid */}
      <div
        className="
          flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {dummyShowsData.slice(0, 4).map(show=> (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      {/* Show More */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className="
            px-10 py-3 text-sm bg-primary
            hover:bg-primary-dull transition
            rounded-md font-medium
          "
        >
          Show More
        </button>
      </div>

    </section>
  );
};

export default FeatureSection;
