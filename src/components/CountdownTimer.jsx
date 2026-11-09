import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (num) => String(num).padStart(2, '0');

  const timeBlocks = [
    { label: 'Days', value: padZero(timeLeft.days) },
    { label: 'Hours', value: padZero(timeLeft.hours) },
    { label: 'Mins', value: padZero(timeLeft.minutes) },
    { label: 'Secs', value: padZero(timeLeft.seconds) },
  ];

  return (
    <div className="text-center space-y-4 py-8">
      <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold text-[#B08968]">
        Counting Down To Forever
      </p>

      <div className="flex flex-nowrap justify-center gap-2 sm:gap-4 md:gap-6">
        {timeBlocks.map((block, idx) => (
          <div key={idx} className="text-center w-[68px] sm:w-[80px] shrink-0 flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shrink-0 border-[1.5px] border-[#B08968] bg-[#E5EFF8] shadow-sm">
              <span className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#202D3C]">
                {block.value}
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase mt-2 font-semibold text-[#6D829B]">
              {block.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
