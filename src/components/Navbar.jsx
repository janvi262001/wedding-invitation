import React, { useState } from 'react';
import { Edit3, Sparkles, Share2, Check, Music } from 'lucide-react';

export default function Navbar({ couple, onOpenEditor, petalsEnabled, onTogglePetals }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${couple.groom.name} & ${couple.bride.name} — Wedding Invitation`,
        text: `You're invited to celebrate our wedding!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-[#D2E0EE] shadow-sm transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Monogram / Brand */}
        <div className="flex items-center gap-2">
          <span className="font-serif italic text-xl font-medium tracking-wider text-[#B08968]">
            {couple.groom.name.charAt(0)} & {couple.bride.name.charAt(0)}
          </span>
          <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#6D829B] border-l border-[#D2E0EE] pl-2">
            Wedding Celebration
          </span>
        </div>

        {/* Quick Links */}
        <div className="hidden md:flex items-center gap-5 text-[11px] tracking-wider uppercase font-medium text-[#6D829B]">
          <a href="#events" className="hover:text-[#B08968] transition-colors">
            Programme
          </a>
          <a href="#gallery" className="hover:text-[#B08968] transition-colors">
            Gallery
          </a>
          <a href="#venue" className="hover:text-[#B08968] transition-colors">
            Venue
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Petals Toggle */}
          <button
            onClick={onTogglePetals}
            className={`p-2 rounded-full border text-xs transition-colors ${
              petalsEnabled
                ? 'border-[#B08968] bg-[#E5EFF8] text-[#B08968]'
                : 'border-[#D2E0EE] text-[#6D829B] hover:bg-[#F0F4F8]'
            }`}
            title={petalsEnabled ? 'Turn Off Petals' : 'Turn On Petals'}
            aria-label="Toggle petals"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D2E0EE] hover:border-[#B08968] text-[#202D3C] hover:text-[#B08968] text-xs font-medium transition-colors bg-white shadow-2xs"
            title="Share invitation"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-[10px] uppercase font-bold text-green-700">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#B08968]" />
                <span className="hidden sm:inline text-[10px] uppercase tracking-wider">Share</span>
              </>
            )}
          </button>

          {/* Visual Customizer / Edit Content Button */}
          <button
            onClick={onOpenEditor}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#B08968] hover:bg-[#8B6F47] text-white text-xs font-medium shadow-sm transition-all duration-200"
            title="Edit Content & Photos"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Edit Content</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
