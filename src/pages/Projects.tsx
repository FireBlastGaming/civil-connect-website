import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import heroProjects from "@/assets/hero-projects.jpg";
import neighbourhoodProject from "@/assets/neighbourhood-project.jpg";
import napRoomProject from "@/assets/nap-room-project.jpg";
import libraryProject from "@/assets/library-project.jpg";

const Projects = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroProjects}
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Making Real Impact in Edmonton
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Current Active Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the innovative initiatives we're working on with community partners.
              Each project represents a unique opportunity for students to gain real-world
              experience while creating meaningful community impact.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <ProjectCard
              title="Neighbourhood Project"
              description="Developing a dense, transit-friendly, and walkable neighbourhood plan that prioritizes sustainability, community engagement, and quality of life for all residents."
              image={neighbourhoodProject}
              link="/projects/neighbourhood"
              delay={0.1}
            />
            <ProjectCard
              title="Nap Room Project"
              description="Creating modern wellness spaces on campus where students can recharge and prioritize their mental health during busy academic schedules. Focusing on comfort and accessibility."
              image={napRoomProject}
              link="/projects/nap-room"
              delay={0.2}
            />
            <ProjectCard
              title="Library Project"
              description="Designing concept plans for a modern community library in a small town near Edmonton, fostering learning, connection, and cultural enrichment for all ages."
              image={libraryProject}
              link="/projects/library"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* How to Propose Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 border-accent shadow-card">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gradient-accent rounded-full mb-4">
                  <Mail className="h-12 w-12 text-accent-foreground" />
                </div>
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Have a Project Idea?
                </h2>
                <p className="text-lg text-muted-foreground">
                  We're always looking for new opportunities to collaborate with community
                  partners and make a difference
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-muted/50">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      For Community Organizations
                    </h3>
                    <p className="text-muted-foreground">
                      Partner with us to develop professional project plans that help secure
                      funding and approvals for your community initiatives.
                    </p>
                  </Card>
                  <Card className="p-6 bg-muted/50">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      For Students
                    </h3>
                    <p className="text-muted-foreground">
                      Bring your ideas to the table and work with real clients to turn
                      concepts into actionable plans that benefit the community.
                    </p>
                  </Card>
                </div>

                <div className="text-center pt-6">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://www.instagram.com/civilconnectedmonton/', '_blank')}
                  >
                    Contact Us to Propose a Project
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Reach out via Instagram or Discord to discuss your project ideas
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">
              What We Look For in Projects
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="p-6 text-center h-full border-2 hover:border-primary transition-all">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Community Impact
                </h3>
                <p className="text-muted-foreground">
                  Projects that create meaningful, lasting benefits for Edmonton residents
                  and communities
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-6 text-center h-full border-2 hover:border-primary transition-all">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Learning Opportunities
                </h3>
                <p className="text-muted-foreground">
                  Initiatives that provide valuable hands-on experience for students in
                  relevant fields
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="p-6 text-center h-full border-2 hover:border-primary transition-all">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Collaborative Spirit
                </h3>
                <p className="text-muted-foreground">
                  Partners who are engaged, communicative, and committed to working together
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
