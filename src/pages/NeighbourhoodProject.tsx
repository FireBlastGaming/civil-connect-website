import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, CheckCircle2, Users, Calendar, MapPin } from "lucide-react";
import neighbourhoodProject from "@/assets/neighbourhood-project.jpg";

const NeighbourhoodProject = () => {
  const goals = [
    "Create a transit-oriented development plan that reduces car dependency",
    "Design walkable streets with wide sidewalks and safe crossings",
    "Integrate green spaces and parks throughout the neighborhood",
    "Plan for mixed-use development that combines residential and commercial",
    "Ensure affordable housing options for diverse income levels",
    "Incorporate sustainable infrastructure and renewable energy",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

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
            <span className="text-foreground">Neighbourhood Project</span>
          </div>
        </div>
      </div>

      {/* Project Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={neighbourhoodProject}
            alt="Neighbourhood Project"
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
              Neighbourhood Project
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Developing a dense, transit-friendly, and walkable neighbourhood plan that
              prioritizes sustainability and community engagement
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
                <p className="text-muted-foreground">18 months (Ongoing)</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-6 border-2 hover:border-primary transition-all">
                <Users className="h-10 w-10 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">Team Size</h3>
                <p className="text-muted-foreground">25 student contributors</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="p-6 border-2 hover:border-primary transition-all">
                <MapPin className="h-10 w-10 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">Location</h3>
                <p className="text-muted-foreground">Greater Edmonton Area</p>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <Card className="p-8 md:p-12 border-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Neighbourhood Project represents Civil Connect Edmonton's commitment to
                  creating sustainable, livable communities. Working alongside urban planning
                  professionals and community stakeholders, our team is developing comprehensive
                  plans for a new residential development that prioritizes walkability, transit
                  access, and environmental sustainability.
                </p>
                <p>
                  This project addresses the growing need for thoughtfully designed urban spaces
                  that reduce car dependency, foster community connection, and provide diverse
                  housing options. Our students are gaining invaluable experience in land use
                  planning, transportation engineering, and community engagement.
                </p>
                <p>
                  Through extensive research, community consultations, and collaboration with
                  planning experts, we're creating a model for future neighbourhood development
                  that balances density with livability, accessibility with character, and
                  growth with sustainability.
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
              Key objectives guiding our neighbourhood planning efforts
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
            <h2 className="text-4xl font-bold text-primary mb-6">Impact & Progress</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { value: "5000+", label: "Residents to be Served" },
              { value: "40%", label: "Reduction in Car Trips" },
              { value: "15", label: "Parks & Green Spaces" },
              { value: "100%", label: "Transit Accessible" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <Card className="p-6 text-center border-2 hover:border-accent transition-all">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <Card className="p-8 bg-primary text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="text-6xl">💬</div>
                <div>
                  <p className="text-xl italic mb-4">
                    "Working on this project has given me invaluable experience in real-world
                    urban planning. I've learned how to balance competing interests, engage
                    with stakeholders, and create solutions that work for everyone."
                  </p>
                  <p className="font-semibold">— Project Team Member, Civil Engineering Student</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <Home className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-primary-foreground mb-6">
                Want to Get Involved?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Join our team and work on impactful projects like this one. Gain real-world
                experience while making a difference in Edmonton.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-involved">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
                  >
                    Join Civil Connect
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6"
                  >
                    View All Projects
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NeighbourhoodProject;
