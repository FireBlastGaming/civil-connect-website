import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Compass, Users, Lightbulb, Target, Award } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize creating meaningful impact in the Edmonton community through every project we undertake.",
    },
    {
      icon: Compass,
      title: "Student Empowerment",
      description: "Providing students with real-world opportunities to develop professional skills and industry connections.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building bridges between students, community partners, and industry professionals for mutual growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative solutions and fresh perspectives on urban planning and civil engineering challenges.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Maintaining high standards in all our project deliverables and community engagements.",
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Fostering an environment where students can develop both technical and soft skills for their careers.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroAbout}
            alt="About Civil Connect"
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
              About Civil Connect Edmonton
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Building bridges between academic excellence and community impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <Card className="p-8 h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-card">
                <div className="mb-6">
                  <div className="inline-block p-4 bg-primary rounded-full mb-4">
                    <Target className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower students by providing hands-on experience with real clients and real
                  projects, bridging the gap between classroom theory and professional practice.
                  We strive to create meaningful community impact while fostering the next generation
                  of civil engineers and urban planners.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card className="p-8 h-full border-2 hover:border-accent transition-all duration-300 hover:shadow-card">
                <div className="mb-6">
                  <div className="inline-block p-4 bg-accent rounded-full mb-4">
                    <Compass className="h-10 w-10 text-accent-foreground" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading student-driven organization in Western Canada for
                  connecting academic talent with community needs. We envision a future where
                  every civil engineering student has the opportunity to make a real difference
                  before graduation.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Civil Connect Edmonton
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="p-6 h-full hover:shadow-card transition-all duration-300 border-2 hover:border-accent group">
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-block p-4 bg-gradient-accent rounded-full">
                      <value.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals driving Civil Connect forward
            </p>
          </AnimatedSection>

          <AnimatedSection className="max-w-2xl mx-auto">
            <Card className="p-8 border-2 border-accent shadow-card">
              <div className="text-center mb-6">
                <div className="inline-block p-1 bg-gradient-accent rounded-full mb-4">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  Burhanuddin Yamani
                </h3>
                <p className="text-xl text-accent font-semibold mb-4">Founder & President</p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Burhanuddin founded Civil Connect Edmonton with a vision to revolutionize how
                  students engage with real-world civil engineering projects. His passion for
                  community development and student empowerment drives the organization's mission.
                </p>
                <p className="leading-relaxed">
                  Under his leadership, Civil Connect has grown to become a vital bridge between
                  academic learning and professional practice, partnering with numerous community
                  organizations and helping students build meaningful careers.
                </p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center" delay={0.3}>
            <Card className="p-8 bg-muted/50 border-2">
              <p className="text-lg text-muted-foreground italic">
                "Our team is constantly growing! We're always looking for passionate students
                and community members who want to make a difference. Join us in building
                Edmonton's future together."
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Impact by the Numbers
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "200+", label: "Student Members" },
              { value: "30+", label: "Community Partners" },
              { value: "5000+", label: "Community Members Impacted" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-primary-foreground/80">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
