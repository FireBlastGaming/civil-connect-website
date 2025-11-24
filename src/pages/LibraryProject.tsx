import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, Users, Calendar, MapPin } from "lucide-react";
import libraryProject from "@/assets/library-project.jpg";

const LibraryProject = () => {
  const goals = [
    "Design a modern library that serves as a community hub",
    "Create flexible spaces for reading, studying, and community events",
    "Integrate technology while maintaining traditional library services",
    "Ensure accessibility for all ages and abilities",
    "Plan for sustainable, energy-efficient operations",
    "Foster community engagement and cultural programming",
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-foreground">Library Project</span>
          </div>
        </div>
      </div>

      {/* Project Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={libraryProject}
            alt="Library Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <Badge className="mb-4 bg-accent text-accent-foreground text-sm px-4 py-1">
              Active Project
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Library Project
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Designing concept plans for a modern community library in a small town near
              Edmonton, fostering learning and connection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <AnimatedSection delay={0.1}>
              <Card className="p-6 border-2 hover:border-primary transition-all">
                <Calendar className="h-10 w-10 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">Duration</h3>
                <p className="text-muted-foreground">15 months (In Progress)</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-6 border-2 hover:border-primary transition-all">
                <Users className="h-10 w-10 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">Team Size</h3>
                <p className="text-muted-foreground">18 student contributors</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="p-6 border-2 hover:border-primary transition-all">
                <MapPin className="h-10 w-10 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">Location</h3>
                <p className="text-muted-foreground">Small Town near Edmonton</p>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <Card className="p-8 md:p-12 border-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Library Project showcases Civil Connect's commitment to serving
                  communities beyond Edmonton's city limits. Partnering with a small town
                  municipality, our team is developing comprehensive design concepts for a
                  modern public library that will serve as the community's cultural and
                  educational heart.
                </p>
                <p>
                  This project addresses the unique challenges of rural library design:
                  balancing traditional library services with modern technology, creating
                  flexible spaces that can host diverse community events, and ensuring
                  the facility remains relevant and vibrant for decades to come.
                </p>
                <p>
                  Students are gaining hands-on experience in architectural planning, community
                  engagement, grant writing, and public facility design. The concepts developed
                  will help the municipality secure funding and move forward with construction
                  of this vital community resource.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Project Goals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating a multifunctional space that serves the entire community
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {goals.map((goal, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-6 mb-4 border-l-4 border-l-accent hover:shadow-card transition-all">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground">{goal}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Projected Impact</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { value: "8000+", label: "Community Members Served" },
              { value: "15,000", label: "Square Feet Designed" },
              { value: "50+", label: "Weekly Programs Planned" },
              { value: "100%", label: "Community Accessible" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <Card className="p-6 text-center border-2 hover:border-accent transition-all">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card className="p-8 bg-primary text-primary-foreground h-full">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">💬</div>
                  <div>
                    <p className="text-lg italic mb-4">
                      "Designing a library for a real community has been incredibly rewarding.
                      We're not just creating a building—we're helping shape the cultural
                      future of an entire town."
                    </p>
                    <p className="font-semibold">— Architecture Student, Project Lead</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-8 border-2 border-accent h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Beyond Books
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modern libraries are community anchors that go far beyond book lending.
                  Our design includes maker spaces, meeting rooms, children's areas, quiet
                  study zones, and technology centers—creating a vibrant hub where community
                  members of all ages can learn, create, and connect.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-primary-foreground mb-6">
                Be Part of Something Bigger
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Work on meaningful projects that create lasting community impact. Join
                Civil Connect and turn your skills into real-world solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-involved">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
                  >
                    Join Our Team
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-background/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6 transition-all duration-300"
                  >
                    Explore More Projects
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LibraryProject;
