import { motion } from "framer-motion";
import { Server, Database, Code, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Server className="w-10 h-10" />,
    title: "API Development",
    description: "Building robust and scalable RESTful APIs",
    features: [
      "RESTful API design and implementation",
      "Authentication & authorization systems",
      "Third-party API integrations",
      "Node.js & PHP/Laravel backends",
    ],
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Database Design",
    description: "Architecting efficient database solutions",
    features: [
      "MySQL database architecture",
      "Data modeling and optimization",
      "Query performance tuning",
      "Database migration and management",
    ],
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: "Fullstack Projects",
    description: "End-to-end web and mobile solutions",
    features: [
      "Complete web application development",
      "React.js frontend with backend APIs",
      "Mobile apps with Flutter",
      "End-to-end project delivery",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional development services tailored to your needs
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group card-hover">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:glow">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <Code className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
