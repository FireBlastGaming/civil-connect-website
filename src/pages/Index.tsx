import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, Users, Target, Lightbulb, CheckCircle2, Rocket, ArrowRight } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import neighbourhoodProject from "@/assets/neighbourhood-project.jpg";
import napRoomProject from "@/assets/nap-room-project.jpg";
import libraryProject from "@/assets/library-project.jpg";

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

        {/* Floating Shapes */}
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
                  className="text-lg px-8 py-6 h-[60px] bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </Button>
              </Link>
            </div>
          </motion.div>

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
            <StatCard icon={Rocket} value="50+" label="Projects Completed" delay={0.1} />
            <StatCard icon={Users} value="200+" label="Students Involved" delay={0.2} />
            <StatCard icon={Target} value="30+" label="Community Partners" delay={0.3} />
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
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
            <Link to="/get-involved">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Get Involved Today
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
