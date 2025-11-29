import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Construction } from "lucide-react";
import heroImage from "@/assets/hero-projects.jpg";

const Conference = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/70" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Conference
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Under Construction Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="bg-card rounded-lg shadow-card p-12 text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-6"
              >
                <Construction className="h-24 w-24 text-accent mx-auto" />
              </motion.div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Under Construction
              </h2>
              <p className="text-xl text-muted-foreground">
                This page is currently being developed. Check back soon for updates!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Conference;
