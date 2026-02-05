import { motion } from "framer-motion";
import {
  SiReact,
  SiVite,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiFlutter,
  SiPostman,
  SiOpenai,
} from "react-icons/si";
import {
  DiVisualstudio
} from "react-icons/di";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const skills = [
  <SiReact />,
  <SiVite />,
  <SiNodedotjs />,
  <SiPhp />,
  <SiLaravel />,
  <SiMysql />,
  <SiFlutter />,
  <DiVisualstudio />,
  <SiPostman />,
  <SiOpenai />,
];


const SkillsRow = () => {
  return (
    <div className="relative w-screen overflow-hidden">
      
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 
                      bg-gradient-to-r from-background to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 
                      bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex items-center gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((Icon, index) => (
          <div
            key={index}
            className="
              text-5xl
              opacity-40 grayscale
              transition-all duration-300
              hover:opacity-100 hover:grayscale-0
            "
          >
            {Icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 overflow-hidden"
    >
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-muted-foreground">
          Technologies I use to build scalable backend systems
        </p>
      </div>

      <SkillsRow />
    </section>
  );
};

export default SkillsSection;






