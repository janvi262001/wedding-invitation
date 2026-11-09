import React from 'react';

export default function OurStory({ story }) {
  return (
    <div className="p-8 sm:p-10 md:p-14 text-center space-y-6 bg-white border border-[#D2E0EE] rounded-xl shadow-sm my-8 relative overflow-hidden">
      {/* Background soft ambient tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F0F4F8]/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10 space-y-5">
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#B08968]">
          {story.eyebrow}
        </p>

        {/* Flourish Divider */}
        <div className="flex justify-center py-1 opacity-70">
          <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
            <path
              d="M10 12C20 6 30 18 40 12C50 6 60 18 70 12C80 6 90 18 100 12"
              stroke="#B08968"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="60" cy="12" r="3" fill="#B08968" />
            <circle cx="5" cy="12" r="2" fill="#B08968" />
            <circle cx="115" cy="12" r="2" fill="#B08968" />
          </svg>
        </div>

        {/* Story Quote */}
        <p className="font-serif text-lg sm:text-xl md:text-2xl italic leading-relaxed font-light max-w-xl mx-auto text-[#202D3C]">
          {story.quote}
        </p>

        {/* Subtitle / Tagline */}
        <div className="pt-4 border-t border-[#D2E0EE]/80 max-w-lg mx-auto">
          <p className="text-xs sm:text-sm tracking-[0.15em] uppercase font-light italic text-[#6D829B]">
            {story.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
