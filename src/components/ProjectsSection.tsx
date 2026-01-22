import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string[];
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Warehouse Retail System",
    description: "A comprehensive warehouse management system for retail businesses with inventory tracking, order management, and reporting features.",
    tech: ["React.js", "Node.js", "MySQL", "PHP"],
    category: ["React", "Node.js", "PHP"],
  },
  {
    id: 2,
    title: "Company Profile Landing Page",
    description: "Modern and responsive company profile website with dynamic content, smooth animations, and optimized performance.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    category: ["React"],
  },
  {
    id: 3,
    title: "Mobile Library Application",
    description: "Cross-platform mobile application for library management with book borrowing, returns tracking, and user management.",
    tech: ["Flutter", "Node.js", "MySQL"],
    category: ["Flutter", "Node.js"],
  },
  {
    id: 4,
    title: "Student Financial Management",
    description: "Web-based system for managing student financial records, payments, and generating financial reports.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    category: ["PHP"],
  },
];

const filters = ["All", "React", "Node.js", "Flutter", "PHP"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All" || project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and personal projects
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`transition-all duration-300 ${
                activeFilter === filter
                  ? "glow"
                  : "border-primary/30 text-muted-foreground hover:text-primary hover:border-primary"
              }`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden card-hover">
                  {/* Project Preview */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center relative overflow-hidden">
                    <Folder className="w-20 h-20 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* More Projects Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12"
        >
          And other personal and academic projects...
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
