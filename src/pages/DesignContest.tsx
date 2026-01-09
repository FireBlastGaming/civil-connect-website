import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Particles from "@/components/Particles";
import CountdownTimer from "@/components/CountdownTimer";
import { Award, Calendar, DollarSign, Users, ExternalLink, Palette, Trophy, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-ualberta.png";
import contestPoster from "@/assets/contest-poster.png";

const DesignContest = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with UAlberta image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Color overlay to match site theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/80" />
          {/* Warm accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-accent/10" />
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-primary/40" />
        </div>
        <Particles count={25} />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              🎨 Art & Engineering Contest 2026
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
              <span className="block">Design a</span>
              <span className="text-accent">Campus Icon!</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Create a concept for an art installation on UAlberta's Greenspaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Deadline Banner */}
      <section className="relative bg-gradient-to-r from-accent via-accent to-accent/90 py-10 px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Calendar className="h-4 w-4 text-accent-foreground" />
              </motion.div>
              <span className="text-accent-foreground font-bold uppercase tracking-[0.15em] text-xs">
                Time Remaining
              </span>
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-accent-foreground mb-2">
              Registration Closes Soon!
            </h3>
            <p className="text-accent-foreground/80 mb-8 text-base sm:text-lg max-w-md">
              Secure your team's spot before <strong className="text-accent-foreground">January 16th, 2026</strong>
            </p>
            
            <CountdownTimer targetDate={new Date("2026-01-16T23:59:59")} />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-gradient-subtle relative">
        <Particles count={10} className="opacity-30" />
        <div className="container mx-auto max-w-5xl relative z-10">
          
          {/* About Section */}
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
                will review the submissions at an event on <strong>February 6th, 2026</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>No engineering knowledge is required</strong> - this is a multidisciplinary contest, 
                open to all faculties!
              </p>
            </div>
          </AnimatedSection>

          {/* AI Warning */}
          <AnimatedSection delay={0.1}>
            <div className="bg-destructive/10 border-2 border-destructive/30 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-destructive mb-2">Important: AI Usage Policy</h3>
                  <p className="text-foreground">
                    <strong>The use of AI for the design aspect of the art piece is strictly prohibited.</strong> 
                    {" "}All design concepts must be original human-created work. Submissions found to use 
                    AI-generated designs will be disqualified.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Prize Mindmap Structure */}
          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contest Rewards</h2>
              <div className="relative">
                {/* Center Grand Prize */}
                <div className="flex justify-center mb-8">
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                  >
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl scale-150" />
                    <div className="relative bg-gradient-to-br from-accent to-accent/80 rounded-full p-8 md:p-12 text-center shadow-elevated">
                      <Trophy className="h-12 w-12 md:h-16 md:w-16 text-accent-foreground mx-auto mb-3" />
                      <div className="text-3xl md:text-4xl font-bold text-accent-foreground">$500</div>
                      <div className="text-accent-foreground/90 font-medium">Cash Prize</div>
                    </div>
                  </motion.div>
                </div>

                {/* Connecting lines - visual only on larger screens */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                {/* Four elements around */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card rounded-lg shadow-card p-6 text-center border-2 border-transparent hover:border-accent transition-colors"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block mb-4"
                    >
                      <Trophy className="h-10 w-10 text-accent mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Grand Prize</h3>
                    <p className="text-muted-foreground text-sm">
                      Winning team receives a <strong>$500 cash prize</strong> and their design will be fully engineered by Civil Connect members, then proposed to University Administration for a chance at up to $10,000 in funding.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-card rounded-lg shadow-card p-6 text-center border-2 border-transparent hover:border-accent transition-colors"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block mb-4"
                    >
                      <DollarSign className="h-10 w-10 text-accent mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Runner-Up Prizes</h3>
                    <p className="text-muted-foreground text-sm">
                      A prize pool of over <strong>$500</strong> is up for grabs for non-winning teams!
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card rounded-lg shadow-card p-6 text-center border-2 border-transparent hover:border-accent transition-colors"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block mb-4"
                    >
                      <Users className="h-10 w-10 text-accent mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Team Size</h3>
                    <p className="text-muted-foreground text-sm">
                      Teams of up to <strong>6 members</strong>. Open exclusively to undergraduate and graduate students. Multidisciplinary teams encouraged!
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-card rounded-lg shadow-card p-6 text-center border-2 border-transparent hover:border-accent transition-colors"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-block mb-4"
                    >
                      <Palette className="h-10 w-10 text-accent mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Leave a Legacy</h3>
                    <p className="text-muted-foreground text-sm">
                      Winning design will be fully designed and costed by a Civil Connect engineering team, then showcased at our Connect 2026 Symposium.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contest Poster Section */}
          <AnimatedSection delay={0.3}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contest Poster</h2>
              <div className="relative max-w-2xl mx-auto">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-2xl blur-xl" />
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-elevated border-4 border-accent/30">
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-accent rounded-tl-xl" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-accent rounded-tr-xl" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-accent rounded-bl-xl" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-accent rounded-br-xl" />
                    
                    <img 
                      src={contestPoster} 
                      alt="Design a Campus Icon - Art & Engineering Contest Poster" 
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection delay={0.4}>
            <div className="bg-card rounded-lg shadow-card p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold text-foreground">Important Dates</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4 py-2">
                  <h3 className="text-xl font-semibold text-foreground">Team Registration</h3>
                  <p className="text-muted-foreground">December 1st, 2025 - January 16th, 2026</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="text-xl font-semibold text-foreground">Judging Event</h3>
                  <p className="text-muted-foreground">February 6th, 2026</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection delay={0.5}>
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
                        className="bg-background text-primary hover:bg-background/95 font-bold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
                      >
                        <span className="mr-2">✨</span>
                        Register Here
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1c59AoqISMyFDHpNfi79u7I6xdS-QcaNo/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-10 py-7 rounded-xl transition-all duration-300 min-w-[200px]"
                      >
                        Contest Guidebook
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
