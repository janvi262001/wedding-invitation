import React from 'react';
import { MapPin, Car, Navigation, Compass } from 'lucide-react';

export default function VenueTravel({ venue, travel }) {
  return (
    <div className="space-y-8 pt-12 md:pt-20" id="venue">
      {/* Main Venue Card */}
      <div className="p-7 sm:p-10 md:p-12 text-center space-y-4 bg-white border border-[#D2E0EE] rounded-2xl shadow-sm">
        <div className="w-10 h-10 rounded-full bg-[#E5EFF8] text-[#B08968] flex items-center justify-center mx-auto mb-2">
          <MapPin className="w-5 h-5" />
        </div>
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#B08968]">
          {venue.title}
        </p>
        <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed max-w-xl mx-auto text-[#202D3C]">
          {venue.address}
        </p>
        <div className="pt-2">
          <a
            href={venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-semibold text-[#B08968] hover:text-[#8B6F47] transition-colors py-2 px-5 rounded-full border border-[#B08968]/40 hover:bg-[#E5EFF8]"
          >
            <span>Get directions</span>
            <Navigation className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Guest Information: Stay & Travel */}
      <div className="space-y-6 pt-6">
        <div className="text-center space-y-2">
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#B08968]">
            {travel.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-[#202D3C]">
            {travel.title}
          </h2>
          <div className="w-12 h-px mx-auto mt-2 bg-[#B08968]"></div>
        </div>

        <div className="rounded-2xl p-6 sm:p-7 space-y-3 bg-white border border-[#D2E0EE] shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#E5EFF8] text-[#B08968] shrink-0">
              <Car className="w-5 h-5" />
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#202D3C]">
              {travel.cardTitle}
            </h3>
          </div>
          <p className="text-sm font-light leading-relaxed text-[#6D829B] pl-13">
            {travel.details}
          </p>
        </div>
      </div>
    </div>
  );
}
