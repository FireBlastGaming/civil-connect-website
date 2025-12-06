import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    setIsLoaded(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isLoaded || !timeLeft) {
    return (
      <div className={`flex gap-4 sm:gap-6 justify-center ${className}`}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 sm:w-20 md:w-24 h-20 sm:h-24 md:h-28 rounded-2xl bg-primary/20" />
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className={`flex gap-3 sm:gap-5 md:gap-6 justify-center items-end ${className}`}>
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.08,
            type: "spring",
            stiffness: 200
          }}
        >
          {/* Card Container */}
          <div className="relative group">
            {/* Glow effect behind */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary via-primary/60 to-primary/30 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            
            {/* Main card */}
            <div className="relative w-16 sm:w-20 md:w-24 h-20 sm:h-24 md:h-28 rounded-2xl overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20" />
              
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-accent/60 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-accent/60 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-accent/60 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-accent/60 rounded-br-xl" />
              
              {/* Number display */}
              <div className="relative h-full flex items-center justify-center">
                <motion.span
                  key={unit.value}
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-foreground tabular-nums tracking-tight"
                  initial={{ scale: 1.1, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    textShadow: "0 2px 10px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)"
                  }}
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
              </div>
              
              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
          
          {/* Label */}
          <motion.span 
            className="mt-3 text-xs sm:text-sm font-semibold text-accent-foreground/90 uppercase tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.08 }}
          >
            {unit.label}
          </motion.span>
        </motion.div>
      ))}
      
      {/* Decorative separators between units */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default CountdownTimer;
