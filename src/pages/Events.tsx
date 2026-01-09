import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Archive, Construction } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import Particles from "@/components/Particles";

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  type: "workshop" | "competition" | "social" | "presentation";
}

// Sample events data - replace with real data later
const eventsData: Event[] = [
  {
    id: "1",
    title: "Design Contest Judging Event",
    date: new Date("2026-02-06"),
    time: "5:00 PM - 8:00 PM",
    location: "University of Alberta",
    description: "Join us for the Design a Campus Icon contest judging event where teams will present their art installation concepts.",
    type: "competition",
  },
  {
    id: "2",
    title: "Connect 2026: Sustainable Innovations Symposium",
    date: new Date("2026-03-15"),
    time: "9:00 AM - 5:00 PM",
    location: "UAlberta Main Campus",
    description: "Our flagship symposium bringing together students, industry professionals, and community leaders to discuss sustainable innovations.",
    type: "presentation",
  },
];

const getEventTypeColor = (type: Event["type"]) => {
  switch (type) {
    case "workshop":
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    case "competition":
      return "bg-accent/10 text-accent border-accent/20";
    case "social":
      return "bg-green-500/10 text-green-600 border-green-500/20";
    case "presentation":
      return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

const EventCard = ({ event, isArchived }: { event: Event; isArchived: boolean }) => {
  const formattedDate = event.date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={isArchived ? "opacity-60" : ""}
    >
      <Card className={`p-6 border-2 transition-all duration-300 ${isArchived ? "border-muted" : "border-transparent hover:border-accent hover:shadow-card"}`}>
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="flex-shrink-0">
            <div className={`p-4 rounded-lg ${isArchived ? "bg-muted" : "bg-primary"} text-center min-w-[80px]`}>
              <div className={`text-2xl font-bold ${isArchived ? "text-muted-foreground" : "text-primary-foreground"}`}>
                {event.date.getDate()}
              </div>
              <div className={`text-sm ${isArchived ? "text-muted-foreground" : "text-primary-foreground/80"}`}>
                {event.date.toLocaleDateString("en-US", { month: "short" })}
              </div>
              <div className={`text-xs ${isArchived ? "text-muted-foreground" : "text-primary-foreground/60"}`}>
                {event.date.getFullYear()}
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
              {isArchived && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-muted">
                  <Archive className="inline h-3 w-3 mr-1" />
                  Archived
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
            <p className="text-muted-foreground mb-4">{event.description}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {event.time}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {event.location}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Events = () => {
  const now = new Date();
  
  // Sort events by date and separate upcoming from archived
  const sortedEvents = [...eventsData].sort((a, b) => a.date.getTime() - b.date.getTime());
  const upcomingEvents = sortedEvents.filter(event => event.date >= now);
  const archivedEvents = sortedEvents.filter(event => event.date < now);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/70" />
        </div>
        <Particles count={15} />

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Events
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Stay updated with our upcoming events and activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Under Construction Notice */}
      <section className="py-8 bg-accent/10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 text-accent">
              <Construction className="h-6 w-6" />
              <span className="font-semibold">This page is under construction. More events coming soon!</span>
              <Construction className="h-6 w-6" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-accent" />
              Upcoming Events
            </h2>
          </AnimatedSection>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 0.1}>
                  <EventCard event={event} isArchived={false} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <Card className="p-8 text-center">
                <p className="text-muted-foreground text-lg">
                  No upcoming events at the moment. Check back soon!
                </p>
              </Card>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Archived Events */}
      {archivedEvents.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground/70 mb-8 flex items-center gap-3">
                <Archive className="h-8 w-8 text-muted-foreground" />
                Past Events
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {archivedEvents.map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 0.1}>
                  <EventCard event={event} isArchived={true} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Events;
