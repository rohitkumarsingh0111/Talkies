import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircle';

const TrailerSection = () => {
  const [currentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />

        {/* Aspect Ratio Wrapper (CRITICAL) */}
        <div className="relative aspect-video max-w-[960px] mx-auto bg-black rounded-xl overflow-hidden">
          <ReactPlayer
            url={currentTrailer.videoUrl}
            width="100%"
            height="100%"
            controls
            muted
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  rel: 0,
                  modestbranding: 1,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
