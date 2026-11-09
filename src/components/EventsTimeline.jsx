import React from 'react';
import { Clock, Shirt, MapPin, ExternalLink } from 'lucide-react';

export default function EventsTimeline({ events }) {
  return (
    <div className="space-y-10 pt-8 md:pt-14" id="events">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#B08968]">
          Programme
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#202D3C]">
          The Celebrations
        </h2>
        <div className="w-12 h-px mx-auto mt-3 bg-[#B08968]"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative space-y-10 pl-6 sm:pl-8 md:pl-10">
        {/* Continuous Vertical Timeline Line */}
        <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-px bg-[#D2E0EE]"></div>

        {events.map((event, idx) => (
          <div key={event.id || idx} className="relative space-y-4">
            {/* Timeline Node Marker */}
            <div className="absolute -left-[20px] sm:-left-[24px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#B08968] bg-[#F0F4F8] flex items-center justify-center shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B08968]"></div>
            </div>

            {/* Event Card */}
            <div className="p-5 sm:p-7 space-y-4 rounded-xl bg-white border border-[#D2E0EE] shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Event Badge & Meta */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] tracking-[0.15em] uppercase font-semibold text-[#B08968]">
                    {event.eventNumber}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#D2E0EE]"></span>
                  <span className="text-[10px] tracking-[0.12em] uppercase font-semibold text-[#6D829B]">
                    {event.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#D2E0EE]"></span>
                  <span className="text-[10px] tracking-[0.12em] uppercase font-bold text-[#B08968]">
                    {event.time}
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-[#202D3C]">
                  {event.name}
                </h3>
              </div>

              {/* Event Description (if provided) */}
              {event.description && (
                <p className="text-sm font-light leading-relaxed text-[#202D3C]">
                  {event.description}
                </p>
              )}

              {/* Details Grid: Timings & Dress Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D2E0EE]/50">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-[#B08968] shrink-0" />
                  <div>
                    <p className="font-semibold text-[10px] tracking-[0.12em] uppercase text-[#202D3C]">
                      Timings
                    </p>
                    <p className="text-xs mt-0.5 font-light text-[#6D829B]">
                      {event.timingsDisplay || event.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shirt className="w-4 h-4 mt-0.5 text-[#B08968] shrink-0" />
                  <div>
                    <p className="font-semibold text-[10px] tracking-[0.12em] uppercase text-[#202D3C]">
                      Dress Code
                    </p>
                    <p className="text-xs mt-0.5 font-light text-[#6D829B]">
                      {event.dressCode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Venue Row */}
              <div className="flex items-start justify-between gap-3 pt-4 border-t border-[#D2E0EE]/50">
                <div className="flex items-start gap-3 flex-1">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#B08968] shrink-0" />
                  <div>
                    <p className="font-semibold text-[10px] tracking-[0.12em] uppercase text-[#202D3C]">
                      Venue
                    </p>
                    <p className="text-xs mt-0.5 font-light text-[#6D829B] whitespace-pre-line">
                      {event.venue}
                    </p>
                  </div>
                </div>

                {event.mapUrl && (
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#B08968] hover:text-[#8B6F47] transition-colors py-1 px-2.5 rounded border border-[#B08968]/30 hover:bg-[#E5EFF8]/60 shrink-0 self-center"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
