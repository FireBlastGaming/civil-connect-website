import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-[150px] md:text-[200px] font-bold text-primary leading-none">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105"
              >
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                View Projects
              </Button>
            </Link>
          </motion.div>

          {/* Decorative Icon */}
          <motion.div
            className="mt-16"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Home className="h-20 w-20 text-accent/30 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
