import React, { useState } from 'react';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Experience the Power of 1MDM</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our platform empowers medical suppliers to reach global markets and streamline their B2B operations.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black">
          {/* Aspect Ratio Container (16:9) - ensures responsive height on all devices */}
          <div className="relative w-full pb-[56.25%] h-0">
            {!isPlaying ? (
              <div 
                className="absolute top-0 left-0 w-full h-full cursor-pointer group" 
                onClick={() => setIsPlaying(true)}
                role="button"
                aria-label="Play video"
              >
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                  alt="1MDM Platform Video Thumbnail" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-brand-red/90 rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-white/30 backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white" fill="currentColor" />
                  </div>
                </div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-white text-xl font-bold mb-1">Connecting Buyers & Sellers Globally</h3>
                  <p className="text-gray-200 text-sm font-medium flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                    Click to watch platform tour
                  </p>
                </div>
              </div>
            ) : (
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                /* 
                   Used a generic Medical Supply Chain video ID: 7xXpZ_0d1vU 
                   Added mute=1 to ensure autoplay works on mobile/chrome 
                */
                src="https://www.youtube.com/embed/7xXpZ_0d1vU?autoplay=1&mute=1&rel=0&modestbranding=1" 
                title="1MDM Platform Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
