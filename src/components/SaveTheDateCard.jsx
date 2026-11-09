import React, { useState } from 'react';
import { Calendar, Sparkles, Check } from 'lucide-react';

export default function SaveTheDateCard({ saveTheDate }) {
  const [isRevealed, setIsRevealed] = useState(true);
  const [addedToCal, setAddedToCal] = useState(false);

  const handleAddToCalendar = () => {
    const { calendarEvent } = saveTheDate;
    if (!calendarEvent) return;

    // Google Calendar URL generator
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      calendarEvent.title
    )}&dates=${calendarEvent.startDate}/${calendarEvent.endDate}&details=${encodeURIComponent(
      calendarEvent.description
    )}&location=${encodeURIComponent(calendarEvent.location)}`;

    window.open(googleCalUrl, '_blank', 'noopener,noreferrer');
    setAddedToCal(true);
    setTimeout(() => setAddedToCal(false), 4000);
  };

  return (
    <div className="max-w-md mx-auto w-full px-2 py-4">
      <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-md border border-[#D2E0EE] bg-white flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:shadow-lg">
        {/* Decorative corner accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#B08968]/40"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#B08968]/40"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#B08968]/40"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#B08968]/40"></div>

        <div className="space-y-2 z-10">
          <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#B08968]">
            {saveTheDate.title}
          </p>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#202D3C] tracking-wide">
            {saveTheDate.displayDate}
          </p>

          <div className="pt-2">
            <button
              onClick={handleAddToCalendar}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold border border-[#B08968]/40 text-[#B08968] bg-[#F0F4F8] hover:bg-[#B08968] hover:text-white transition-colors duration-200"
            >
              {addedToCal ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span>Opened in Calendar</span>
                </>
              ) : (
                <>
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Add to Calendar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
