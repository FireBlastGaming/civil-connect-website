import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
  label?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, label = "Registration Closes In" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-primary text-primary-foreground rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] shadow-elevated"
      >
        <span className="text-2xl md:text-4xl font-bold tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </motion.div>
      <span className="text-xs md:text-sm font-medium text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );

  if (isExpired) {
    return (
      <div className="text-center py-4">
        <span className="text-lg font-semibold text-destructive">Registration has closed</span>
      </div>
    );
  }

  return (
    <div className="text-center">
      <motion.p
        className="text-lg md:text-xl font-semibold text-foreground mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {label}
      </motion.p>
      <div className="flex justify-center items-center gap-2 md:gap-4">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-2xl md:text-3xl font-bold text-accent mt-[-24px]">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-2xl md:text-3xl font-bold text-accent mt-[-24px]">:</span>
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <span className="text-2xl md:text-3xl font-bold text-accent mt-[-24px]">:</span>
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
