import React from 'react';
import { Heart } from 'lucide-react';

export default function CoupleSection({ couple }) {
  return (
    <div className="flex flex-row justify-center items-end gap-3 sm:gap-8 md:gap-16 px-2 py-8">
      {/* The Groom Card */}
      <div className="flex-1 max-w-[130px] sm:max-w-[165px] md:max-w-[200px] text-center space-y-3 flex flex-col items-center">
        <div className="relative w-full p-2 border border-[#B08968]/50 rounded-t-full rounded-b-2xl shadow-sm bg-white">
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden border border-[#B08968] rounded-t-full rounded-b-xl bg-[#F0F4F8]">
            <img
              src={couple.groom.image}
              alt={couple.groom.alt || couple.groom.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Top Diamond Brooch */}
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#B08968] shadow-sm"></span>
        </div>

        <div className="w-full pt-1">
          <p className="font-serif text-base sm:text-lg md:text-xl font-light text-[#202D3C] leading-tight">
            {couple.groom.name}
          </p>
          <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#6D829B] mt-1">
            {couple.groom.role}
          </p>
        </div>
      </div>

      {/* Central Pulsing Heart Symbol */}
      <div className="shrink-0 pb-16 sm:pb-20 md:pb-24">
        <div className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-[#B08968]/50 bg-[#E5EFF8] shadow-sm">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08968] fill-[#B08968] animate-pulse" />
        </div>
      </div>

      {/* The Bride Card */}
      <div className="flex-1 max-w-[130px] sm:max-w-[165px] md:max-w-[200px] text-center space-y-3 flex flex-col items-center">
        <div className="relative w-full p-2 border border-[#B08968]/50 rounded-t-full rounded-b-2xl shadow-sm bg-white">
          <div className="w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden border border-[#B08968] rounded-t-full rounded-b-xl bg-[#F0F4F8]">
            <img
              src={couple.bride.image}
              alt={couple.bride.alt || couple.bride.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          {/* Top Diamond Brooch */}
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#B08968] shadow-sm"></span>
        </div>

        <div className="w-full pt-1">
          <p className="font-serif text-base sm:text-lg md:text-xl font-light text-[#202D3C] leading-tight">
            {couple.bride.name}
          </p>
          <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#6D829B] mt-1">
            {couple.bride.role}
          </p>
        </div>
      </div>
    </div>
  );
}
