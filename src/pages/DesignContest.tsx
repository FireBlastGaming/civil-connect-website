import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Calendar, DollarSign, Users, ExternalLink, Palette, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-design-contest.jpg";

const DesignContest = () => {
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
              Design Contest 2026
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Create a concept for an art installation on UAlberta's Greenspaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="bg-card rounded-lg shadow-card p-8 mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">About the Contest</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Civil Connect is hosting a design contest to create a concept for an art installation 
                that will be proposed on one of UAlberta's Greenspaces! Teams of up to 6 will compete 
                to create a preliminary design for a sculpture that will be painted by student groups on campus.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A judging panel comprising of community leaders, industry professionals, and professors 
                will review the submissions at an event on <strong>January 23rd, 2026</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>No engineering knowledge is required</strong> - this is a multidisciplinary contest, 
                open to all faculties!
              </p>
            </div>
          </AnimatedSection>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-lg shadow-card p-6 h-full">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-4"
                >
                  <Trophy className="h-12 w-12 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Grand Prize</h3>
                <p className="text-muted-foreground">
                  The winning team will win a substantial cash prize and have their proposal fully engineered by a group of Civil Connect student members. It will then be proposed to the University Administration and the UASU Green Fund for funding of up to <strong>$10,000</strong>! The winning team will also get a chance to present at our Connect 2026: Sustainable Innovations Symposium!
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-lg shadow-card p-6 h-full">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-4"
                >
                  <DollarSign className="h-12 w-12 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Runner-Up Prizes</h3>
                <p className="text-muted-foreground">
                  A prize pool of over <strong>$500</strong> is up for grabs for non-winning teams!
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-card rounded-lg shadow-card p-6 h-full">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-4"
                >
                  <Users className="h-12 w-12 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Team Size</h3>
                <p className="text-muted-foreground">
                  Teams of up to <strong>6 members</strong> can participate. 
                  Multidisciplinary teams encouraged!
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-card rounded-lg shadow-card p-6 h-full">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-4"
                >
                  <Palette className="h-12 w-12 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Professional Development</h3>
                <p className="text-muted-foreground">
                  Winning design will be fully designed and costed by a Civil Connect engineering team, 
                  then showcased at our Connect 2026: Sustainable Innovation Symposium.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Timeline */}
          <AnimatedSection delay={0.5}>
            <div className="bg-card rounded-lg shadow-card p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold text-foreground">Important Dates</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4 py-2">
                  <h3 className="text-xl font-semibold text-foreground">Team Registration</h3>
                  <p className="text-muted-foreground">December 1-19th, 2025</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-xl font-semibold text-foreground">Judging Event</h3>
                  <p className="text-muted-foreground">January 23rd, 2026</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection delay={0.6}>
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent"
                animate={{
                  background: [
                    "linear-gradient(135deg, hsl(240 100% 25%) 0%, hsl(240 80% 35%) 50%, hsl(35 95% 55%) 100%)",
                    "linear-gradient(225deg, hsl(240 100% 25%) 0%, hsl(35 95% 55%) 50%, hsl(240 80% 35%) 100%)",
                    "linear-gradient(315deg, hsl(35 95% 55%) 0%, hsl(240 100% 25%) 50%, hsl(240 80% 35%) 100%)",
                    "linear-gradient(135deg, hsl(240 100% 25%) 0%, hsl(240 80% 35%) 50%, hsl(35 95% 55%) 100%)",
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating artistic elements */}
              <motion.div
                className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent/20 blur-xl"
                animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary-foreground/10 blur-2xl"
                animate={{ y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-accent/30 blur-lg"
                animate={{ y: [0, 15, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              
              {/* Decorative brush strokes */}
              <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 400 300">
                <motion.path
                  d="M0,150 Q100,50 200,150 T400,150"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-primary-foreground"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.path
                  d="M0,200 Q150,100 300,200 T400,180"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-accent"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.5, delay: 1 }}
                />
              </svg>

              {/* Content */}
              <div className="relative z-10 p-12 md:p-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-1 bg-accent/20 rounded-full text-primary-foreground/90 text-sm font-medium mb-4 backdrop-blur-sm">
                    🎨 Art Installation Contest
                  </span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Ready to Create?
                </motion.h2>
                
                <motion.p 
                  className="text-xl md:text-2xl text-primary-foreground/90 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Registration opens <strong className="text-accent">December 1st, 2025</strong>
                </motion.p>
                
                <motion.p 
                  className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Visit the contest site for full details, eligibility requirements, and updates!
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdnSRo6-H_oZ0EyfqPBRpFt7tRtu3xDzHXVSaHEqfJ8JWWRtQ/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="lg"
                        className="bg-background text-primary hover:bg-background/95 font-bold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span className="mr-2">✨</span>
                        Register Here
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </a>
                  <a 
                    href="https://hellowestdistrict.com/art-contest/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-10 py-7 rounded-xl transition-all duration-300"
                      >
                        More Info About Contest
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default DesignContest;
