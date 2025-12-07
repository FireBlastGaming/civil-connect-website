import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, CheckCircle2, Users, Calendar, Building2 } from "lucide-react";
import napRoomProject from "@/assets/nap-room-project.jpg";

const NapRoomProject = () => {
  const goals = [
    "Design comfortable, private nap pods for student wellness",
    "Create a calming environment optimized for rest and recovery",
    "Integrate booking systems for fair access and scheduling",
    "Ensure accessibility for students with different needs",
    "Incorporate sound dampening and ambient lighting controls",
    "Develop maintenance and hygiene protocols",
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
            <span className="text-foreground">Nap Room Project</span>
          </div>
        </div>
      </div>

      {/* Project Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={napRoomProject}
            alt="Nap Room Project"
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
              Nap Room Project
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Creating modern wellness spaces on campus where students can recharge and
              prioritize their mental health during busy academic schedules
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
                <h3 className="text-lg font-semibold text-primary mb-2">Est. Completion</h3>
                <p className="text-muted-foreground">February 2026</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-6 border-2 hover:border-primary transition-all">
                <Users className="h-10 w-10 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">Team Size</h3>
                <p className="text-muted-foreground">~5 student contributors</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="p-6 border-2 hover:border-primary transition-all">
                <Building2 className="h-10 w-10 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">Partner</h3>
                <p className="text-muted-foreground">University Campus Services</p>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <Card className="p-8 md:p-12 border-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Nap Room Project emerged from a critical need identified by students:
                  dedicated spaces on campus for rest and mental wellness. In today's demanding
                  academic environment, students often face long days of classes, labs, and
                  study sessions with limited opportunities for rest.
                </p>
                <p>
                  Our team is designing modern, comfortable nap rooms that provide students
                  with a sanctuary for brief rest periods. These spaces will feature
                  ergonomic nap pods, calming lighting, sound dampening, and climate control
                  to create optimal conditions for rejuvenation.
                </p>
                <p>
                  This project demonstrates how student feedback can translate into real
                  infrastructure improvements. Students are learning about interior design,
                  space planning, accessibility standards, and project management while
                  creating a facility that will directly benefit their peers.
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
              Objectives focused on student wellness and accessibility
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
            <h2 className="text-4xl font-bold text-primary mb-6">Expected Impact</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { value: "2000+", label: "Students to Benefit" },
              { value: "20", label: "Nap Pods Planned" },
              { value: "24/7", label: "Accessibility" },
              { value: "100%", label: "Free to Students" },
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
                      "This project addresses a real need on campus. It's rewarding to work
                      on something that will directly improve student wellness and quality
                      of life."
                    </p>
                    <p className="font-semibold">— Student Designer</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-8 border-2 border-accent h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Why Student Wellness Matters
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Research shows that adequate rest significantly improves academic performance,
                  mental health, and overall well-being. By providing accessible nap spaces,
                  we're supporting students in managing stress, improving focus, and
                  maintaining better physical and mental health throughout their studies.
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
              <Moon className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-primary-foreground mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Help us create more projects that prioritize student wellness and campus
                improvement. Your involvement can make a real difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-involved">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
                  >
                    Get Involved
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-background/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6 transition-all duration-300"
                  >
                    View All Projects
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

export default NapRoomProject;
