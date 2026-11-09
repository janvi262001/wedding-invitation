import React from 'react';
import { Heart } from 'lucide-react';

export default function FooterSection({ footer, couple }) {
  return (
    <div className="text-center pt-16 pb-12 space-y-4">
      {/* Wave Flourish */}
      <div className="flex justify-center py-2 opacity-70">
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

      <p className="font-serif text-xl sm:text-2xl italic font-light text-[#202D3C]">
        {footer.heading}
      </p>

      <p className="font-serif text-base text-[#B08968] tracking-wider">
        {couple.groom.name} & {couple.bride.name}
      </p>

      <div className="pt-4 flex items-center justify-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-[#6D829B]">
        <span>Made with</span>
        <Heart className="w-3 h-3 text-[#B08968] fill-[#B08968]" />
        <span>for family & friends</span>
      </div>
    </div>
  );
}
