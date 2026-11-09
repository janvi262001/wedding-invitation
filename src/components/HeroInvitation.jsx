import React from 'react';

export default function HeroInvitation({ header, couple }) {
  return (
    <div className="relative px-5 py-10 sm:p-12 md:p-16 text-center overflow-hidden bg-white border border-[#D2E0EE] shadow-sm rounded-xl">
      {/* 4 Corner Ornaments - Exact SVG from Wishlys */}
      <svg className="absolute top-2 left-2 opacity-50 text-[#B08968]" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M5 55C5 55 15 45 25 40C35 35 45 25 50 15C55 5 55 5 55 5" stroke="#B08968" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M5 45C10 38 18 32 28 28" stroke="#B08968" strokeWidth="0.6" strokeLinecap="round" />
        <circle cx="28" cy="28" r="2" fill="#B08968" opacity="0.5" />
      </svg>
      <svg className="absolute top-2 right-2 opacity-50 -scale-x-100 text-[#B08968]" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M5 55C5 55 15 45 25 40C35 35 45 25 50 15C55 5 55 5 55 5" stroke="#B08968" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M5 45C10 38 18 32 28 28" stroke="#B08968" strokeWidth="0.6" strokeLinecap="round" />
        <circle cx="28" cy="28" r="2" fill="#B08968" opacity="0.5" />
      </svg>
      <svg className="absolute bottom-2 left-2 opacity-50 -scale-y-100 text-[#B08968]" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M5 55C5 55 15 45 25 40C35 35 45 25 50 15C55 5 55 5 55 5" stroke="#B08968" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M5 45C10 38 18 32 28 28" stroke="#B08968" strokeWidth="0.6" strokeLinecap="round" />
        <circle cx="28" cy="28" r="2" fill="#B08968" opacity="0.5" />
      </svg>
      <svg className="absolute bottom-2 right-2 opacity-50 -scale-x-100 -scale-y-100 text-[#B08968]" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M5 55C5 55 15 45 25 40C35 35 45 25 50 15C55 5 55 5 55 5" stroke="#B08968" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M5 45C10 38 18 32 28 28" stroke="#B08968" strokeWidth="0.6" strokeLinecap="round" />
        <circle cx="28" cy="28" r="2" fill="#B08968" opacity="0.5" />
      </svg>

      {/* Inner Decorative Double Border */}
      <div className="absolute inset-3 pointer-events-none border border-[#D2E0EE]/70 rounded-lg"></div>

      <div className="space-y-6 py-6 md:py-10 relative z-10">
        {/* Sacred Ganesha Symbol & Invocation */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            <img
              src={header.symbolIcon}
              alt="Ganesha Symbol"
              className="w-full h-full object-contain filter invert-[58%] sepia-[23%] saturate-[698%] hue-rotate-[347deg] brightness-[88%] contrast-[86%]"
              onError={(e) => {
                // In case image filter fails or local svg loads
                e.target.style.filter = 'none';
              }}
            />
          </div>
          <p className="font-serif text-sm md:text-base tracking-widest text-[#B08968] font-medium">
            {header.invocationText}
          </p>
        </div>

        {/* Together With Their Families */}
        <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase font-semibold text-[#B08968]">
          {header.familiesText}
        </p>

        {/* Elegant Wave Divider Ornament */}
        <div className="flex justify-center py-2 opacity-75">
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

        {/* Couple Names & Parents Information */}
        <div className="space-y-3">
          {/* Groom */}
          <div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#202D3C] font-light tracking-wide leading-tight">
              {couple.groom.name}
            </h1>
            <p className="text-[11px] md:text-xs tracking-wider font-light text-[#6D829B] mt-1">
              {couple.groom.parentage}
            </p>
          </div>

          {/* Ampersand */}
          <div className="py-1">
            <span className="font-serif italic text-2xl md:text-3xl text-[#B08968] font-normal">&</span>
          </div>

          {/* Bride */}
          <div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#202D3C] font-light tracking-wide leading-tight">
              {couple.bride.name}
            </h1>
            <p className="text-[11px] md:text-xs tracking-wider font-light text-[#6D829B] mt-1">
              {couple.bride.parentage}
            </p>
          </div>
        </div>

        {/* Thin Gold Center Line */}
        <div className="w-20 h-px mx-auto bg-[#B08968]/70 my-4"></div>

        {/* Invitation Honor Note */}
        <p className="font-serif italic text-xl md:text-2xl font-light text-[#202D3C] leading-snug">
          {header.invitationNote}
        </p>
      </div>
    </div>
  );
}
