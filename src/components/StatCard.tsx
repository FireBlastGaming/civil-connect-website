import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, value, label, delay = 0 }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView && value.includes("+")) {
      const numericValue = parseInt(value.replace("+", ""));
      let current = 0;
      const increment = numericValue / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current) + "+");
        }
      }, 30);
      return () => clearInterval(timer);
    } else if (isInView) {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="p-6 text-center border-2 hover:border-accent transition-all duration-300 hover:shadow-card group">
        <motion.div
          className="flex justify-center mb-4"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-4 bg-gradient-accent rounded-full">
            <Icon className="h-8 w-8 text-accent-foreground" />
          </div>
        </motion.div>
        <div className="text-4xl font-bold text-primary mb-2">
          {displayValue}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </Card>
    </motion.div>
  );
};

export default StatCard;
