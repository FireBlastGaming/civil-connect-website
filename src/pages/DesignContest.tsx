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
            <div className="bg-gradient-to-r from-primary to-accent rounded-lg shadow-elevated p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Registration opens <strong>December 1st, 2025</strong>
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Visit the contest site for full details, eligibility requirements, and updates!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdnSRo6-H_oZ0EyfqPBRpFt7tRtu3xDzHXVSaHEqfJ8JWWRtQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-background text-primary hover:bg-background/90 font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                  >
                    Register Here
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a 
                  href="https://hellowestdistrict.com/art-contest/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-background/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                  >
                    More Info About Contest
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default DesignContest;
