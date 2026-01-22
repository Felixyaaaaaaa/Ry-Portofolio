import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Smartphone, 
  Wrench,
  Globe,
  Server
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const skills: Record<string, Skill[]> = {
  Frontend: [
    { name: "React.js", icon: <Globe className="w-8 h-8" />, category: "Frontend" },
    { name: "Vite", icon: <Code className="w-8 h-8" />, category: "Frontend" },
  ],
  Backend: [
    { name: "Node.js", icon: <Server className="w-8 h-8" />, category: "Backend" },
    { name: "PHP", icon: <Code className="w-8 h-8" />, category: "Backend" },
    { name: "Laravel", icon: <Code className="w-8 h-8" />, category: "Backend" },
  ],
  Database: [
    { name: "MySQL", icon: <Database className="w-8 h-8" />, category: "Database" },
  ],
  Mobile: [
    { name: "Flutter", icon: <Smartphone className="w-8 h-8" />, category: "Mobile" },
  ],
  Tools: [
    { name: "VS Code", icon: <Code className="w-8 h-8" />, category: "Tools" },
    { name: "Postman", icon: <Wrench className="w-8 h-8" />, category: "Tools" },
    { name: "AI Tools", icon: <Wrench className="w-8 h-8" />, category: "Tools" },
  ],
};

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  Backend: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  Database: "from-orange-500/20 to-yellow-500/20 border-orange-500/30",
  Mobile: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  Tools: "from-gray-500/20 to-slate-500/20 border-gray-500/30",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${categoryColors[category]} border backdrop-blur-sm flex flex-col items-center gap-3 card-hover cursor-default`}
                  >
                    <div className="text-primary">{skill.icon}</div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
