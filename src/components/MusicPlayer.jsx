import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ music }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Audio autoplay prevented:', err);
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <audio
        ref={audioRef}
        src={music.audioUrl || music.fallbackAudioUrl}
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D2E0EE] shadow-lg hover:shadow-xl hover:border-[#B08968] text-[#202D3C] transition-all duration-300"
        title={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        aria-label="Toggle background music"
      >
        <div className="w-7 h-7 rounded-full bg-[#E5EFF8] text-[#B08968] flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4" />
          )}
        </div>

        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[10px] tracking-wider uppercase font-semibold text-[#B08968]">
            {isPlaying ? 'Music Playing' : 'Play Music'}
          </span>
          <span className="text-[9px] text-[#6D829B] max-w-[110px] truncate">
            {music.title || 'Wedding Melody'}
          </span>
        </div>

        {/* Animated equalizer bars when playing */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3.5 px-1">
            <span className="w-0.5 bg-[#B08968] h-full animate-[bounce_0.6s_ease-in-out_infinite]"></span>
            <span className="w-0.5 bg-[#B08968] h-2/3 animate-[bounce_0.8s_ease-in-out_infinite_0.2s]"></span>
            <span className="w-0.5 bg-[#B08968] h-4/5 animate-[bounce_0.7s_ease-in-out_infinite_0.4s]"></span>
          </div>
        )}
      </button>
    </div>
  );
}
