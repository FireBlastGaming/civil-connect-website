import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
    >
      <Link to={link}>
        <Card className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-elevated">
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent">
              Learn More
              <motion.div
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Button>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
