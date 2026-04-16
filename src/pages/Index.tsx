import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";
import Particles from "@/components/Particles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, CheckCircle2, Rocket, ArrowRight, Award, Trophy, Leaf, Mail, Handshake } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import neighbourhoodProject from "@/assets/neighbourhood-project.jpg";
import napRoomProject from "@/assets/nap-room-project.jpg";
import libraryProject from "@/assets/library-project.jpg";
import climateAwardLogo from "@/assets/climate-award-logo.jpg";
import pivotGreenLogo from "@/assets/pivot-green-logo.png";
import smallChangeFundLogo from "@/assets/small-change-fund-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroHome}
            alt="Civil Connect Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />
        </div>
        <Particles count={30} />

        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-32 h-32 bg-accent/30 rounded-full blur-2xl"
          animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Empowering students in Edmonton to work alongside{" "}
              <span className="text-accent">real clients</span>, on{" "}
              <span className="text-accent">real projects</span>, to make{" "}
              <span className="text-accent">real impacts</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
              Join a community of driven students creating tangible change in their community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-5">
              <Link to="/get-involved">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 h-[60px] bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Join Us
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-[60px] bg-background/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🏆 Award Recognition Announcement */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-primary">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        {/* Floating leaf particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent/20"
            style={{ left: `${15 + i * 15}%`, top: `${10 + (i % 3) * 30}%` }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          >
            <Leaf className="h-8 w-8" />
          </motion.div>
        ))}
        
        <Particles count={15} />

        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl animate-pulse" />
                  <div className="relative p-6 bg-gradient-to-br from-accent to-accent/80 rounded-full">
                    <Trophy className="h-16 w-16 text-accent-foreground" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="inline-block bg-accent/20 text-accent px-6 py-2 rounded-full font-bold text-sm mb-6 border border-accent/30">
                  🏆 AWARD-WINNING ORGANIZATION
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Canadian Youth Climate Action Award
              </motion.h2>
              
              <motion.div
                className="flex items-center justify-center gap-3 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Award className="h-6 w-6 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-accent">
                  Runner-Up — $3,500 Prize
                </span>
                <Award className="h-6 w-6 text-accent" />
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Civil Connect has been recognized by <strong className="text-accent">Pivot Green</strong> and the{" "}
                <strong className="text-accent">Small Change Fund</strong> for our inspiring efforts and positive impact 
                in the fight against climate change.
              </motion.p>

              <motion.p
                className="text-base text-primary-foreground/70 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Our work in designing climate-conscious infrastructure and challenging traditional suburban development patterns
                through transit-oriented, walkable, and sustainable neighbourhood planning earned us this national recognition.
              </motion.p>
            </div>
          </AnimatedSection>

          {/* Award Logo & Partner Logos */}
          <AnimatedSection delay={0.3}>
            <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-background/95 backdrop-blur border-2 border-accent/30 shadow-elevated">
              {/* Main Award Logo */}
              <motion.div
                className="flex justify-center mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <img
                    src={climateAwardLogo}
                    alt="Canadian Youth Climate Action Award"
                    className="relative h-40 md:h-52 w-auto object-contain"
                  />
                </div>
              </motion.div>

              {/* Decorative Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">In Partnership With</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              </div>

              {/* Partner Logos */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <img
                      src={pivotGreenLogo}
                      alt="Pivot Green"
                      className="relative h-16 md:h-20 w-auto object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <img
                      src={smallChangeFundLogo}
                      alt="Small Change Fund"
                      className="relative h-12 md:h-16 w-auto object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Civil Connect Edmonton is a student-led organization dedicated to bridging the gap
              between academic learning and real-world impact. We partner with Edmonton landowners
              and community groups to design project plans that help them secure funding and approvals.
              In return, our members gain invaluable industry connections and the opportunity to create
              meaningful change in the community.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard icon={Rocket} value="4" label="Ongoing Projects" delay={0.1} />
            <StatCard icon={Users} value="70+" label="Active Members" delay={0.2} />
            <StatCard icon={Target} value="10+" label="Partners" delay={0.3} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple three-step process connects students with real-world opportunities
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2} direction="up">
              <Card className="p-8 text-center hover:shadow-card transition-all duration-300 border-2 hover:border-primary">
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-6 bg-primary rounded-full">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4">Step 1: Connect</h3>
                <p className="text-muted-foreground">
                  Join our community and get matched with exciting projects that align with your
                  interests and skills in civil engineering and urban planning.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="up">
              <Card className="p-8 text-center hover:shadow-card transition-all duration-300 border-2 hover:border-primary">
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-6 bg-accent rounded-full">
                    <Lightbulb className="h-12 w-12 text-accent-foreground" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4">Step 2: Collaborate</h3>
                <p className="text-muted-foreground">
                  Work alongside experienced mentors and real clients to develop professional
                  project plans and innovative solutions for community challenges.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4} direction="up">
              <Card className="p-8 text-center hover:shadow-card transition-all duration-300 border-2 hover:border-primary">
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-6 bg-primary rounded-full">
                    <CheckCircle2 className="h-12 w-12 text-primary-foreground" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4">Step 3: Impact</h3>
                <p className="text-muted-foreground">
                  See your work come to life as projects get approved, funded, and implemented,
                  creating lasting change in the Edmonton community.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Current Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the impactful initiatives we're working on with community partners
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Neighbourhood Project"
              description="Developing a dense, transit-friendly, and walkable neighbourhood plan that prioritizes sustainability and community engagement."
              image={neighbourhoodProject}
              link="/projects/neighbourhood"
              delay={0.1}
            />
            <ProjectCard
              title="Nap Room Project"
              description="Creating modern wellness spaces on campus where students can recharge and prioritize their mental health during busy academic schedules."
              image={napRoomProject}
              link="/projects/nap-room"
              delay={0.2}
            />
            <ProjectCard
              title="Library Project"
              description="Designing concept plans for a modern community library in a small town near Edmonton, fostering learning and connection."
              image={libraryProject}
              link="/projects/library"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Meet the Creator Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-accent shadow-elevated">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Meet the Creator
                </h2>
                <div className="text-3xl font-bold text-accent mb-6">
                  Burhanuddin Yamani
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  Burhanuddin Yamani founded Civil Connect Edmonton with a vision to empower
                  students to make tangible impacts in their community. As a passionate civil
                  engineering student, Burhanuddin recognized the gap between classroom learning
                  and real-world application.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Through Civil Connect, he has created a platform where students can collaborate
                  with actual clients on meaningful projects, gaining invaluable industry experience
                  while contributing to Edmonton's growth and development.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-accent">
                  "Our mission is to bridge the gap between academic knowledge and real-world impact,
                  creating opportunities for students to grow while making their community better."
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action Section */}

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <Particles count={20} />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Join Civil Connect Edmonton today and start working on projects that matter.
              Gain real-world experience, build your network, and create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/get-involved">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Get Involved Today
                </Button>
              </Link>
              <motion.a
                href="mailto:gen.civil.connect@gmail.com"
                className="inline-flex items-center gap-2 text-lg px-10 py-6 rounded-md border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-5 w-5" />
                Partner With Us
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
