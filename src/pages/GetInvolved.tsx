import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Network,
  Trophy,
  Rocket,
  Heart,
  Mail,
  Linkedin,
} from "lucide-react";
import heroJoin from "@/assets/hero-join.jpg";

const GetInvolved = () => {

  const benefits = [
    {
      icon: Briefcase,
      title: "Real-World Experience",
      description:
        "Work on actual projects with real clients, gaining invaluable hands-on experience that sets you apart in the job market.",
    },
    {
      icon: Network,
      title: "Industry Connections",
      description:
        "Build relationships with professionals, community leaders, and fellow students that will benefit your career for years to come.",
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description:
        "Develop both technical and soft skills through project work, workshops, and mentorship from experienced professionals.",
    },
    {
      icon: Trophy,
      title: "Portfolio Building",
      description:
        "Create a portfolio of completed projects that demonstrate your capabilities to future employers and graduate schools.",
    },
    {
      icon: Rocket,
      title: "Leadership Opportunities",
      description:
        "Take on leadership roles, manage teams, and develop project management skills that will accelerate your career growth.",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description:
        "Make a tangible difference in Edmonton's development while gaining satisfaction from meaningful contribution.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroJoin}
            alt="Join Civil Connect"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Join Civil Connect Edmonton
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Start making a real impact today while building your professional future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Join Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Membership in Civil Connect Edmonton offers unique benefits that go far beyond
              traditional student clubs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <Card className="p-6 h-full hover:shadow-card transition-all duration-300 border-2 hover:border-accent group">
                  <motion.div
                    className="mb-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <div className="inline-block p-4 bg-gradient-accent rounded-full">
                      <benefit.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ways to Get Involved
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a student, professional, or community member, there's a place for
              you at Civil Connect
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="p-8 text-center border-2 hover:border-primary transition-all h-full">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Active Member</h3>
                <p className="text-muted-foreground mb-6">
                  Join project teams, attend workshops, and collaborate on real community
                  initiatives. Perfect for students looking to gain hands-on experience.
                </p>
                <ul className="text-left text-sm text-muted-foreground space-y-2">
                  <li>• Weekly team meetings</li>
                  <li>• Project assignments</li>
                  <li>• Skill development workshops</li>
                  <li>• Networking events</li>
                </ul>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-8 text-center border-2 border-accent hover:border-primary transition-all h-full bg-accent/5">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Project Lead</h3>
                <p className="text-muted-foreground mb-6">
                  Take on leadership roles, manage teams, and guide projects from conception
                  to completion. Build essential management skills.
                </p>
                <ul className="text-left text-sm text-muted-foreground space-y-2">
                  <li>• Lead project teams</li>
                  <li>• Client communication</li>
                  <li>• Deadline management</li>
                  <li>• Mentorship opportunities</li>
                </ul>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="p-8 text-center border-2 hover:border-primary transition-all h-full">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-primary mb-4">Community Partner</h3>
                <p className="text-muted-foreground mb-6">
                  Collaborate with our team to bring your community project ideas to life.
                  Ideal for organizations and landowners.
                </p>
                <ul className="text-left text-sm text-muted-foreground space-y-2">
                  <li>• Project consultation</li>
                  <li>• Professional deliverables</li>
                  <li>• Funding support documents</li>
                  <li>• Community engagement</li>
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Join Discord CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <Card className="p-12 border-2 shadow-card">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-6"
              >
                <svg
                  className="h-20 w-20 text-accent mx-auto"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </motion.div>
              
              <h2 className="text-4xl font-bold text-primary mb-4">
                Ready to Join?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our community on Discord to get started, meet members, and stay updated on all our projects and events
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
                  onClick={() => window.open("https://discord.gg/7dWt8WNuqh", "_blank")}
                >
                  Join Our Discord Server
                </Button>
              </motion.div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Have questions? Reach out to us on social media or join our Discord community
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="p-8 text-center hover:shadow-elevated transition-all">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <svg
                    className="h-16 w-16 text-accent mx-auto mb-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-3">Instagram</h3>
                <p className="text-muted-foreground mb-4">
                  Follow us for updates, project highlights, and behind-the-scenes content
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/civilconnectedmonton/",
                      "_blank"
                    )
                  }
                >
                  @civilconnectedmonton
                </Button>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-8 text-center hover:shadow-elevated transition-all">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <svg
                    className="h-16 w-16 text-accent mx-auto mb-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-3">Discord</h3>
                <p className="text-muted-foreground mb-4">
                  Join our community server to chat with members and stay informed
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() =>
                    window.open("https://discord.gg/7dWt8WNuqh", "_blank")
                  }
                >
                  Join Discord Server
                </Button>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="p-8 text-center hover:shadow-elevated transition-all">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Linkedin className="h-16 w-16 text-accent mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-3">LinkedIn</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with us professionally and stay updated on our initiatives
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() =>
                    window.open("https://www.linkedin.com/company/civil-connect-edmonton/", "_blank")
                  }
                >
                  Follow on LinkedIn
                </Button>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-12 text-center" delay={0.3}>
            <Card className="p-6 bg-primary-foreground/10 border-primary-foreground/20 max-w-2xl mx-auto">
              <Mail className="h-10 w-10 text-primary-foreground mx-auto mb-3" />
              <p className="text-primary-foreground/90">
                <strong>Meeting Times:</strong> Check our social media for current meeting
                schedules and event announcements
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
