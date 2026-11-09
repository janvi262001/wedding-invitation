import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery({ gallery }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="space-y-10 pt-12 md:pt-20" id="gallery">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#B08968]">
          Memories
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#202D3C]">
          Our Gallery
        </h2>
        <div className="w-12 h-px mx-auto mt-3 bg-[#B08968]"></div>
      </div>

      {/* Gallery Grid (2 Columns on mobile, 3 on tablet, 4 on desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {gallery.map((item, index) => (
          <div
            key={item.id || index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-xl border border-[#D2E0EE]/70 bg-white shadow-sm cursor-pointer aspect-[3/4] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={item.src}
              alt={item.caption || `Memory ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#202D3C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <span className="text-white text-xs font-serif italic truncate">
                {item.caption || `Memory ${index + 1}`}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#D2E0EE] flex items-center gap-1 mt-0.5">
                <ZoomIn className="w-3 h-3" /> Click to enlarge
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#202D3C]/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Large Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={gallery[activeImageIndex].src}
              alt={gallery[activeImageIndex].caption}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/20"
            />
            <div className="mt-3 text-center text-white space-y-1">
              <p className="font-serif italic text-lg">
                {gallery[activeImageIndex].caption}
              </p>
              <p className="text-xs uppercase tracking-widest text-[#B08968]">
                {activeImageIndex + 1} of {gallery.length}
              </p>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
