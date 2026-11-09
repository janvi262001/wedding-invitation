import React, { useRef, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Sparkles, Heart } from 'lucide-react';

export default function ScratchReveal({ couple, onRevealed }) {
  const canvasRef = useRef(null);
  const [percentRevealed, setPercentRevealed] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Draw luxury metallic foil overlay
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#D2E0EE');
    gradient.addColorStop(0.25, '#F0F4F8');
    gradient.addColorStop(0.5, '#B08968');
    gradient.addColorStop(0.75, '#F0F4F8');
    gradient.addColorStop(1, '#D2E0EE');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative foil pattern / text
    ctx.font = '500 13px "Montserrat", sans-serif';
    ctx.fillStyle = 'rgba(43, 30, 23, 0.45)';
    ctx.textAlign = 'center';
    ctx.fillText('✦ SCRATCH HERE TO UNVEIL INVITATION ✦', width / 2, height / 2 - 10);
    ctx.font = '300 11px "Montserrat", sans-serif';
    ctx.fillText('Swipe or drag to reveal', width / 2, height / 2 + 15);

    // Add subtle ornamental border inside foil
    ctx.strokeStyle = 'rgba(176, 137, 104, 0.6)';
    ctx.lineWidth = 1;
    ctx.strokeRect(12, 12, width - 24, height - 24);
  }, []);

  const triggerCelebration = () => {
    if (isUnlocked) return;
    setIsUnlocked(true);

    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B08968', '#D2E0EE', '#F0F4F8', '#FFD700', '#E5EFF8'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#B08968', '#D4AF37', '#FFFFFF']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#B08968', '#D4AF37', '#FFFFFF']
        });
      }, 250);
    } catch (e) {
      // fallback if canvas-confetti is not loaded
    }

    if (onRevealed) {
      setTimeout(() => {
        onRevealed();
      }, 700);
    }
  };

  const calculateScratchedPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Sample pixels in steps of 10 to keep it blazing fast
    const step = 10;
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;
    let transparentCount = 0;
    let totalSamples = 0;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        if (data[index + 3] < 128) {
          transparentCount++;
        }
        totalSamples++;
      }
    }

    const ratio = Math.round((transparentCount / totalSamples) * 100);
    setPercentRevealed(ratio);

    if (ratio >= 35) {
      triggerCelebration();
    }
  };

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2, false);
    ctx.fill();

    calculateScratchedPercentage();
  };

  const handlePointerDown = (e) => {
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
  };

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F0F4F8] transition-opacity duration-1000 p-4 ${isUnlocked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Top Banner Notice */}
      <div className="absolute top-0 inset-x-0 bg-[#2B1E17]/90 text-[#FBF6EE] text-center py-2 px-4 shadow-md backdrop-blur-sm z-30">
        <p className="text-[10px] tracking-[0.25em] uppercase font-semibold">Wedding Invitation Preview</p>
        <p className="text-[10px] text-[#E6D5BF]/90">Scratch the card below to unlock</p>
      </div>

      {/* Center Interactive Scratch Card */}
      <div className="relative w-full max-w-sm sm:max-w-md h-[460px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-[#D2E0EE] bg-white flex flex-col items-center justify-center text-center p-8 mt-6">
        {/* Revealed Content Behind the Scratch Canvas */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#F0F4F8] via-white to-[#F0F4F8] space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#E5EFF8] border border-[#B08968]/40 flex items-center justify-center text-[#B08968] animate-bounce">
            <Heart className="w-8 h-8 fill-[#B08968]" />
          </div>

          <div className="space-y-1">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#6D829B] font-semibold">
              You Are Cordially Invited
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#202D3C] leading-snug">
              {couple.groom.name} <br />
              <span className="italic font-serif text-[#B08968] text-2xl">&</span> <br />
              {couple.bride.name}
            </h2>
          </div>

          <p className="text-xs text-[#6D829B] tracking-wider uppercase font-medium">
            ✨ Unlocked! Welcome to our celebration ✨
          </p>
        </div>

        {/* Scratch Canvas Overlay */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="absolute inset-0 w-full h-full scratch-canvas z-10 transition-opacity duration-500"
          style={{ touchAction: 'none' }}
        />

        {/* Scratched percentage indicator & quick unlock button */}
        <div className="absolute bottom-6 inset-x-0 z-20 flex flex-col items-center gap-2 pointer-events-auto">
          <div className="text-[11px] font-medium tracking-widest px-4 py-1.5 rounded-full border border-[#D2E0EE] bg-[#F0F4F8]/90 text-[#6D829B] shadow-sm backdrop-blur-sm">
            {percentRevealed}% REVEALED
          </div>
          <button
            onClick={triggerCelebration}
            className="text-xs tracking-wider uppercase font-semibold text-[#B08968] hover:text-[#8B6F47] transition-colors py-1 px-3 underline underline-offset-4 decoration-[#B08968]/50"
          >
            Or tap here to open directly →
          </button>
        </div>
      </div>
    </div>
  );
}
